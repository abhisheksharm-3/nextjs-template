import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Zap, FileStack, Database, Lock, Palette, Proportions } from 'lucide-react'
import Layout from "../Layout/Layout"

export default function Welcome() {
  return (
    <Layout className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Enhanced Next.js Template
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A powerful, opinionated starting point for your Next.js projects with advanced features and integrations.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <FileStack className="h-8 w-8 mb-2" />
                  <CardTitle>Opinionated File Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Well-organized project structure for scalability and maintainability.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Palette className="h-8 w-8 mb-2" />
                  <CardTitle>UI Component Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Integrated shadcn/ui, NextUI, and Magic UI for beautiful, consistent designs.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 mb-2" />
                  <CardTitle>Server-Side Auth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Secure authentication system using server-side App Router for enhanced security.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 mb-2" />
                  <CardTitle>Database Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Pre-configured database setup for efficient data management and storage.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Proportions className="h-8 w-8 mb-2" />
                  <CardTitle>Base Layout Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Ready-to-use layout components for consistent page structure across your app.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2" />
                  <CardTitle>Performance Optimized</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Built-in optimizations for fast loading and smooth user experiences.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our Template?</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our enhanced Next.js template provides a robust foundation for your web applications, combining the latest technologies and best practices to accelerate your development process.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    <span>Faster development with pre-configured tools and libraries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    <span>Consistent design with integrated UI component libraries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    <span>Secure and efficient server-side authentication and data management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    <span>Scalable architecture for growing projects</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-8">
                  <Code className="h-32 w-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </Layout>
  )
}