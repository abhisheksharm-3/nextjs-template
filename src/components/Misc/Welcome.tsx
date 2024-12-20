import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Github,
  FileText,
  Terminal,
  PackageOpen,
  Boxes,
  Coffee
} from 'lucide-react';
import Layout from "../Layout/Layout";

export default function Welcome() {
  return (
    <Layout className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1">
        {/* Simple Header */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-mono font-medium tracking-tight sm:text-4xl md:text-5xl">
                  next-template
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-mono">
                  ./src → Your next project
                </p>
              </div>
              <div className="flex gap-4 font-mono text-sm">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md">
                  <Terminal className="h-4 w-4" />
                  npx create-next-app -e https://github.com/abhisheksharm-3/nextjs-template
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  Clone Repository
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <FileText className="h-4 w-4" />
                  README.md
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="font-mono text-base font-medium">
                    <div className="flex items-center gap-2">
                      <PackageOpen className="h-4 w-4" />
                      Dependencies
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <div>next 15.1.2</div>
                  <div>react 19.x</div>
                  <div>typescript 5.x</div>
                  <div>tailwind 3.4.17</div>
                  <div>nextui 2.6.8</div>
                  <div>framer-motion 11.15.0</div>
                  <div>node-appwrite 14.1.0</div>
                </CardContent>
              </Card>

              <Card className="border-none bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="font-mono text-base font-medium">
                    <div className="flex items-center gap-2">
                      <Boxes className="h-4 w-4" />
                      Project Structure
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <div>├── app/</div>
                  <div>├── components/</div>
                  <div>├── lib/</div>
                  <div>├── hooks/</div>
                  <div>├── services/</div>
                  <div>└── middleware.ts</div>
                </CardContent>
              </Card>

              <Card className="border-none bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="font-mono text-base font-medium">
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4" />
                      Features
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <div>✓ App Router</div>
                  <div>✓ TypeScript</div>
                  <div>✓ Tailwind CSS</div>
                  <div>✓ Appwrite Setup</div>
                  <div>✓ shadcn/ui & nextui</div>
                  <div>✓ ESLint Config</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <Card className="border-none bg-white/50 dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="font-mono text-base font-medium">Quick Start</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-mono text-sm space-y-2">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                    <p className="text-gray-600 dark:text-gray-400"># Clone the repository</p>
                    <p>https://github.com/abhisheksharm-3/nextjs-template</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                    <p className="text-gray-600 dark:text-gray-400"># Install dependencies</p>
                    <p>bun install</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                    <p className="text-gray-600 dark:text-gray-400"># Start development server</p>
                    <p>bun dev</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* File Tree Preview */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <Card className="border-none bg-white/50 dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="font-mono text-base font-medium">File Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="font-mono text-sm text-gray-600 dark:text-gray-400">
{`next-template/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── ui/
│   └── shared/
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── types/
│   └── index.d.ts
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </Layout>
  );
}