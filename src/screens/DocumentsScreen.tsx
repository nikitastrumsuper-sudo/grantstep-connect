import { ScreenHeader } from "@/components/ScreenHeader";
import { Section } from "@/components/Section";
import { Check, Upload, FileText, CreditCard, ScrollText, Camera, HeartPulse, Award, Clock, RefreshCw } from "lucide-react";
import { useDocuments, documentsStore, docProgress, STATUS_LABEL, type DocId, type DocStatus } from "@/lib/documents-store";

const docs: { id: DocId; label: string; icon: typeof CreditCard }[] = [
  { id: "id", label: "Удостоверение личности", icon: CreditCard },
  { id: "att", label: "Аттестат", icon: ScrollText },
  { id: "photo", label: "Фото 3×4", icon: Camera },
  { id: "med", label: "Медицинская справка", icon: HeartPulse },
  { id: "ent", label: "Сертификат ЕНТ", icon: Award },
];

const statusStyle: Record<DocStatus, { bg: string; color: string; icon: typeof Check }> = {
  missing: { bg: "var(--color-accent)", color: "var(--color-primary)", icon: Upload },
  uploaded: { bg: "oklch(0.95 0.04 255)", color: "var(--color-primary)", icon: Check },
  review: { bg: "oklch(0.95 0.06 80)", color: "oklch(0.45 0.16 80)", icon: Clock },
  approved: { bg: "oklch(0.92 0.1 152)", color: "oklch(0.35 0.16 152)", icon: Check },
};

export function DocumentsScreen() {
  const state = useDocuments();
  const { done, total, percent } = docProgress(state);
  const allDone = done === total;

  return (
    <div className="space-y-5 pb-2">
      <ScreenHeader title="Документы" subtitle="Загрузите все необходимые документы" />

      <div className="px-4">
        <div
          className="rounded-2xl p-4 text-white"
          style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-deep)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Прогресс</p>
              <p className="mt-1 text-[26px] font-extrabold leading-none" style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
                {percent}%
              </p>
            </div>
            <div className="text-right text-xs text-white/80">
              <p><b className="text-white">{done}</b> из {total}</p>
              <p>загружено</p>
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-white transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      <Section title="Чек-лист документов">
        <div className="space-y-2">
          {docs.map(({ id, label, icon: Icon }) => {
            const status = state[id];
            const isDone = status !== "missing";
            const s = statusStyle[status];
            const StatusIcon = s.icon;
            return (
              <div
                key={id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "var(--color-accent)", color: "var(--color-primary)" }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-foreground">{label}</p>
                  <span
                    className="mt-0.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10.5px] font-bold"
                    style={{ background: s.bg, color: s.color }}
                  >
                    <StatusIcon className="h-2.5 w-2.5" />
                    {STATUS_LABEL[status]}
                  </span>
                </div>
                <button
                  onClick={() =>
                    documentsStore.set(id, isDone ? "missing" : "uploaded")
                  }
                  className="inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-bold"
                  style={{
                    background: isDone ? "var(--color-secondary)" : "var(--gradient-primary)",
                    color: isDone ? "var(--color-primary)" : "white",
                  }}
                >
                  {isDone ? <><RefreshCw className="h-3 w-3" /> Заменить</> : <><Upload className="h-3 w-3" /> Загрузить</>}
                </button>
              </div>
            );
          })}
        </div>
      </Section>

      <div className="px-4">
        <button
          disabled={!allDone}
          className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-[13px] font-bold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-card)" }}
        >
          <FileText className="h-4 w-4" />
          {allDone ? "Отправить заявку" : `Загрузите ещё ${total - done} док.`}
        </button>
        <p className="mt-2 text-center text-[10.5px] text-muted-foreground">
          Кнопка станет активной после загрузки всех документов
        </p>
      </div>
    </div>
  );
}