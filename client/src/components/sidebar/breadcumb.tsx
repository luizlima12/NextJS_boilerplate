"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sidebarItems } from "@/consts/exemplo-sidebar-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BreadcrumbNav() {
  const path = usePathname();
  const isActive = (url: string) => {
    return path === url;
  };

  return (
    <Breadcrumb className="ml-3">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {sidebarItems.map((item) => (
                <DropdownMenuItem key={item.url} className="w-40">
                  <Link
                    href={item.url}
                    className={`w-full ${
                      isActive(item.url) ? "text-primary" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {sidebarItems.map((item) => {
            if (path === item.url) {
              return (
                <Link key={item.url} href={item.url} className="text-primary">
                  {item.title}
                </Link>
              );
            }
          })}
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
