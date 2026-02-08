import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <SiteNav />
      <main className="container py-10 sm:py-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
