import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { InfoScreen } from "@/screens/InfoScreen";

export const Route = createFileRoute("/parents")({
  head: () => ({ meta: [{ title: "Для родителей" }] }),
  component: () => (
    <AppShell>
      <InfoScreen kind="parents" />
    </AppShell>
  ),
});