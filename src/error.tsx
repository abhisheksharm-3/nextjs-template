'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Layout className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="border-none bg-white/50 dark:bg-gray-800/50 w-full max-w-2xl">
          <CardContent className="pt-12 pb-8 px-8">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Error Icon */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-full p-4">
                  <AlertOctagon className="h-12 w-12 text-red-600" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-3">
                <h1 className="text-3xl font-mono font-bold text-gray-900 dark:text-gray-100">
                  Something Went Wrong
                </h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-md font-mono">
                  An unexpected error has occurred. Our team has been notified and is working to fix the issue.
                </p>
              </div>

              {/* Error Details */}
              <div className="w-full max-w-md">
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800/90 p-3 rounded-md text-left">
                  <p className="text-gray-600 dark:text-gray-400">Error Details:</p>
                  <p className="text-red-500 dark:text-red-400 break-all">
                    {error.message || 'Unknown error occurred'}
                  </p>
                  {error.digest && (
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
                <Button 
                  variant="outline" 
                  className="w-full gap-2 font-mono"
                  onClick={() => reset()}
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2 font-mono"
                  asChild
                >
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </Button>
              </div>

              {/* Terminal-style Stack */}
              <div className="w-full max-w-md">
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800/90 p-3 rounded-md text-gray-600 dark:text-gray-400">
                  <p>$ debug --trace</p>
                  <p className="text-yellow-500 dark:text-yellow-400">
                    {'>'} Collecting error information...
                  </p>
                  <p className="text-gray-500 dark:text-gray-500">
                    {'>'} Stack trace available in production logs
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