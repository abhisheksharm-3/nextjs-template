import { Code, Github, FileText, Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from '../Utils/ModeToggle';

const NavbarComponent = () => {
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
        <Button variant="outline" size="sm" className="font-mono text-xs">
          npm install
        </Button>
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
            <Button variant="outline" size="sm" className="font-mono text-xs w-full justify-start">
              npm install
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavbarComponent