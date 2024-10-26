import { Code } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavbarLoggedIn = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link className="flex items-center justify-center" href="#">
      <span className="sr-only">Enhanced Next.js Template</span>
      <Code className="h-6 w-6" />
      <span className="ml-2 text-lg font-semibold">Enhanced Next.js Template</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Features
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Documentation
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
        GitHub
      </Link>
    </nav>
  </header>
  )
}

export default NavbarLoggedIn