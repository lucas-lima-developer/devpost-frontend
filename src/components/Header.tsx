"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Bell, MessageSquare, Menu, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Sidebar } from "@/components/Sidebar";
import { set } from "react-hook-form";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => setIsAuthenticated(!isAuthenticated);

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container mx-auto flex items-center h-16 px-4">
        <div className="flex items-center w-[200px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center font-semibold text-xl">
            <span className="text-primary">Dev</span>Post
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center px-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar..."
              className="w-full pl-8 bg-muted/50"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 w-[200px]">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <ThemeSwitcher />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Configurações</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleAuth} 
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <>
              <ThemeSwitcher />
              <Button onClick={toggleAuth} className="flex items-center gap-1">
                <LogIn className="h-4 w-4 mr-1" />
                Entrar
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}