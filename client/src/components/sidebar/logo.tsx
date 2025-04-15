import { SidebarGroupLabel } from "../ui/sidebar";
import { useSidebar } from "../ui/sidebar";
import { useTheme } from "next-themes";
import LogoNextSvg from "@/assets/logo-next";
import { cn } from "@/lib/utils";

export default function LogoSidebar() {
  const { open } = useSidebar();
  const { theme } = useTheme();
  return (
    <SidebarGroupLabel className={cn("mb-2 mt-2", !open && "mb-0 mt-0")}>
      <LogoNextSvg
        className={cn(theme === "dark" ? "text-white" : "text-black")}
      />
    </SidebarGroupLabel>
  );
}
