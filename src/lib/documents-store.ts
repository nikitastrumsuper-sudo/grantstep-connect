import { useSyncExternalStore } from "react";

export type DocStatus = "missing" | "uploaded" | "review" | "approved";

export type DocId = "id" | "att" | "photo" | "med" | "ent";

type State = Record<DocId, DocStatus>;

let state: State = {
  id: "approved",
  att: "review",
  photo: "missing",
  med: "missing",
  ent: "uploaded",
};

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export const documentsStore = {
  get: () => state,
  set: (id: DocId, status: DocStatus) => {
    state = { ...state, [id]: status };
    emit();
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useDocuments() {
  return useSyncExternalStore(
    documentsStore.subscribe,
    documentsStore.get,
    documentsStore.get,
  );
}

export const DOC_IDS: DocId[] = ["id", "att", "photo", "med", "ent"];

export function docProgress(s: State) {
  const done = DOC_IDS.filter(
    (k) => s[k] === "uploaded" || s[k] === "review" || s[k] === "approved",
  ).length;
  return { done, total: DOC_IDS.length, percent: Math.round((done / DOC_IDS.length) * 100) };
}

export const STATUS_LABEL: Record<DocStatus, string> = {
  missing: "Нужно загрузить",
  uploaded: "Загружено",
  review: "На проверке",
  approved: "Одобрено",
};