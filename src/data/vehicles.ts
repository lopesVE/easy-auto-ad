export const ANO_HOJE = 2025;
const H = 9999; // sentinela para "hoje"

export type VersionEntry = { versao: string; de: number; ate: number };
export type ModelEntry = { de: number; ate: number; versoes: VersionEntry[] };
export type StructuredVehicles = Record<string, Record<string, Record<string, ModelEntry>>>;

const v = (versao: string, de: number, ate: number): VersionEntry => ({ versao, de, ate });
const M = (de: number, ate: number, versoes: VersionEntry[]): ModelEntry => ({ de, ate, versoes });

// Tipos com dataset estruturado (Modelo → Ano → Versão)
export const VEHICLES: StructuredVehicles = {
  Carro: {
    Chevrolet: {
      Onix: M(2012, H, [
        v("LT 1.0", 2012, 2019),
        v("LTZ 1.0", 2012, 2019),
        v("LT 1.0 Turbo", 2020, H),
        v("LTZ 1.0 Turbo", 2020, H),
        v("Premier 1.0 Turbo", 2020, H),
        v("RS 1.0 Turbo", 2021, H),
      ]),
      "Onix Plus": M(2019, H, [
        v("LT 1.0 Turbo", 2019, H),
        v("LTZ 1.0 Turbo", 2019, H),
        v("Premier 1.0 Turbo", 2019, H),
      ]),
      Cruze: M(2011, H, [
        v("LT 1.8", 2011, 2016),
        v("LTZ 1.8", 2011, 2016),
        v("LT 1.4 Turbo", 2017, H),
        v("LTZ 1.4 Turbo", 2017, H),
        v("Premier 1.4 Turbo", 2017, H),
        v("Sport LT", 2013, H),
        v("Sport LTZ", 2013, H),
      ]),
      Tracker: M(2013, H, [
        v("LT 1.8", 2013, 2019),
        v("LTZ 1.8", 2013, 2019),
        v("LT 1.0 Turbo", 2020, H),
        v("LTZ 1.0 Turbo", 2020, H),
        v("Premier 1.2 Turbo", 2020, H),
      ]),
      S10: M(1995, H, [
        v("LS 2.2", 1995, 2000),
        v("DLX 2.2", 1995, 2000),
        v("STD 2.8 Diesel", 1995, 2000),
        v("LS 2.4", 2001, 2011),
        v("LT 2.4", 2001, 2011),
        v("LS 2.8 Diesel", 2001, H),
        v("LT 2.8 Diesel", 2001, H),
        v("LTZ 2.8 Diesel", 2012, H),
        v("High Country 2.8 Diesel", 2014, H),
      ]),
      Vectra: M(1993, 2011, [
        v("GL 2.0", 1993, 1996),
        v("GLS 2.0", 1993, 1996),
        v("CD 2.0", 1993, 1996),
        v("Expression 2.0", 1997, 2005),
        v("Elegance 2.0", 1997, 2005),
        v("GL 2.0 16V", 1997, 2005),
        v("Expression 2.0 16V", 2006, 2011),
        v("Elegance 2.0 16V", 2006, 2011),
        v("Elite 2.4 16V", 2006, 2009),
        v("GT 2.0 Turbo", 2006, 2011),
        v("GT-X 2.0 Turbo", 2008, 2011),
      ]),
      Astra: M(1995, 2012, [
        v("GL 1.8", 1995, 1998),
        v("GLS 2.0", 1995, 1998),
        v("GL 1.8 16V", 1999, 2012),
        v("GLS 2.0 16V", 1999, 2012),
        v("Elegance 2.0", 2003, 2012),
        v("Sport 2.0", 2002, 2012),
      ]),
      Celta: M(2000, 2016, [
        v("Life 1.0", 2000, 2016),
        v("LS 1.0", 2000, 2016),
        v("LT 1.0", 2006, 2016),
      ]),
      Corsa: M(1994, 2012, [
        v("Wind 1.0", 1994, 2002),
        v("Joy 1.0", 2003, 2012),
        v("Maxx 1.4", 2003, 2012),
        v("Classic LS 1.0", 2003, 2012),
        v("Classic LT 1.4", 2003, 2012),
      ]),
      Meriva: M(2002, 2012, [
        v("Joy 1.4", 2002, 2012),
        v("Maxx 1.8", 2002, 2012),
        v("Premium 1.8", 2008, 2012),
      ]),
      Zafira: M(2001, 2012, [
        v("Expression 2.0", 2001, 2012),
        v("Elegance 2.0", 2001, 2012),
        v("Elite 2.0", 2006, 2012),
      ]),
      Cobalt: M(2011, 2019, [
        v("LS 1.4", 2011, 2019),
        v("LT 1.4", 2011, 2019),
        v("LTZ 1.8", 2011, 2019),
        v("Elite 1.8", 2015, 2019),
      ]),
      Spin: M(2012, H, [
        v("LT 1.8", 2012, H),
        v("LTZ 1.8", 2012, H),
        v("Activ 1.8", 2016, H),
      ]),
      Montana: M(2003, H, [
        v("Sport 1.8", 2003, 2010),
        v("LS 1.2 Turbo", 2023, H),
        v("LT 1.2 Turbo", 2023, H),
        v("LTZ 1.2 Turbo", 2023, H),
      ]),
      Omega: M(1992, 2007, [
        v("CD 2.0", 1992, 1997),
        v("GLS 3.0", 1992, 1997),
        v("Suprema 3.0", 1992, 1997),
        v("GLS 3.6 V6", 1998, 2007),
        v("CD 4.1", 1998, 2007),
      ]),
      Blazer: M(1995, 2008, [
        v("DLX 2.2", 1995, 2000),
        v("2.4 Mpfi", 2001, 2008),
        v("2.8 Turbo Diesel", 2001, 2008),
        v("Executive 2.8", 2004, 2008),
      ]),
      Captiva: M(2008, 2016, [
        v("Sport 2.4", 2008, 2016),
        v("Sport 3.6 V6 AWD", 2008, 2016),
      ]),
      Agile: M(2009, 2014, [
        v("LT 1.4", 2009, 2014),
        v("LTZ 1.4", 2009, 2014),
        v("Effect 1.4", 2011, 2014),
      ]),
      Equinox: M(2018, H, [
        v("LT 1.5 Turbo", 2018, H),
        v("Premier 2.0 Turbo", 2018, H),
      ]),
      Trailblazer: M(2012, H, [
        v("LT 2.8 Diesel", 2012, H),
        v("LTZ 2.8 Diesel", 2012, H),
        v("Premier 2.8 Diesel", 2017, H),
      ]),
    },
    Fiat: {
      Uno: M(1984, 2013, [
        v("Mille 1.0", 1990, 2013),
        v("Vivace 1.0", 2010, 2013),
        v("Way 1.0", 2010, 2013),
        v("Attractive 1.4", 2010, 2013),
      ]),
      Palio: M(1996, 2017, [
        v("Fire 1.0", 1996, 2017),
        v("ELX 1.4", 2000, 2012),
        v("ELX 1.8", 2000, 2012),
        v("Weekend Adventure 1.8", 2000, 2017),
        v("Sporting 1.8", 2004, 2013),
      ]),
      Siena: M(1997, 2016, [
        v("Fire 1.0", 1997, 2010),
        v("EL 1.4", 2003, 2016),
        v("ELX 1.4", 1997, 2012),
        v("HLX 1.8", 2003, 2012),
        v("Tetrafuel 1.4", 2006, 2012),
      ]),
      Strada: M(1998, H, [
        v("Fire 1.4", 1998, 2012),
        v("Adventure 1.8", 2003, 2020),
        v("Trekking 1.6", 2012, 2020),
        v("Endurance 1.3", 2021, H),
        v("Freedom 1.3", 2021, H),
        v("Ranch 1.3", 2021, H),
        v("Volcano 1.3 Turbo", 2021, H),
        v("Ultra 1.3 Turbo", 2022, H),
      ]),
      Bravo: M(2010, 2015, [
        v("Essence 1.8", 2010, 2015),
        v("Absolute 1.8", 2010, 2015),
        v("HGT 1.8", 2010, 2015),
        v("Blackmotion 1.8", 2012, 2015),
      ]),
      Linea: M(2008, 2016, [
        v("LX 1.9", 2008, 2012),
        v("HLX 1.9", 2008, 2012),
        v("Absolute 1.9", 2008, 2016),
        v("Essence 1.8", 2012, 2016),
        v("Turbo T-Jet 1.4", 2013, 2016),
      ]),
      "Grande Punto": M(2007, 2012, [
        v("ELX 1.4", 2007, 2012),
        v("Sporting 1.8", 2007, 2012),
        v("Blackmotion 1.8", 2010, 2012),
      ]),
      Argo: M(2017, H, [
        v("Drive 1.0", 2017, H),
        v("Drive 1.3", 2017, H),
        v("Trekking 1.3", 2017, H),
        v("HGT 1.8", 2017, H),
        v("Sporting 1.8", 2017, H),
      ]),
      Cronos: M(2018, H, [
        v("Drive 1.3", 2018, H),
        v("Drive 1.8", 2018, H),
        v("Precision 1.8", 2018, H),
      ]),
      Toro: M(2016, H, [
        v("Freedom 1.8", 2016, H),
        v("Ranch 2.0 Diesel", 2016, H),
        v("Ultra 2.0 Diesel", 2020, H),
        v("Volcano 2.0 Diesel", 2016, H),
      ]),
      Pulse: M(2021, H, [
        v("Drive 1.3", 2021, H),
        v("Audace 1.0 Turbo", 2021, H),
        v("Impetus 1.0 Turbo", 2021, H),
        v("Abarth 1.3 Turbo", 2022, H),
      ]),
      Fastback: M(2022, H, [
        v("Audace 1.0 Turbo", 2022, H),
        v("Impetus 1.0 Turbo", 2022, H),
        v("Abarth 1.3 Turbo", 2023, H),
        v("Limited Edition", 2022, H),
      ]),
      Tipo: M(2017, 2021, [
        v("1.6 16V", 2017, 2021),
        v("Opening 1.6", 2017, 2021),
        v("Lounge 1.6", 2017, 2021),
      ]),
    },
    Volkswagen: {
      Gol: M(1980, 2022, [
        v("City 1.0", 2008, 2022),
        v("Trend 1.0", 2008, 2022),
        v("Power 1.0", 1999, 2012),
        v("Rallye 1.6", 2008, 2014),
        v("Sport 1.6", 2008, 2022),
      ]),
      Polo: M(2002, H, [
        v("Comfortline 1.6", 2002, 2009),
        v("Sportline 1.6", 2005, 2009),
        v("MPI 1.0", 2018, H),
        v("Comfortline 1.0 TSI", 2018, H),
        v("Highline 1.0 TSI", 2018, H),
        v("GTS 1.4 TSI", 2020, H),
        v("Tracks 1.0 TSI", 2022, H),
      ]),
      Virtus: M(2018, H, [
        v("MPI 1.0", 2018, H),
        v("Comfortline 1.0 TSI", 2018, H),
        v("Highline 1.0 TSI", 2018, H),
        v("GTS 1.4 TSI", 2020, H),
      ]),
      Golf: M(1994, 2021, [
        v("GL 1.8", 1994, 1998),
        v("GTI 2.0", 1994, 1998),
        v("1.6 MI", 1999, 2007),
        v("2.0 MI", 1999, 2007),
        v("Sportline 2.0", 2008, 2013),
        v("Comfortline 1.4 TSI", 2013, 2021),
        v("Highline 1.4 TSI", 2013, 2021),
        v("GTI 2.0 TSI", 2013, 2021),
        v("R 2.0 TSI 4Motion", 2016, 2021),
      ]),
      Jetta: M(2006, H, [
        v("2.0 Comfortline", 2006, 2015),
        v("2.5 Comfortline", 2006, 2015),
        v("Highline 2.5", 2010, 2015),
        v("Comfortline 1.4 TSI", 2015, H),
        v("Highline 1.4 TSI", 2015, H),
        v("GLi 2.0 TSI", 2015, H),
      ]),
      "T-Cross": M(2019, H, [
        v("MPI 1.0", 2019, H),
        v("Comfortline 1.0 TSI", 2019, H),
        v("Highline 1.0 TSI", 2019, H),
        v("Rline 1.4 TSI", 2021, H),
      ]),
      Nivus: M(2020, H, [
        v("Comfortline 1.0 TSI", 2020, H),
        v("Highline 1.0 TSI", 2020, H),
        v("Rline 1.0 TSI", 2022, H),
      ]),
      Taos: M(2021, H, [
        v("Comfortline 1.4 TSI", 2021, H),
        v("Highline 1.4 TSI", 2021, H),
        v("Rline 1.4 TSI", 2022, H),
      ]),
      Amarok: M(2010, H, [
        v("Trendline 2.0 Diesel", 2010, H),
        v("Comfortline 2.0 Diesel", 2010, H),
        v("Highline 3.0 V6", 2017, H),
        v("Extreme 3.0 V6", 2020, H),
      ]),
      Saveiro: M(1982, H, [
        v("City 1.6", 2008, H),
        v("Trend 1.6", 2008, H),
        v("Cross 1.6", 2010, H),
        v("Robust 1.6", 2017, H),
      ]),
      Fusca: M(1959, 1996, [
        v("1300", 1959, 1978),
        v("1500", 1965, 1970),
        v("1600", 1970, 1986),
        v("Itamar", 1993, 1996),
      ]),
      Kombi: M(1957, 2013, [
        v("Standard 1.4", 1957, 2013),
        v("Lotação 1.4", 1957, 2013),
        v("Last Edition", 2013, 2013),
      ]),
      Parati: M(1982, 2008, [
        v("City 1.0", 1997, 2008),
        v("Crossover 1.6", 2000, 2008),
        v("Surf 1.8", 2000, 2008),
      ]),
      Fox: M(2003, 2015, [
        v("Trend 1.0", 2003, 2015),
        v("Prime 1.6", 2003, 2015),
        v("Comfortline 1.6", 2008, 2015),
      ]),
      Up: M(2014, 2022, [
        v("Take 1.0", 2014, 2022),
        v("Move 1.0", 2014, 2022),
        v("Cross 1.0", 2014, 2022),
        v("Speed 1.0", 2016, 2020),
      ]),
    },
    Ford: {
      Ka: M(1997, 2021, [
        v("GL 1.0", 1997, 2007),
        v("GLX 1.6", 1997, 2007),
        v("SE 1.0", 2014, 2021),
        v("SE Plus 1.0 Ti-VCT", 2014, 2021),
        v("SEL 1.5 Ti-VCT", 2014, 2021),
        v("Freestyle 1.5 Ti-VCT", 2018, 2021),
      ]),
      EcoSport: M(2003, 2021, [
        v("XLS 1.6", 2003, 2012),
        v("XLT 2.0", 2003, 2012),
        v("SE 1.5", 2013, 2021),
        v("SE 2.0", 2013, 2021),
        v("SEL 2.0", 2013, 2021),
        v("Titanium 2.0 4WD", 2013, 2021),
        v("Freestyle 1.5", 2016, 2021),
        v("Storm 2.0", 2017, 2021),
      ]),
      Fiesta: M(2003, 2019, [
        v("SE 1.0", 2003, 2019),
        v("SE 1.6", 2003, 2019),
        v("SEL 1.6", 2008, 2019),
        v("Titanium 1.6", 2012, 2019),
      ]),
      Focus: M(2009, 2019, [
        v("SE 2.0", 2009, 2019),
        v("SEL 2.0", 2009, 2019),
        v("Titanium 2.0", 2012, 2019),
        v("ST 2.0 EcoBoost", 2013, 2019),
      ]),
      Ranger: M(1998, H, [
        v("XL 2.5 Diesel", 1998, 2012),
        v("XLS 2.3", 1998, 2012),
        v("XL 2.2 Diesel", 2013, H),
        v("XLS 2.2 Diesel", 2013, H),
        v("XLT 3.2 Diesel", 2013, H),
        v("Limited 3.2 Diesel", 2013, H),
        v("Storm 3.2 Diesel", 2017, H),
      ]),
      Territory: M(2020, H, [
        v("SEL 1.5 EcoBoost", 2020, H),
        v("Titanium 1.5 EcoBoost", 2020, H),
      ]),
      Fusion: M(2006, 2019, [
        v("SE 2.5", 2006, 2019),
        v("Titanium 2.0 EcoBoost AWD", 2013, 2019),
        v("Hybrid 2.0", 2014, 2019),
      ]),
      "Del Rey": M(1981, 1997, [
        v("L 1.6", 1981, 1997),
        v("GL 1.8", 1981, 1997),
        v("Ghia 2.0", 1981, 1997),
      ]),
      Escort: M(1983, 2003, [
        v("GL 1.0", 1983, 2003),
        v("GLX 1.6", 1983, 2003),
        v("XR3 1.6", 1983, 1996),
      ]),
      Corcel: M(1968, 1986, [
        v("Luxo 1.4", 1968, 1986),
        v("GT 1.4", 1972, 1986),
        v("II L 1.6", 1978, 1986),
      ]),
      Pampa: M(1982, 1997, [
        v("L 1.6", 1982, 1997),
        v("GL 1.8", 1982, 1997),
        v("Ghia 2.0", 1988, 1997),
      ]),
    },
    Toyota: {
      Corolla: M(1998, H, [
        v("XEi 1.8", 1998, 2008),
        v("GLi 1.8", 1998, 2008),
        v("SE-G 1.8", 1998, 2002),
        v("XEi 2.0", 2009, H),
        v("GLi 2.0", 2009, H),
        v("Altis 2.0", 2009, H),
        v("Altis Premium 2.0", 2015, H),
        v("GR-Sport 2.0", 2020, H),
        v("Hybrid GR-Sport", 2020, H),
      ]),
      Hilux: M(1997, H, [
        v("SR 2.7", 1997, H),
        v("SRV 2.8 Diesel", 2001, H),
        v("SRX 2.8 Diesel", 2005, H),
        v("GR-Sport 2.8 Diesel", 2020, H),
      ]),
      SW4: M(2006, H, [
        v("SR 2.8 Diesel", 2006, H),
        v("SRX 2.8 Diesel", 2006, H),
        v("Diamond 2.8 Diesel", 2016, H),
      ]),
      Yaris: M(2018, H, [
        v("XL 1.3", 2018, H),
        v("XL 1.5", 2018, H),
        v("XLS 1.5", 2018, H),
        v("XLS Plus 1.5", 2020, H),
      ]),
      Etios: M(2012, 2022, [
        v("X 1.3", 2012, 2022),
        v("XS 1.3", 2012, 2022),
        v("XLS 1.5", 2012, 2022),
        v("Platinum 1.5", 2012, 2022),
      ]),
      RAV4: M(2001, H, [
        v("2.0 4x4", 2001, 2012),
        v("2.5 4x4", 2013, H),
        v("Dynamic 2.5 Hybrid", 2019, H),
      ]),
      Prius: M(2013, H, [
        v("1.8 Hybrid", 2013, H),
        v("Prime 1.8 Plug-in", 2017, H),
      ]),
    },
    Honda: {
      Civic: M(1992, H, [
        v("EX 1.6", 1992, 2000),
        v("Si 1.6", 1996, 2000),
        v("LX 1.7", 2001, 2006),
        v("EX 1.7", 2001, 2006),
        v("LXL 1.8", 2007, 2011),
        v("EXS 1.8", 2007, 2011),
        v("EX 2.0", 2012, H),
        v("EXL 2.0", 2012, H),
        v("Touring 1.5 Turbo", 2017, H),
        v("Si 1.5 Turbo", 2017, H),
        v("Type R 2.0 Turbo", 2018, H),
      ]),
      Fit: M(2003, 2021, [
        v("LX 1.4", 2003, 2008),
        v("LX 1.5", 2009, 2021),
        v("EX 1.5", 2009, 2021),
        v("EXL 1.5", 2014, 2021),
        v("Twist 1.5", 2017, 2021),
      ]),
      "HR-V": M(2015, H, [
        v("LX 1.8", 2015, H),
        v("EX 1.8", 2015, H),
        v("EXL 1.8", 2015, H),
        v("Touring 1.5 Turbo", 2021, H),
      ]),
      City: M(2009, H, [
        v("LX 1.5", 2009, H),
        v("EX 1.5", 2009, H),
        v("EXL 1.5", 2012, H),
        v("Touring 1.5 Turbo", 2021, H),
        v("Hatch EX 1.5", 2021, H),
      ]),
      "WR-V": M(2017, H, [
        v("LX 1.5", 2017, H),
        v("EX 1.5", 2017, H),
        v("EXL 1.5", 2017, H),
      ]),
    },
    Hyundai: {
      HB20: M(2012, H, [
        v("Sense 1.0", 2012, H),
        v("Vision 1.0", 2012, H),
        v("Vision 1.6", 2012, 2019),
        v("Sport 2.0", 2012, 2019),
        v("Evolution 1.0 Turbo", 2020, H),
        v("Platinum 1.0 Turbo", 2020, H),
      ]),
      HB20S: M(2013, H, [
        v("Sense 1.0", 2013, H),
        v("Vision 1.6", 2013, 2019),
        v("Evolution 1.0 Turbo", 2020, H),
        v("Platinum 1.0 Turbo", 2020, H),
      ]),
      Creta: M(2016, H, [
        v("Action 1.0 Turbo", 2020, H),
        v("Comfort 1.0 Turbo", 2020, H),
        v("Platinum 1.0 Turbo", 2020, H),
        v("GLS 1.6", 2016, 2019),
        v("Ultimate 2.0", 2016, H),
      ]),
      ix35: M(2010, 2018, [
        v("GLS 2.0", 2010, 2018),
        v("GL 2.0 4WD", 2010, 2018),
        v("Limited 2.0 4WD", 2013, 2018),
      ]),
      Tucson: M(2006, H, [
        v("GLS 2.0", 2006, 2021),
        v("GLS 1.6 Turbo", 2016, H),
        v("Limited 1.6 Turbo", 2016, H),
      ]),
      Elantra: M(2012, H, [
        v("GLS 2.0", 2012, H),
        v("Sport 1.6 Turbo", 2017, H),
        v("Limited 2.0", 2012, H),
      ]),
      Azera: M(2012, 2017, [
        v("GLS 3.0 V6", 2012, 2017),
        v("GLS 3.3 V6", 2012, 2017),
      ]),
    },
    Jeep: {
      Renegade: M(2015, H, [
        v("Sport 1.8", 2015, H),
        v("Longitude 1.8", 2015, H),
        v("Limited 1.3 Turbo", 2019, H),
        v("Trailhawk 2.0 Turbo Diesel", 2015, H),
      ]),
      Compass: M(2017, H, [
        v("Sport 1.3 Turbo", 2021, H),
        v("Longitude 1.3 Turbo", 2021, H),
        v("Limited 1.3 Turbo", 2021, H),
        v("Trailhawk 2.0 Turbo Diesel", 2017, H),
        v("Overland 2.0 Turbo Diesel", 2017, H),
      ]),
      Commander: M(2021, H, [
        v("Sport 1.3 Turbo", 2021, H),
        v("Longitude 1.3 Turbo", 2021, H),
        v("Limited 2.0 Turbo Diesel", 2021, H),
        v("Overland 2.0 Turbo Diesel", 2021, H),
        v("Trailhawk 2.0 Turbo Diesel", 2021, H),
      ]),
      Wrangler: M(2008, H, [
        v("Unlimited Sport 3.6 V6", 2012, H),
        v("Unlimited Sahara 3.6 V6", 2012, H),
        v("Unlimited Rubicon 3.6 V6", 2012, H),
      ]),
    },
    Renault: {
      Kwid: M(2017, H, [
        v("Zen 1.0", 2017, H),
        v("Intense 1.0", 2017, H),
        v("Outsider 1.0", 2019, H),
      ]),
      Sandero: M(2008, H, [
        v("Authentique 1.0", 2008, H),
        v("Life 1.0", 2008, H),
        v("Stepway 1.6", 2010, H),
        v("RS 2.0", 2012, 2020),
      ]),
      Logan: M(2007, H, [
        v("Expression 1.0", 2007, H),
        v("Authentique 1.6", 2007, H),
        v("Dynamique 1.6", 2007, H),
      ]),
      Duster: M(2012, H, [
        v("Expression 1.6", 2012, H),
        v("Intense 1.6", 2012, H),
        v("Iconic 1.3 Turbo CVT", 2021, H),
      ]),
      Oroch: M(2015, H, [
        v("Expression 1.6", 2015, H),
        v("Intense 1.6", 2015, H),
        v("Outsider 1.3 Turbo", 2021, H),
      ]),
      Captur: M(2017, H, [
        v("Life 1.6", 2017, 2021),
        v("Zen 1.3 Turbo", 2021, H),
        v("Intense 1.3 Turbo", 2021, H),
      ]),
      Kardian: M(2023, H, [
        v("Zen 1.0 Turbo", 2023, H),
        v("Intense 1.0 Turbo", 2023, H),
      ]),
      Clio: M(1993, 2013, [
        v("Authentique 1.0", 1993, 2013),
        v("Expression 1.0", 1999, 2013),
        v("Privilège 1.6", 2000, 2013),
      ]),
      Fluence: M(2011, 2017, [
        v("Expression 2.0", 2011, 2017),
        v("Dynamique 2.0", 2011, 2017),
        v("GT 2.0 Turbo", 2013, 2017),
      ]),
    },
    Nissan: {
      Kicks: M(2016, H, [
        v("S 1.6", 2016, 2022),
        v("SV 1.6", 2016, 2022),
        v("SL 1.6", 2016, 2022),
        v("Advance 1.0 Turbo", 2022, H),
      ]),
      Versa: M(2011, H, [
        v("Sense 1.0", 2020, H),
        v("Advance 1.6", 2011, H),
        v("Exclusive 1.6 CVT", 2014, H),
      ]),
      Frontier: M(1998, H, [
        v("XE 2.3 Diesel", 2016, H),
        v("SE 2.3 Diesel 4x4", 2016, H),
        v("LE 2.3 Diesel 4x4", 2016, H),
        v("Pro 4X 2.3 Diesel", 2020, H),
      ]),
      Sentra: M(2007, H, [
        v("S 2.0", 2007, H),
        v("SL 2.0 CVT", 2007, H),
        v("Exclusive 2.0 CVT", 2014, H),
      ]),
      March: M(2011, 2022, [
        v("S 1.0", 2011, 2022),
        v("SV 1.6", 2011, 2022),
        v("SL 1.6", 2011, 2022),
      ]),
    },
    Mitsubishi: {
      "L200 Triton": M(1993, H, [
        v("GL 2.4", 1993, 2007),
        v("GLX 2.4", 1993, H),
        v("GLS 3.2 Diesel", 2000, 2015),
        v("HPE 3.2 Diesel 4x4", 2008, 2015),
        v("HPE-S 3.2 Diesel", 2012, 2015),
        v("Sport HPE-S 2.4 Diesel", 2016, H),
      ]),
      Outlander: M(2004, H, [
        v("2.0 CVT", 2004, H),
        v("3.0 V6 4WD", 2008, H),
        v("PHEV 2.4 Plug-in", 2019, H),
      ]),
      "Pajero Full": M(1993, H, [
        v("GLS 3.8 V6", 1993, H),
        v("HPE 3.8 V6", 2003, H),
      ]),
      "Pajero Sport": M(1998, H, [
        v("HPE 2.4 Diesel 4x4", 2016, H),
        v("HPE-S 2.4 Diesel 4x4", 2018, H),
      ]),
      "Eclipse Cross": M(2018, H, [
        v("HPE 1.5 Turbo", 2018, H),
        v("HPE-S 1.5 Turbo 4WD", 2018, H),
      ]),
      Lancer: M(2008, 2016, [
        v("ES 2.0", 2008, 2016),
        v("GT 2.0", 2008, 2016),
        v("Evolution X 2.0 Turbo AWD", 2008, 2015),
      ]),
    },
    Kia: {
      Sportage: M(2011, H, [
        v("LX 2.0", 2011, H),
        v("EX 2.0", 2011, H),
        v("EX 2.0 4WD", 2011, H),
        v("SX 1.6 Turbo 4WD", 2017, H),
      ]),
      Cerato: M(2009, H, [
        v("EX 1.6", 2009, H),
        v("SX 2.0", 2009, H),
        v("GT 1.6 Turbo", 2019, H),
      ]),
      Stinger: M(2018, H, [
        v("3.3 T-GDI V6 AWD", 2018, H),
      ]),
      Soul: M(2011, 2019, [
        v("LX 2.0", 2011, 2019),
        v("EX 2.0", 2011, 2019),
      ]),
    },
  },
};

// Tipos sem dataset estruturado (continuam com lista simples de versões)
export const VEHICLES_SIMPLE: Record<string, Record<string, Record<string, string[]>>> = {
  Moto: {
    Honda: {
      "CG 160": ["Fan ES", "Start", "Titan S", "Cargo"],
      "CB 300": ["300R Twister", "300R ABS"],
      "CB 500": ["F ABS", "X ABS"],
      "CB 600 Hornet": ["ABS"],
      "CB 1000R": ["ABS", "Black Edition"],
      "XRE 300": ["ABS", "Rally ABS"],
      "NC 750X": ["DCT ABS"],
      PCX: ["150", "Sport", "Electric"],
      "Biz 125": ["ES", "EX"],
      "Africa Twin": ["1100 DCT", "1100 Adventure Sports DCT"],
      "CBR 1000RR": ["ABS", "Fireblade SP"],
    },
    Yamaha: {
      "Fazer 250": ["ABS", "Padrão"],
      "MT-03": ["ABS"],
      "MT-07": ["ABS"],
      "MT-09": ["ABS"],
      R3: ["ABS"],
      R1: ["ABS", "M ABS"],
      "Factor 150": ["ESD UBS"],
      "Neo 125": ["Padrão"],
      "NMax 160": ["ABS", "Connected"],
      "Tenere 700": ["Rally ABS"],
      "Crosser 150": ["S", "Z ABS"],
      "XTZ 250 Lander": ["Padrão"],
    },
    Kawasaki: {
      "Ninja 400": ["ABS"],
      "Ninja 650": ["ABS"],
      "Ninja ZX-10R": ["ABS", "SE"],
      Z400: ["ABS"],
      Z650: ["ABS"],
      Z900: ["ABS", "RS ABS"],
      "Versys 650": ["ABS"],
      "Versys 1000": ["SE"],
    },
    Suzuki: {
      "GSX-S750": ["ABS"],
      "V-Strom 650": ["XT ABS"],
      "Hayabusa 1340": ["ABS"],
      "Burgman 400": ["ABS"],
      SV650: ["ABS"],
    },
    BMW: {
      "G 310 R": ["ABS"],
      "G 310 GS": ["ABS"],
      "R 1250 GS": ["Adventure ABS", "HP ABS"],
      "S 1000 RR": ["M ABS"],
      "F 850 GS": ["Adventure ABS"],
    },
    "Royal Enfield": {
      "Meteor 350": ["Fireball", "Stellar", "Supernova"],
      "Himalayan 450": ["Padrão"],
      "Interceptor 650": ["Padrão"],
      "Continental GT 650": ["Padrão"],
      "Classic 350": ["Signals ABS", "Chrome ABS"],
    },
  },
  "Caminhonete/SUV": {},
  "Jet Ski": {},
  Outro: {},
};

// Helpers de cascata
export function isStructured(tipo: string): boolean {
  return tipo in VEHICLES;
}

export function getMarcas(tipo: string): string[] {
  if (isStructured(tipo)) return Object.keys(VEHICLES[tipo] ?? {});
  return Object.keys(VEHICLES_SIMPLE[tipo] ?? {});
}

export function getModelos(tipo: string, marca: string): string[] {
  if (isStructured(tipo)) return Object.keys(VEHICLES[tipo]?.[marca] ?? {});
  return Object.keys(VEHICLES_SIMPLE[tipo]?.[marca] ?? {});
}

export function getModeloEntry(tipo: string, marca: string, modelo: string): ModelEntry | null {
  if (!isStructured(tipo)) return null;
  return VEHICLES[tipo]?.[marca]?.[modelo] ?? null;
}

export function anosDoModelo(m: ModelEntry): string[] {
  const ate = Math.min(m.ate, ANO_HOJE);
  const out: string[] = [];
  for (let y = ate; y >= m.de; y--) out.push(String(y));
  return out;
}

export function versoesNoAno(m: ModelEntry, ano: number): string[] {
  return m.versoes
    .filter((vs) => vs.de <= ano && ano <= Math.min(vs.ate, ANO_HOJE))
    .map((vs) => vs.versao);
}

export function versoesSimples(tipo: string, marca: string, modelo: string): string[] {
  return VEHICLES_SIMPLE[tipo]?.[marca]?.[modelo] ?? [];
}

export const CONFORTO = ["Ar-condicionado digital","Bancos em couro","Teto solar","Banco elétrico","Volante multifuncional","Retrovisores elétricos","Vidros elétricos","Travas elétricas","Direção elétrica","Direção hidráulica","Ar dual zone","Banco com memória","Porta-malas elétrico","Carregador por indução","Luz ambiente interna"];
export const TECNOLOGIA = ["Central multimídia","Android Auto","Apple CarPlay","GPS integrado","Câmera de ré","Câmera 360°","Sensor de estacionamento","Head-up display","Painel digital","Chave presencial (keyless)","Partida por botão","Wi-Fi integrado","Faróis automáticos"];
export const SEGURANCA = ["6 airbags","4 airbags","2 airbags","ABS","Controle de estabilidade (ESP)","Controle de tração","Frenagem autônoma","Alerta de ponto cego","Assistente de faixa","Monitor de pressão dos pneus","Faróis de LED","Câmera frontal","Freio de estacionamento elétrico"];
export const EXTRAS = ["IPVA pago","Único dono","Dois donos","Revisado na concessionária","Revisões em dia","Sem sinistro","Sem leilão","Manual e chave reserva","Garantia de fábrica","Garantia estendida","Com nota fiscal","Aceito financiamento"];
