import { ScreenHeader } from "@/components/ScreenHeader";
import { Section } from "@/components/Section";
import { GraduationCap, FilePlus2, Send, Activity, Trophy, CalendarDays, Check } from "lucide-react";

const steps = [
  { icon: GraduationCap, title: "Выберите специальность", desc: "Изучите направления и проходные баллы.", state: "done" },
  { icon: FilePlus2, title: "Подготовьте документы", desc: "Соберите все необходимые сканы.", state: "active" },
  { icon: Send, title: "Подайте заявку", desc: "Отправьте документы онлайн.", state: "todo" },
  { icon: Activity, title: "Отслеживайте статус", desc: "Получайте уведомления о ходе.", state: "todo" },
  { icon: Trophy, title: "Получите результат", desc: "Зачисление и получение гранта.", state: "todo" },
] as const;

const calendar = [
  { d: "20 июня", t: "Начало приёма документов" },
  { d: "01 июля", t: "Сдача ЕНТ" },
  { d: "10 августа", t: "Подача на гранты" },
  { d: "13 августа", t: "Объявление результатов" },
  { d: "25 августа", t: "Зачисление" },
];

export function AdmissionScreen() {
  return (
    <div className="space-y-7">
      <ScreenHeader title="Поступление" subtitle="Пять шагов до зачисления в ВКТУ" />

      <Section title="Дорожная карта">
        <ol className="relative space-y-3 pl-2">
          <span className="absolute left-[28px] top-2 bottom-2 w-px bg-border" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isDone = s.state === "done";
            const isActive = s.state === "active";
            return (
              <li key={s.title} className="relative flex items-stretch gap-4">
                <span
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold"
                  style={{
                    background: isDone ? "var(--color-success)" : isActive ? "var(--gradient-primary)" : "var(--color-secondary)",
                    color: isDone || isActive ? "white" : "var(--color-muted-foreground)",
                    boxShadow: isActive ? "var(--shadow-card)" : "none",
                  }}
                >
                  {isDone ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </span>
                <div
                  className="flex-1 rounded-2xl border border-border bg-card p-4"
                  style={{ boxShadow: isActive ? "var(--shadow-card)" : "var(--shadow-soft)" }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Шаг {i + 1}
                    </p>
                    {isActive && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-primary">
                        Сейчас
                      </span>
                    )}
                  </div>
                  <h4 className="mt-1 text-[15px] font-bold text-foreground">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section title="Календарь поступления">
        <div
          className="rounded-3xl border border-border bg-card p-2"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {calendar.map((c, i) => (
            <div
              key={c.d}
              className={`flex items-center gap-4 px-3 py-3.5 ${i !== calendar.length - 1 ? "border-b border-border" : ""}`}
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                <CalendarDays className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-[13px] font-bold text-foreground">{c.d}</p>
                <p className="text-xs text-muted-foreground">{c.t}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}