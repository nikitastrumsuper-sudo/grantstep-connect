import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { SpecialtiesScreen } from "@/screens/SpecialtiesScreen";

export const Route = createFileRoute("/specialties")({
  head: () => ({ meta: [{ title: "Специальности — ВКТУ" }] }),
  component: () => (
    <AppShell>
      <SpecialtiesScreen />
    </AppShell>
  ),
});