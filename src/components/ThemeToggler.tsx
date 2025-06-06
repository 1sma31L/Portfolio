'use client';

import * as React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { PiSunLight } from 'react-icons/pi';
import { RxMoon } from 'react-icons/rx';
import { useTheme } from 'next-themes';

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="tooltip tooltip-right" data-tip="Ctrl+I">
          <Button variant="outline" size="icon">
            <PiSunLight className="h-[1.2rem] w-[1.2rem] rotate-0 opacity-100 transition-all duration-700 dark:-rotate-90 dark:opacity-0" />
            <RxMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 opacity-0 transition-all duration-700 dark:rotate-0 dark:opacity-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="relative z-[1050]">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
