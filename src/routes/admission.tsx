import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AdmissionScreen } from "@/screens/AdmissionScreen";

export const Route = createFileRoute("/admission")({
  head: () => ({ meta: [{ title: "Поступление — ВКТУ" }] }),
  component: () => (
    <AppShell>
      <AdmissionScreen />
    </AppShell>
  ),
});