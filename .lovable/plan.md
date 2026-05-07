## Objetivo

Reordenar os campos do formulário (Modelo → Ano → Versão) e implementar cascata real, onde o Modelo filtra os Anos disponíveis, e o Ano filtra as Versões compatíveis (segundo `de`/`ate` de cada versão).

## 1. Reestruturar `src/data/vehicles.ts`

Trocar a estrutura atual (`modelo: string[]`) por uma estrutura com período de fabricação por modelo e por versão.

Nova tipagem:

```ts
export type VersionEntry = { versao: string; de: number; ate: number };
export type ModelEntry = { de: number; ate: number; versoes: VersionEntry[] };
export type VehicleData = Record<string, Record<string, Record<string, ModelEntry>>>;
```

Onde `ate` aceita o sentinela `9999` para representar "hoje" (renderizado como o ano atual = 2025 na UI).

Popular toda a base de Carros com os dados fornecidos (Chevrolet, Fiat, Volkswagen, Ford, Toyota, Honda, Hyundai, Jeep, Renault, Nissan, Mitsubishi, Kia), com `de`/`ate` por modelo e por versão exatamente como na lista da mensagem.

Modelos atualmente listados que não aparecem no novo dataset (ex.: Doblo, Fiorino, Tiguan, Voyage, Santana, Mustang, Courier) serão removidos para manter consistência com a fonte fornecida. Outros tipos (Moto, Caminhonete/SUV, Jet Ski, Outro) permanecem como estão hoje (mantendo retrocompatibilidade via wrapper — ver §3).

## 2. Helpers de cascata

Adicionar utilitários no mesmo arquivo:

```ts
export const ANO_HOJE = 2025;

export function anosDoModelo(m: ModelEntry): string[] {
  // do mais recente ao mais antigo
  const ate = Math.min(m.ate, ANO_HOJE);
  const out: string[] = [];
  for (let y = ate; y >= m.de; y--) out.push(String(y));
  return out;
}

export function versoesNoAno(m: ModelEntry, ano: number): string[] {
  return m.versoes.filter(v => v.de <= ano && ano <= Math.min(v.ate, ANO_HOJE)).map(v => v.versao);
}
```

## 3. Compatibilidade com tipos sem dataset estruturado (Moto, etc.)

Para não quebrar Moto/SUV/Jet Ski/Outro (que hoje usam `string[]`), manter um segundo mapa simples:

```ts
export const VEHICLES_SIMPLE: Record<string, Record<string, Record<string, string[]>>> = { Moto: {...} };
```

E no componente, detectar qual fonte usar pelo `tipo`. Para tipos simples, manter o comportamento atual (Modelo → Versão sem filtro de ano, e Ano vem da lista global `ANOS`).

## 4. Atualizar `src/routes/index.tsx`

- Reordenar a UI: **Tipo, Marca, Modelo, Ano, Versão**, depois Km, Valor, Motor, Câmbio, Cor.
- Substituir os `useMemo` atuais por:
  - `marcas` = chaves do tipo selecionado
  - `modelos` = chaves da marca
  - `modeloEntry` = entrada estruturada do modelo (ou `null` se tipo simples)
  - `anosDisponiveis` = `anosDoModelo(modeloEntry)` se estruturado; senão lista global `ANOS`
  - `versoesDisponiveis` = `versoesNoAno(modeloEntry, Number(ano))` se estruturado e ano selecionado; senão lista do mapa simples
- Resets em cascata:
  - Mudar `tipo` → limpa marca, modelo, ano, versão
  - Mudar `marca` → limpa modelo, ano, versão
  - Mudar `modelo` → limpa ano, versão
  - Mudar `ano` → limpa versão
- Selects de Ano e Versão ficam `disabled` enquanto suas dependências não estiverem preenchidas.

Nada muda no resto do app (geração do anúncio, copiar, blocos de checkboxes, estilos).

## Aspectos técnicos

- Sentinela `ate: 9999` evita repetir `2025` em dezenas de entradas e mantém o dataset estável quando o ano atual mudar (basta ajustar `ANO_HOJE`).
- `anosDoModelo` lista do mais novo ao mais antigo (UX comum em classificados).
- O filtro de versão usa exatamente a regra pedida: `versao.de <= anoSelecionado <= versao.ate` (com `ate` clampado em `ANO_HOJE`).
- A nova estrutura é tipada, então qualquer modelo faltando algum dado quebra o build — bom para detectar lacunas.

## Resumo das mudanças de arquivos

- `src/data/vehicles.ts` — nova estrutura tipada para Carros + helpers `anosDoModelo` / `versoesNoAno`; mapa `VEHICLES_SIMPLE` para Moto/etc.
- `src/routes/index.tsx` — reordenar campos, cascata Modelo → Ano → Versão, resets e estados `disabled`.