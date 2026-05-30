import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { InfoScreen } from "@/screens/InfoScreen";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ" }] }),
  component: () => (
    <AppShell>
      <InfoScreen kind="faq" />
    </AppShell>
  ),
});