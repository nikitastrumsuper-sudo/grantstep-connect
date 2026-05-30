import { ScreenHeader } from "@/components/ScreenHeader";
import { Award, Clock, TrendingUp, Sparkles, ArrowRight, Search } from "lucide-react";
import software from "@/assets/spec-software.jpg";
import ai from "@/assets/spec-ai.jpg";
import is from "@/assets/spec-is.jpg";
import energy from "@/assets/spec-energy.jpg";
import metallurgy from "@/assets/spec-metallurgy.jpg";
import architecture from "@/assets/spec-architecture.jpg";

const specs = [
  { title: "Программная инженерия", img: software, grants: 120, score: 110, years: 4 },
  { title: "Искусственный интеллект", img: ai, grants: 45, score: 125, years: 4 },
  { title: "Информационные системы", img: is, grants: 80, score: 105, years: 4 },
  { title: "Электроэнергетика", img: energy, grants: 95, score: 95, years: 4 },
  { title: "Металлургия", img: metallurgy, grants: 60, score: 85, years: 4 },
  { title: "Архитектура", img: architecture, grants: 30, score: 115, years: 5 },
];

export function SpecialtiesScreen() {
  return (
    <div className="space-y-6">
      <ScreenHeader title="Специальности" subtitle="Найдите направление, которое вам подходит" />

      <div className="px-5">
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-secondary px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Поиск специальности..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="space-y-4 px-5">
        {specs.map((s) => (
          <article
            key={s.title}
            className="overflow-hidden rounded-3xl border border-border bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.18 0.1 265 / 0.7) 100%)" }} />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-primary">
                <Award className="h-3 w-3" />
                {s.grants} грантов
              </div>
              <h3 className="absolute bottom-3 left-4 right-4 text-[18px] font-bold leading-tight text-white" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
                {s.title}
              </h3>
            </div>
            <div className="flex items-center justify-between px-4 py-3.5 text-xs">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>проходной <b className="text-foreground">{s.score}</b></span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span><b className="text-foreground">{s.years}</b> года</span>
              </div>
              <button className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 font-semibold text-primary">
                Подробнее <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="px-5">
        <div
          className="rounded-3xl p-6 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <Sparkles className="h-6 w-6 text-white/80" />
          <h3 className="mt-3 text-[20px] font-extrabold" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
            Не знаете что выбрать?
          </h3>
          <p className="mt-1.5 text-sm text-white/80">
            Ответьте на несколько вопросов — мы подберём специальность под ваши интересы.
          </p>
          <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-primary">
            Подобрать специальность <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}