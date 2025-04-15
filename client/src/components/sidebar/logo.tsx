import LogoNextSvg from "@/assets/logo-next";
import { cn } from "@/lib/utils";
import { SidebarGroupLabel, useSidebar } from "../ui/sidebar";

export default function LogoSidebar() {
  const { open } = useSidebar();

  return (
    <SidebarGroupLabel className={cn("mb-2 mt-2", !open && "mb-0 mt-0")}>
      <LogoNextSvg />
    </SidebarGroupLabel>
  );
}
