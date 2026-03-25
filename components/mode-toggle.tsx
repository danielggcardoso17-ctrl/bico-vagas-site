"use client"


import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            className="hover:bg-muted transition-colors"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {/* Ícone de Sol (visível no Light, escondido no Dark) */}
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

            {/* Ícone de Lua (escondido no Light, visível no Dark) */}
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />


        </Button>
    )
}