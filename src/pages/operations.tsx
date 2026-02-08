import { CheckCircle2, FileStack, ListChecks } from "lucide-react";

import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Inventory the content",
    description:
      "Identify what needs to live on this page and group it by theme.",
  },
  {
    title: "Create a page module",
    description: "Add a new file in src/pages and wire it in the router.",
  },
  {
    title: "Reuse layout + UI",
    description: "Pull shared components from the layout and UI folders.",
  },
];

const metrics = [
  { label: "Active playbooks", value: "6" },
  { label: "Owners assigned", value: "4" },
  { label: "Review cadence", value: "Weekly" },
];

export function OperationsPage() {
  return (
    <section className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Operations
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            A structured secondary page for repeatable workflows.
          </h1>
          <p className="text-base text-muted-foreground">
            This page demonstrates how content-specific sections live alongside
            reusable layout elements while keeping the directory clean and
            scalable.
          </p>
        </div>
        <Card>
          <div className="flex items-center gap-3">
            <FileStack className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-semibold">Operational stack</p>
              <p className="text-xs text-muted-foreground">
                Pages + layout + UI
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{metric.label}</span>
                <span className="font-semibold">{metric.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card key={step.title}>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {step.description}
            </p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Definition of done</p>
            <p className="text-xs text-muted-foreground">
              Each new page should match the shared layout and tokens.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4" />
            <span>Navigation updated</span>
            <ListChecks className="h-4 w-4" />
            <span>README updated</span>
          </div>
        </div>
      </Card>
    </section>
  );
}
