'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Code, Github, Terminal } from 'lucide-react'
import Layout from "@/components/Layout/Layout"

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setError('')
  
      if (password !== confirmPassword) {
        setError('Passwords do not match')
        return
      }
  
      try {
        // Add your signup logic here
        console.log('Signup successful')
      } catch (err) {
        setError('An error occurred during signup')
      }
    }
  
    return (
      <Layout className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Code className="h-8 w-8" />
              <h1 className="text-2xl font-mono font-medium">next-template</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">auth/signup</p>
            </div>
            
            <Card className="border-2">
              <CardHeader className="space-y-1">
                <CardTitle className="text-lg font-mono">Create Account</CardTitle>
                <CardDescription className="font-mono text-xs">
                  Choose your preferred signup method
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full font-mono text-xs" type="button">
                    <Github className="mr-2 h-4 w-4" />
                    Sign up with GitHub
                  </Button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground font-mono">
                        or
                      </span>
                    </div>
                  </div>
  
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="email" className="font-mono text-xs">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="font-mono text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" className="font-mono text-xs">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="font-mono text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password" className="font-mono text-xs">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="font-mono text-sm"
                        required
                      />
                    </div>
                    {error && (
                      <Alert variant="destructive" className="text-sm font-mono py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}
                    <Button type="submit" className="w-full font-mono text-xs">
                      Create Account
                    </Button>
                  </form>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="text-sm text-muted-foreground font-mono flex gap-1 text-xs">
                  <Terminal className="h-4 w-4" />
                  <span>Existing user?</span>
                  <Link href="/login" className="underline underline-offset-4">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </Layout>
    )
  }