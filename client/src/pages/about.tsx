import { CheckCircle } from "lucide-react";

export default function About() {
  const techStack = [
    { name: "React", version: "18.2.0", color: "blue" },
    { name: "Vite", version: "4.4.0", color: "purple" },
    { name: "JavaScript ES6+", version: "Latest", color: "yellow" },
    { name: "Tailwind CSS", version: "3.3.0", color: "blue" },
  ];

  const features = [
    "Instant server start (< 100ms)",
    "Hot Module Replacement (HMR)",
    "Built-in TypeScript support",
    "Optimized production builds",
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About This Project
          </h1>
          <p className="text-xl text-gray-600">
            Learn more about the technologies and architecture behind this
            application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              React + Vite
            </h2>
            <p className="text-gray-600 mb-4">
              This application demonstrates the power of combining React's
              component-based architecture with Vite's lightning-fast build
              tool. The result is a development experience that's both
              productive and enjoyable.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Tech Stack
            </h3>
            <div className="space-y-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white rounded-lg"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 bg-${tech.color}-500 rounded-full mr-3`}
                    ></div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{tech.version}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
