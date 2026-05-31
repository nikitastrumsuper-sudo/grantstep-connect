import { useMemo, useState } from "react";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Award, Clock, TrendingUp, Sparkles, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import software from "@/assets/spec-software.jpg";
import ai from "@/assets/spec-ai.jpg";
import is from "@/assets/spec-is.jpg";
import energy from "@/assets/spec-energy.jpg";
import metallurgy from "@/assets/spec-metallurgy.jpg";
import architecture from "@/assets/spec-architecture.jpg";

type Cat =
  | "Все"
  | "IT"
  | "Инженерия"
  | "Энергетика"
  | "Металлургия"
  | "Архитектура"
  | "Строительство"
  | "Бизнес"
  | "Автоматизация";

const categories: Cat[] = [
  "Все",
  "IT",
  "Инженерия",
  "Энергетика",
  "Металлургия",
  "Архитектура",
  "Строительство",
  "Бизнес",
  "Автоматизация",
];

const specs: { title: string; img: string; grants: number; score: number; years: number; cat: Exclude<Cat, "Все">; tag?: string }[] = [
  { title: "Программная инженерия", img: software, grants: 120, score: 110, years: 4, cat: "IT", tag: "Высокий спрос" },
  { title: "Искусственный интеллект", img: ai, grants: 45, score: 125, years: 4, cat: "IT", tag: "Будущее уже сегодня" },
  { title: "Информационные системы", img: is, grants: 80, score: 105, years: 4, cat: "IT" },
  { title: "Кибербезопасность", img: software, grants: 35, score: 120, years: 4, cat: "IT", tag: "Защита данных" },
  { title: "Автоматизация и управление", img: ai, grants: 55, score: 100, years: 4, cat: "Автоматизация" },
  { title: "Электроэнергетика", img: energy, grants: 95, score: 95, years: 4, cat: "Энергетика", tag: "Энергия будущего" },
  { title: "Теплоэнергетика", img: energy, grants: 70, score: 90, years: 4, cat: "Энергетика" },
  { title: "Металлургия", img: metallurgy, grants: 60, score: 85, years: 4, cat: "Металлургия", tag: "Основа промышленности" },
  { title: "Горное дело", img: metallurgy, grants: 75, score: 80, years: 4, cat: "Инженерия" },
  { title: "Нефтегазовое дело", img: metallurgy, grants: 65, score: 95, years: 4, cat: "Инженерия" },
  { title: "Машиностроение", img: energy, grants: 85, score: 80, years: 4, cat: "Инженерия" },
  { title: "Транспорт и логистика", img: is, grants: 50, score: 75, years: 4, cat: "Инженерия" },
  { title: "Архитектура", img: architecture, grants: 30, score: 115, years: 5, cat: "Архитектура" },
  { title: "Строительство", img: architecture, grants: 90, score: 85, years: 4, cat: "Строительство" },
  { title: "Геодезия и картография", img: architecture, grants: 25, score: 80, years: 4, cat: "Строительство" },
  { title: "Экология", img: energy, grants: 40, score: 75, years: 4, cat: "Инженерия" },
  { title: "Экономика", img: is, grants: 60, score: 90, years: 4, cat: "Бизнес" },
  { title: "Менеджмент", img: is, grants: 55, score: 88, years: 4, cat: "Бизнес" },
];

export function SpecialtiesScreen() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Cat>("Все");

  const filtered = useMemo(
    () =>
      specs.filter(
        (s) =>
          (cat === "Все" || s.cat === cat) &&
          s.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [cat, query],
  );

  return (
    <div className="space-y-5 pb-2">
      <ScreenHeader title="Специальности" subtitle="Найди направление, которое подходит именно тебе" />

      <div className="px-4">
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-secondary px-3.5 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск специальности..."
            className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground"
          />
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Category chips */}
      <div className="-mx-1 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 px-1">
          {categories.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="shrink-0 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-all"
                style={{
                  background: active ? "var(--gradient-primary)" : "white",
                  color: active ? "white" : "var(--color-foreground)",
                  borderColor: active ? "transparent" : "var(--color-border)",
                  boxShadow: active ? "var(--shadow-soft)" : "none",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between px-4">
        <h2 className="text-[14px] font-bold text-foreground" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
          {cat === "Все" ? "Все направления" : cat}
        </h2>
        <span className="text-[11px] font-medium text-muted-foreground">{filtered.length} найдено</span>
      </div>

      <div className="space-y-3 px-4">
        {filtered.map((s) => (
          <article
            key={s.title}
            className="flex gap-3 overflow-hidden rounded-2xl border border-border bg-card p-2.5"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="relative h-[104px] w-[96px] shrink-0 overflow-hidden rounded-xl">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.2 0.1 265 / 0.1) 0%, oklch(0.18 0.1 265 / 0.55) 100%)" }} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="truncate text-[14px] font-bold leading-tight text-foreground" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
                {s.title}
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px] text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Award className="h-3 w-3 text-primary" /><b className="text-foreground">{s.grants}</b> грантов</span>
                <span className="inline-flex items-center gap-1"><TrendingUp className="h-3 w-3 text-primary" /> балл <b className="text-foreground">{s.score}</b></span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3 text-primary" /><b className="text-foreground">{s.years}</b> года</span>
              </div>
              {s.tag && (
                <span className="mt-1.5 inline-block w-fit rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-primary">
                  {s.tag}
                </span>
              )}
              <button className="mt-auto inline-flex w-fit items-center gap-1 self-end rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-primary">
                Подробнее <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">Ничего не найдено</p>
        )}
      </div>

      <div className="px-4">
        <div
          className="rounded-2xl p-5 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <Sparkles className="h-5 w-5 text-white/80" />
          <h3 className="mt-2 text-[17px] font-extrabold" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
            Не знаете что выбрать?
          </h3>
          <p className="mt-1 text-[12px] text-white/80">
            Ответьте на несколько вопросов — мы подберём специальность под ваши интересы.
          </p>
          <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-bold text-primary">
            Подобрать специальность <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}