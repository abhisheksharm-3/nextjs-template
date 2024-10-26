import { Code } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button';
import { ModeToggle } from '../Utils/ModeToggle';

const NavbarLoggedIn = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <Link 
        className="flex items-center justify-center font-mono" 
        href="/dashboard"
      >
        <Code className="h-5 w-5" />
        <span className="ml-2 text-sm font-medium">next-template</span>
      </Link>
      
      <nav className="ml-auto flex items-center gap-4">
      <ModeToggle />
        <Button variant="ghost" size="sm" className="font-mono text-xs">
          Sign Out
        </Button>
      </nav>
    </header>
  );
};

export default NavbarLoggedIn