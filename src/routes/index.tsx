import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  CONFORTO, TECNOLOGIA, SEGURANCA, EXTRAS,
  VEHICLES, VEHICLES_SIMPLE,
  isStructured, getMarcas, getModelos, getModeloEntry,
  anosDoModelo, versoesNoAno, versoesSimples, ANO_HOJE,
} from "@/data/vehicles";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Anúncio Fácil — Gerador de anúncios de veículos" },
      { name: "description", content: "Gere anúncios prontos para o Facebook em segundos. Carros, motos e mais — 100% local, sem APIs." },
    ],
  }),
});

const TIPOS = ["Carro", "Moto", "Caminhonete/SUV", "Jet Ski", "Outro"];
const CAMBIOS = ["Automático", "CVT", "Manual", "Automatizado", "Dual Clutch (DCT)"];
const ANOS_FALLBACK = Array.from({ length: ANO_HOJE + 2 - 1960 + 1 }, (_, i) => String(ANO_HOJE + 2 - i));

type Section = { title: string; emoji: string; items: string[] };

function CheckCard({
  label, checked, onToggle, disabled,
}: { label: string; checked: boolean; onToggle: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => { if (!disabled) onToggle(); }}
      disabled={disabled}
      aria-disabled={disabled}
      className={`group relative flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-all ${
        disabled
          ? "border-[var(--border)] bg-[var(--surface)] line-through opacity-35 cursor-not-allowed"
          : checked
          ? "border-transparent bg-[var(--surface-2)] shadow-[var(--shadow-glow)]"
          : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50"
      }`}
      style={!disabled && checked ? { borderImage: "var(--gradient-accent) 1", borderColor: "var(--accent)" } : undefined}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
          !disabled && checked ? "gradient-accent border-transparent" : "border-[var(--border)] bg-[var(--background)]"
        }`}
      >
        {!disabled && checked && (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="leading-tight">{label}</span>
    </button>
  );
}

const AIRBAG_GROUP = ["6 airbags", "4 airbags", "2 airbags"];
function isAirbagDisabled(item: string, selected: Set<string>) {
  if (!AIRBAG_GROUP.includes(item)) return false;
  if (selected.has(item)) return false;
  return AIRBAG_GROUP.some((a) => a !== item && selected.has(a));
}

function formatBR(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("pt-BR");
}

function Field({
  label, children,
}: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30";

function CheckSection({
  title, emoji, base, selected, custom, onToggle, onAddCustom,
}: {
  title: string; emoji: string; base: string[];
  selected: Set<string>; custom: string[];
  onToggle: (item: string) => void;
  onAddCustom: (item: string) => void;
}) {
  const [text, setText] = useState("");
  const all = [...base, ...custom];
  const submit = () => {
    const v = text.trim();
    if (!v) return;
    onAddCustom(v);
    setText("");
  };
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <span>{emoji}</span> {title}
      </h3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {all.map((item) => (
          <CheckCard key={item} label={item} checked={selected.has(item)} onToggle={() => onToggle(item)} />
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), submit())}
          placeholder="Adicionar item personalizado…"
          className={inputClass}
        />
        <button
          type="button"
          onClick={submit}
          className="gradient-accent shrink-0 rounded-lg px-4 text-lg font-bold text-black transition hover:opacity-90"
        >
          +
        </button>
      </div>
    </section>
  );
}

function Index() {
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [versao, setVersao] = useState("");
  const [ano, setAno] = useState("");
  const [km, setKm] = useState("");
  const [valor, setValor] = useState("");
  const [motor, setMotor] = useState("");
  const [cambio, setCambio] = useState("");
  const [cor, setCor] = useState("");

  const [conforto, setConforto] = useState<Set<string>>(new Set());
  const [tecnologia, setTecnologia] = useState<Set<string>>(new Set());
  const [seguranca, setSeguranca] = useState<Set<string>>(new Set());
  const [extras, setExtras] = useState<Set<string>>(new Set());

  const [confortoCustom, setConfortoCustom] = useState<string[]>([]);
  const [tecCustom, setTecCustom] = useState<string[]>([]);
  const [segCustom, setSegCustom] = useState<string[]>([]);
  const [extraCustom, setExtraCustom] = useState<string[]>([]);

  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const marcas = useMemo(() => getMarcas(tipo), [tipo]);
  const modelos = useMemo(() => getModelos(tipo, marca), [tipo, marca]);
  const modeloEntry = useMemo(() => getModeloEntry(tipo, marca, modelo), [tipo, marca, modelo]);
  const anosDisponiveis = useMemo(() => {
    if (modeloEntry) return anosDoModelo(modeloEntry);
    if (!isStructured(tipo) && tipo) return ANOS_FALLBACK;
    return [];
  }, [modeloEntry, tipo]);
  const versoesDisponiveis = useMemo(() => {
    if (modeloEntry && ano) return versoesNoAno(modeloEntry, Number(ano));
    if (!isStructured(tipo) && tipo && marca && modelo) return versoesSimples(tipo, marca, modelo);
    return [];
  }, [modeloEntry, ano, tipo, marca, modelo]);

  const toggle = (set: Set<string>, setter: (s: Set<string>) => void, item: string) => {
    const next = new Set(set);
    next.has(item) ? next.delete(item) : next.add(item);
    setter(next);
  };

  const addCustom = (
    list: string[], setList: (l: string[]) => void,
    sel: Set<string>, setSel: (s: Set<string>) => void, item: string
  ) => {
    if (list.includes(item) || CONFORTO.includes(item)) return;
    setList([...list, item]);
    const next = new Set(sel);
    next.add(item);
    setSel(next);
  };

  const generate = () => {
    const lines: string[] = [];
    const header = [marca, modelo, versao].filter(Boolean).join(" ");
    const headerLine = ano ? `${header} · ${ano}` : header;
    if (headerLine) lines.push(headerLine, "");

    lines.push(`🔰 Km: ${km.trim() || "—"}`);
    lines.push(`💲 R$ ${valor.trim() || "—"}`);
    if (motor.trim() || cambio.trim()) {
      const m = motor.trim() || "—";
      const c = cambio.trim() || "—";
      lines.push(`⚙️ ${m} | ${c}`);
    } else {
      lines.push(`⚙️ — | —`);
    }

    const sections: Section[] = [
      { title: "Conforto", emoji: "🛋️", items: [...conforto] },
      { title: "Tecnologia", emoji: "🖥️", items: [...tecnologia] },
      { title: "Segurança", emoji: "🔒", items: [...seguranca] },
    ];

    for (const s of sections) {
      if (s.items.length === 0) continue;
      lines.push("");
      for (const it of s.items) lines.push(`${s.emoji} ${it}`);
    }

    const extrasItems = [...extras];
    if (cor.trim()) extrasItems.push(`Cor: ${cor.trim()}`);
    if (extrasItems.length > 0) {
      lines.push("");
      for (const it of extrasItems) lines.push(`🗝️ ${it}`);
    }

    lines.push("", "🔸 Aceito trocas e propostas à vista.");
    setOutput(lines.join("\n"));
  };

  const copy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="gradient-accent flex h-9 w-9 items-center justify-center rounded-lg text-black">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 13l2-5h14l2 5M5 13h14M5 13v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none">Anúncio <span className="gradient-text">Fácil</span></h1>
              <p className="text-xs text-[var(--muted-foreground)]">Gere anúncios prontos para o Facebook</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1fr_420px]">
        <div className="flex flex-col gap-6">
          {/* Veículo */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="mb-4 text-lg font-semibold">Veículo</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Tipo">
                <select className={inputClass} value={tipo} onChange={(e) => { setTipo(e.target.value); setMarca(""); setModelo(""); setAno(""); setVersao(""); }}>
                  <option value="">Selecione…</option>
                  {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Marca">
                <select className={inputClass} value={marca} disabled={!marcas.length} onChange={(e) => { setMarca(e.target.value); setModelo(""); setAno(""); setVersao(""); }}>
                  <option value="">Selecione…</option>
                  {marcas.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>
              <Field label="Modelo">
                <select className={inputClass} value={modelo} disabled={!modelos.length} onChange={(e) => { setModelo(e.target.value); setAno(""); setVersao(""); }}>
                  <option value="">Selecione…</option>
                  {modelos.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>
              <Field label="Ano">
                <select className={inputClass} value={ano} disabled={!anosDisponiveis.length} onChange={(e) => { setAno(e.target.value); setVersao(""); }}>
                  <option value="">Selecione…</option>
                  {anosDisponiveis.map((a) => <option key={a} value={a}>{a === String(ANO_HOJE) ? `${a} (hoje)` : a}</option>)}
                </select>
              </Field>
              <Field label="Versão">
                <select className={inputClass} value={versao} disabled={!versoesDisponiveis.length} onChange={(e) => setVersao(e.target.value)}>
                  <option value="">Selecione…</option>
                  {versoesDisponiveis.map((vv) => <option key={vv} value={vv}>{vv}</option>)}
                </select>
              </Field>
              <Field label="Quilometragem">
                <input className={inputClass} value={km} onChange={(e) => setKm(e.target.value)} placeholder="Ex: 45.000" />
              </Field>
              <Field label="Valor R$">
                <input className={inputClass} value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Ex: 89.900" />
              </Field>
              <Field label="Motorização">
                <input className={inputClass} value={motor} onChange={(e) => setMotor(e.target.value)} placeholder="Ex: 1.0 Turbo Flex" />
              </Field>
              <Field label="Câmbio">
                <select className={inputClass} value={cambio} onChange={(e) => setCambio(e.target.value)}>
                  <option value="">Selecione…</option>
                  {CAMBIOS.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Cor">
                <input className={inputClass} value={cor} onChange={(e) => setCor(e.target.value)} placeholder="Ex: Prata" />
              </Field>
            </div>
          </section>

          <CheckSection
            title="Conforto" emoji="🛋️" base={CONFORTO}
            selected={conforto} custom={confortoCustom}
            onToggle={(i) => toggle(conforto, setConforto, i)}
            onAddCustom={(i) => addCustom(confortoCustom, setConfortoCustom, conforto, setConforto, i)}
          />
          <CheckSection
            title="Tecnologia" emoji="🖥️" base={TECNOLOGIA}
            selected={tecnologia} custom={tecCustom}
            onToggle={(i) => toggle(tecnologia, setTecnologia, i)}
            onAddCustom={(i) => addCustom(tecCustom, setTecCustom, tecnologia, setTecnologia, i)}
          />
          <CheckSection
            title="Segurança" emoji="🔒" base={SEGURANCA}
            selected={seguranca} custom={segCustom}
            onToggle={(i) => toggle(seguranca, setSeguranca, i)}
            onAddCustom={(i) => addCustom(segCustom, setSegCustom, seguranca, setSeguranca, i)}
          />
          <CheckSection
            title="Extras" emoji="🗝️" base={EXTRAS}
            selected={extras} custom={extraCustom}
            onToggle={(i) => toggle(extras, setExtras, i)}
            onAddCustom={(i) => addCustom(extraCustom, setExtraCustom, extras, setExtras, i)}
          />

          <button
            type="button"
            onClick={generate}
            className="gradient-accent rounded-xl px-6 py-4 text-base font-bold text-black shadow-[var(--shadow-glow)] transition hover:opacity-95"
          >
            Gerar Anúncio
          </button>
        </div>

        {/* Preview */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Pré-visualização</h2>
              <button
                type="button"
                onClick={copy}
                disabled={!output}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-semibold transition hover:border-[var(--accent)] disabled:opacity-40"
              >
                {copied ? "✓ Copiado!" : "Copiar"}
              </button>
            </div>
            <pre className="max-h-[70vh] min-h-[300px] overflow-auto whitespace-pre-wrap rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 font-sans text-sm leading-relaxed text-[var(--foreground)]">
{output || "Preencha os campos e clique em \"Gerar Anúncio\" para ver o resultado aqui."}
            </pre>
          </div>
        </aside>
      </div>
    </main>
  );
}
