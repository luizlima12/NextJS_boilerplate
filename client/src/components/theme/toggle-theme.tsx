'use client'

import { Computer, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="relative h-8 w-8 p-0">
          <Sun
            className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0
              dark:-rotate-90"
          />
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100
              dark:rotate-0"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-2">
        <DropdownMenuCheckboxItem
          onClick={() => setTheme('light')}
          className={cn(
            'flex items-center gap-2',
            theme === 'light' && 'bg-accent'
          )}
          checked={theme === 'light'}
        >
          <Sun className="h-4 w-4" />
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => setTheme('dark')}
          className={cn(
            'flex items-center gap-2',
            theme === 'dark' && 'bg-accent'
          )}
          checked={theme === 'dark'}
        >
          <Moon className="h-4 w-4" />
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => setTheme('system')}
          className={cn(
            'flex items-center gap-2',
            theme === 'system' && 'bg-accent'
          )}
          checked={theme === 'system'}
        >
          <Computer className="h-4 w-4" />
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
