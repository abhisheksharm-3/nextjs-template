import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container flex flex-col gap-2 px-4 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
              Built with Next.js
            </p>
            <nav className="flex justify-center gap-4 sm:justify-end">
              <Link 
                href="https://github.com/yourusername/next-template"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Source Code
              </Link>
            </nav>
          </div>
        </footer>
  )
}

export default Footer