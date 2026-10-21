import { SiteNavigation } from "@/components/site-navigation";
import { SiteFooter } from "@/components/site-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteNavigation />{children}<SiteFooter /></>;
}
