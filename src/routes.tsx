import { createBrowserRouter } from "react-router-dom";

import { SiteShell } from "@/components/layout/site-shell";
import { HomePage } from "@/pages/home";
import { OperationsPage } from "@/pages/operations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SiteShell>
        <HomePage />
      </SiteShell>
    ),
  },
  {
    path: "/operations",
    element: (
      <SiteShell>
        <OperationsPage />
      </SiteShell>
    ),
  },
]);
