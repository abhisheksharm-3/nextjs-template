import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  DollarSign,
  Activity,
  ShoppingCart
} from 'lucide-react';
import Layout from "@/components/Layout/Layout";

// Mock data - developers can replace with their actual data structure
const MOCK_METRICS = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: DollarSign,
    change: "+20.1%",
    timeframe: "from last month"
  },
  {
    title: "Active Users",
    value: "2,847",
    icon: Users,
    change: "+12.5%",
    timeframe: "from last week"
  },
  {
    title: "New Orders",
    value: "482",
    icon: ShoppingCart,
    change: "+8.2%",
    timeframe: "from yesterday"
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    icon: Activity,
    change: "+2.1%",
    timeframe: "from last week"
  }
];

const MOCK_TRANSACTIONS = [
  { id: 1, user: "John Doe", amount: 125.99, status: "completed", time: "2 min ago" },
  { id: 2, user: "Alice Smith", amount: 247.50, status: "pending", time: "5 min ago" },
  { id: 3, user: "Bob Johnson", amount: 89.99, status: "completed", time: "15 min ago" }
];

export default function Dashboard() {
  return (
    <Layout className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1">
        {/* Dashboard Header */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-mono font-medium tracking-tight sm:text-3xl">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                  Template dashboard with minimal setup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="w-full py-4">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {MOCK_METRICS.map((metric, index) => (
                <Card key={index} className="border-none bg-white/50 dark:bg-gray-800/50">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="font-mono text-sm font-medium">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="flex items-center text-sm text-green-500">
                      {metric.change} {metric.timeframe}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="w-full py-4">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Left Column */}
              <Card className="border-none bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="font-mono text-base font-medium">
                    Main Content
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 font-mono">Add your main content here</p>
                  </div>
                </CardContent>
              </Card>

              {/* Right Column */}
              <Card className="border-none bg-white/50 dark:bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="font-mono text-base font-medium">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {MOCK_TRANSACTIONS.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="font-mono">
                            <div className="text-sm font-medium">{transaction.user}</div>
                            <div className="text-xs text-gray-500">{transaction.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="font-mono text-sm">${transaction.amount}</div>
                          <div className={`px-2 py-1 text-xs rounded-full font-mono ${
                            transaction.status === 'completed' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {transaction.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}