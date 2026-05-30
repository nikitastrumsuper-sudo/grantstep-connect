import { useState } from "react";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Section } from "@/components/Section";
import { Check, Upload, FileText, CreditCard, ScrollText, Camera, HeartPulse, Award } from "lucide-react";

const docs = [
  { id: "id", label: "Удостоверение личности", icon: CreditCard },
  { id: "att", label: "Аттестат", icon: ScrollText },
  { id: "photo", label: "Фото 3×4", icon: Camera },
  { id: "med", label: "Медицинская справка", icon: HeartPulse },
  { id: "ent", label: "Сертификат ЕНТ", icon: Award },
];

export function DocumentsScreen() {
  const [uploaded, setUploaded] = useState<Record<string, boolean>>({ id: true, att: true });
  const progress = Math.round((Object.values(uploaded).filter(Boolean).length / docs.length) * 100);

  return (
    <div className="space-y-6">
      <ScreenHeader title="Документы" subtitle="Загрузите все необходимые документы" />

      <div className="px-5">
        <div
          className="rounded-3xl p-5 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Прогресс</p>
              <p className="mt-1 text-[28px] font-extrabold leading-none" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
                {progress}%
              </p>
            </div>
            <div className="text-right text-xs text-white/80">
              <p>{Object.values(uploaded).filter(Boolean).length} из {docs.length}</p>
              <p>загружено</p>
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-white transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <Section title="Чек-лист документов">
        <div className="space-y-2.5">
          {docs.map(({ id, label, icon: Icon }) => {
            const done = !!uploaded[id];
            return (
              <div
                key={id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: done ? "var(--color-success)" : "var(--color-accent)",
                    color: done ? "white" : "var(--color-primary)",
                  }}
                >
                  {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground">
                    {done ? "Загружено · PDF" : "PDF или JPG до 10 МБ"}
                  </p>
                </div>
                <button
                  onClick={() => setUploaded((p) => ({ ...p, [id]: !p[id] }))}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-bold"
                  style={{
                    background: done ? "var(--color-secondary)" : "var(--gradient-primary)",
                    color: done ? "var(--color-primary)" : "white",
                  }}
                >
                  {done ? "Заменить" : <><Upload className="h-3 w-3" /> Загрузить</>}
                </button>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="px-5">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-card)" }}
        >
          <FileText className="h-4 w-4" />
          Отправить заявку
        </button>
      </div>
    </div>
  );
}