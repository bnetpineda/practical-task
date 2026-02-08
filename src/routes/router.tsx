import { createBrowserRouter } from "react-router-dom";

import { SiteShell } from "@/layouts/site-shell";
import { HomePage, OperationsPage } from "@/pages";

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
