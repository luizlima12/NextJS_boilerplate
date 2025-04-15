import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ModeToggle } from "@/components/theme/toggle-theme";

import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS boilerplate",
  description: "A NextJS boilerplate with TypeScript, Tailwind CSS, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main>
              <div className="flex gap-2 items-center mt-[7] ml-1">
                <SidebarTrigger className="size-8 border" />
                <ModeToggle />
              </div>
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
