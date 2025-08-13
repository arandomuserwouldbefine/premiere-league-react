import {
  Users,
  TrendingUp,
  Clock,
  AlertTriangle,
  BarChart3,
  User,
  CheckCircle,
  Upload,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      icon: Users,
      label: "Total Users",
      value: "1,234",
      color: "blue",
    },
    {
      icon: TrendingUp,
      label: "Page Views",
      value: "45,678",
      color: "green",
    },
    {
      icon: Clock,
      label: "Avg. Load Time",
      value: "1.2s",
      color: "amber",
    },
    {
      icon: AlertTriangle,
      label: "Error Rate",
      value: "0.1%",
      color: "red",
    },
  ];

  const activities = [
    {
      icon: User,
      user: "John Doe",
      action: "Updated profile information",
      timestamp: "2 minutes ago",
      color: "blue",
    },
    {
      icon: CheckCircle,
      user: "Jane Smith",
      action: "Completed onboarding process",
      timestamp: "5 minutes ago",
      color: "green",
    },
    {
      icon: Upload,
      user: "Mike Johnson",
      action: "Uploaded new document",
      timestamp: "1 hour ago",
      color: "amber",
    },
  ];

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Monitor your application performance and metrics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 bg-${stat.color}-100 rounded-full flex items-center justify-center`}
                >
                  <stat.icon className={`text-${stat.color}-600 w-5 h-5`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Performance Overview
          </h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <BarChart3 className="text-4xl text-gray-400 mb-4 w-16 h-16 mx-auto" />
              <p className="text-gray-500">Chart component would be rendered here</p>
              <p className="text-sm text-gray-400 mt-2">
                Integrate Chart.js or Recharts for data visualization
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 bg-${activity.color}-100 rounded-full flex items-center justify-center`}
                  >
                    <activity.icon
                      className={`text-${activity.color}-600 w-5 h-5`}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.user}
                    </p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {activity.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
