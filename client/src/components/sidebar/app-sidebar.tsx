"use client";
import { sidebarItems } from "@/consts/exemplo-sidebar-items";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { InputSearch } from "./input-search";
import { useState } from "react";

export function AppSidebar() {
  const path = usePathname();
  const isActive = (url: string) => {
    return path === url;
  };
  const [search, setSearch] = useState<string | null>(null);

  const itemsFiltered = search
    ? sidebarItems.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : sidebarItems;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <InputSearch onSearchChange={setSearch} />
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsFiltered.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn(
                      isActive(item.url) &&
                        "bg-foreground text-background hover:bg-foreground/90 hover:text-background transition-colors"
                    )}
                    tooltip={item.title}
                    asChild
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
