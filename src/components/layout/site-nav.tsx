import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Operations", to: "/operations" },
];

export function SiteNav() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
            PX
          </div>
          <div>
            <p className="text-sm font-semibold">Practical</p>
            <p className="text-xs text-muted-foreground">Operations Suite</p>
          </div>
        </div>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Button key={item.to} variant="ghost" asChild>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-foreground" : "text-muted-foreground"
                }
                end
                to={item.to}
              >
                {item.label}
              </NavLink>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
