import { ArrowRight, LayoutGrid, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    title: "Structured for growth",
    description:
      "Clear separation between layout, pages, and shared UI primitives.",
    icon: LayoutGrid,
  },
  {
    title: "Consistent routing",
    description:
      "Each page lives in src/pages and is wired in the router once.",
    icon: ShieldCheck,
  },
  {
    title: "Reusable UI blocks",
    description:
      "shadcn/ui components keep the UI consistent without a heavy framework.",
    icon: Sparkles,
  },
];

export function HomePage() {
  return (
    <section className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Multi-page Vite starter
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Practical Task builds a clean, scalable structure for
            straightforward multi-page sites.
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Two pages, shared layout, and a simple routing pattern. Designed to
            keep future growth predictable and easy to maintain.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild>
              <Link to="/operations">
                View operations page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                Vite docs
              </a>
            </Button>
          </div>
        </div>
        <Card className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Project snapshot</p>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
              Ready to extend
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-slate-50 p-4">
              <p className="text-xs uppercase text-muted-foreground">Pages</p>
              <p className="text-2xl font-semibold">2</p>
              <p className="text-xs text-muted-foreground">Home + Operations</p>
            </div>
            <div className="rounded-2xl border border-border bg-slate-50 p-4">
              <p className="text-xs uppercase text-muted-foreground">Layout</p>
              <p className="text-2xl font-semibold">Shared</p>
              <p className="text-xs text-muted-foreground">
                Nav + footer + shell
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-slate-50 p-4">
              <p className="text-xs uppercase text-muted-foreground">UI</p>
              <p className="text-2xl font-semibold">shadcn</p>
              <p className="text-xs text-muted-foreground">Button + tokens</p>
            </div>
            <div className="rounded-2xl border border-border bg-slate-50 p-4">
              <p className="text-xs uppercase text-muted-foreground">
                Responsive
              </p>
              <p className="text-2xl font-semibold">Yes</p>
              <p className="text-xs text-muted-foreground">
                Grid + stacked CTA
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <Icon className="h-6 w-6 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
