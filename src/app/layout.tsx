import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "DevPost - Semelhante ao Reddit",
  description: "Uma plataforma para compartilhar conteúdo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex">
            <Sidebar className="hidden md:block w-[240px] shrink-0" />
            <main className="flex-1 py-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}