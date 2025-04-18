import Link from "next/link";
import { HomeIcon, TrendingUp, Zap, Users, Bookmark, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-full", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
            Navegar
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              Popular
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Zap className="mr-2 h-4 w-4" />
              Novo
            </Button>
          </div>
        </div>
        <Separator />
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
            Suas comunidades
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              r/reactjs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              r/programming
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              r/webdev
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              r/javascript
            </Button>
          </div>
        </div>
        <Separator />
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold">Configurações</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Bookmark className="mr-2 h-4 w-4" />
              Salvos
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}