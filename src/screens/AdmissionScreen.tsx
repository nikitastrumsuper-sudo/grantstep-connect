import { ScreenHeader } from "@/components/ScreenHeader";
import { Section } from "@/components/Section";
import { GraduationCap, FilePlus2, Send, Activity, Trophy, CalendarDays, Check, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useDocuments, docProgress } from "@/lib/documents-store";

const baseSteps = [
  { icon: GraduationCap, title: "Выберите специальность", desc: "Изучите направления и проходные баллы." },
  { icon: FilePlus2, title: "Подготовьте документы", desc: "Соберите все необходимые сканы." },
  { icon: Send, title: "Подайте заявку", desc: "Отправьте документы онлайн." },
  { icon: Activity, title: "Отслеживайте статус", desc: "Получайте уведомления о ходе." },
  { icon: Trophy, title: "Получите результат", desc: "Зачисление и получение гранта." },
];

const calendar = [
  { d: "20 июня", t: "Начало приёма документов" },
  { d: "01 июля", t: "Сдача ЕНТ" },
  { d: "10 августа", t: "Подача на гранты" },
  { d: "13 августа", t: "Объявление результатов" },
  { d: "25 августа", t: "Зачисление" },
];

const faqs = [
  { q: "Сколько грантов выделяется в ВКТУ?", a: "Ежегодно университет получает более 1500 государственных грантов на разные специальности." },
  { q: "Какой минимальный балл ЕНТ?", a: "Минимальный порог — 50 баллов, но для гранта обычно требуется выше 75–110 в зависимости от специальности." },
  { q: "Можно ли подать документы онлайн?", a: "Да, через приложение GrantStep × ВКТУ — загрузите сканы и отслеживайте статус заявки." },
];

export function AdmissionScreen() {
  const docs = useDocuments();
  const { percent, done, total } = docProgress(docs);
  // step 1 done by default, step 2 active until all docs uploaded
  const activeIndex = done === total ? 2 : 1;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const overall = Math.round(((1 + percent / 100) / baseSteps.length) * 100);

  return (
    <div className="space-y-5 pb-2">
      <ScreenHeader title="Поступление" subtitle="Пять шагов до зачисления в ВКТУ" />

      {/* Progress card */}
      <div className="px-4">
        <div
          className="rounded-2xl p-4 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Ваш прогресс</p>
              <p className="mt-1 text-[26px] font-extrabold leading-none" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
                {overall}%
              </p>
            </div>
            <div className="text-right text-[11px] text-white/80">
              <p>Шаг <b className="text-white">{activeIndex + 1}</b> из {baseSteps.length}</p>
              <p>{baseSteps[activeIndex].title}</p>
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
            <div className="h-full rounded-full bg-white transition-all" style={{ width: `${overall}%` }} />
          </div>
        </div>
      </div>

      <Section title="Дорожная карта">
        <ol className="relative space-y-3 pl-2">
          <span className="absolute left-[28px] top-2 bottom-2 w-px bg-border" />
          {baseSteps.map((s, i) => {
            const Icon = s.icon;
            const isDone = i < activeIndex;
            const isActive = i === activeIndex;
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
                    {isDone && (
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: "var(--color-success)" }}>
                        Готово
                      </span>
                    )}
                  </div>
                  <h4 className="mt-1 text-[15px] font-bold text-foreground">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                  {isActive && i === 1 && (
                    <p className="mt-2 text-[11px] font-semibold text-primary">
                      Загружено {done} из {total} документов
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section title="Календарь поступления">
        <div
          className="rounded-2xl border border-border bg-card p-2"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {calendar.map((c, i) => (
            <div
              key={c.d}
              className={`flex items-center gap-3 px-2.5 py-3 ${i !== calendar.length - 1 ? "border-b border-border" : ""}`}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                <CalendarDays className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-[12.5px] font-bold text-foreground">{c.d}</p>
                <p className="text-[11px] text-muted-foreground">{c.t}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Частые вопросы">
        <div className="overflow-hidden rounded-2xl border border-border bg-card" style={{ boxShadow: "var(--shadow-soft)" }}>
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className={i !== faqs.length - 1 ? "border-b border-border" : ""}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                >
                  <span className="text-[13px] font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && <p className="px-4 pb-3 text-[12px] leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </Section>

      <div className="px-4">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-[13px] font-bold text-white"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-card)" }}
        >
          <MessageCircle className="h-4 w-4" />
          Задать вопрос приёмной комиссии
        </button>
      </div>
    </div>
  );
}