import { Code, Github, FileText, Menu, Check, Copy, Terminal } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from '../Utils/ModeToggle';

const NavbarComponent = () => {
  const [copied, setCopied] = useState(false);
  type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';
  const [selectedManager, setSelectedManager] = useState<PackageManager>('npm');

  interface InstallButtonProps {
    mobile?: boolean;
  }

  const packageManagers: Record<PackageManager, string> = {
    'npm': 'npm i next-template',
    'yarn': 'yarn add next-template',
    'pnpm': 'pnpm add next-template',
    'bun': 'bun add next-template'
  };

  const handleCopy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const InstallButton = ({ mobile = false }: InstallButtonProps) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={`font-mono text-xs ${mobile ? 'w-full justify-start' : 'min-w-[200px]'} flex items-center justify-between gap-2`}
        >
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            <span>{packageManagers[selectedManager]}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel className="text-xs font-mono">Select Package Manager</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(packageManagers).map(([manager, command]) => (
          <DropdownMenuItem 
            key={manager}
            onClick={() => setSelectedManager(manager as PackageManager)}
            className="font-mono text-xs cursor-pointer flex items-center justify-between"
          >
            {manager}
            {selectedManager === manager && <Check className="h-3 w-3" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => handleCopy(packageManagers[selectedManager])}
          className="font-mono text-xs cursor-pointer"
        >
          {copied ? (
            <span className="flex items-center gap-2">
              <Check className="h-3 w-3" />
              Copied!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Copy className="h-3 w-3" />
              Copy command
            </span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <Link 
        className="flex items-center justify-center font-mono" 
        href="/"
      >
        <Code className="h-5 w-5" />
        <span className="ml-2 text-sm font-medium">next-template</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex items-center gap-4">
        <ModeToggle />
        <Link 
          className="text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" 
          href="/docs"
        >
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            docs
          </div>
        </Link>
        <Link 
          className="text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" 
          href="https://github.com/yourusername/next-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            github
          </div>
        </Link>
        <div className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
        <InstallButton />
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="ghost" size="sm" className="px-2">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <nav className="flex flex-col gap-4">
            <ModeToggle />
            <Link 
              className="text-sm font-mono flex items-center gap-2" 
              href="/docs"
            >
              <FileText className="h-4 w-4" />
              Documentation
            </Link>
            <Link 
              className="text-sm font-mono flex items-center gap-2" 
              href="https://github.com/yourusername/next-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </Link>
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />
            <InstallButton mobile />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavbarComponent;