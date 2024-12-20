"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon, ArrowLeft, FileQuestion } from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';

export default function NotFound() {
  return (
    <Layout className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="border-none bg-white/50 dark:bg-gray-800/50 w-full max-w-2xl">
          <CardContent className="pt-12 pb-8 px-8">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* 404 Icon */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-full p-4">
                  <FileQuestion className="h-12 w-12 text-blue-600" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-3">
                <h1 className="text-7xl font-mono font-bold text-gray-900 dark:text-gray-100">
                  404
                </h1>
                <h2 className="text-2xl font-mono font-medium text-gray-700 dark:text-gray-300">
                  Page Not Found
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-md font-mono">
                  Oops! It seems like you've ventured into uncharted territory. 
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
                <Button 
                  variant="outline" 
                  className="w-full gap-2 font-mono"
                  asChild
                >
                  <Link href="/">
                    <HomeIcon className="h-4 w-4" />
                    Home
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2 font-mono"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
              </div>

              {/* Terminal-style Path */}
              <div className="w-full max-w-md">
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800/90 p-3 rounded-md text-gray-600 dark:text-gray-400">
                  <p>$ cd /path/to/page</p>
                  <p className="text-red-500 dark:text-red-400">
                    Error: Directory not found
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </Layout>
  );
}