import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { DocumentsScreen } from "@/screens/DocumentsScreen";

export const Route = createFileRoute("/documents")({
  head: () => ({ meta: [{ title: "Документы — ВКТУ" }] }),
  component: () => (
    <AppShell>
      <DocumentsScreen />
    </AppShell>
  ),
});