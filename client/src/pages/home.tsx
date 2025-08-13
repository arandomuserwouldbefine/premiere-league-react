import {
  Zap,
  ArrowRight,
  Github,
  Rocket,
  Puzzle,
  Smartphone,
  Shield,
  Minimize2,
  GitBranch,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    {
      icon: Rocket,
      title: "Fast Development",
      description:
        "Instant server start and lightning-fast HMR for immediate feedback during development.",
      color: "blue",
    },
    {
      icon: Puzzle,
      title: "Component Architecture",
      description:
        "Modular, reusable components with proper state management and lifecycle handling.",
      color: "emerald",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Built with mobile-first approach using Tailwind CSS for consistent cross-device experience.",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Type Safety",
      description:
        "Optional TypeScript support with ESLint configuration for code quality and consistency.",
      color: "amber",
    },
    {
      icon: Minimize2,
      title: "Optimized Build",
      description:
        "Production-ready builds with code splitting, tree shaking, and asset optimization.",
      color: "red",
    },
    {
      icon: GitBranch,
      title: "Modern Tooling",
      description:
        "Latest JavaScript features, module bundling, and development tools for optimal workflow.",
      color: "indigo",
    },
  ];

  const codeFeatures = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: CheckCircle, text: "Zero Config" },
    { icon: Smartphone, text: "Responsive" },
    { icon: GitBranch, text: "Modern JS" },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build faster with{" "}
                <span className="text-blue-600">React</span> +{" "}
                <span className="text-emerald-600">Vite</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                A modern React application powered by Vite's lightning-fast
                build tool. Experience instant hot module replacement and
                optimized production builds.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-gray-300 hover:border-gray-400"
                >
                  <Github className="mr-2 w-5 h-5" />
                  View on GitHub
                </Button>
              </div>

              {/* Features Grid */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                {codeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <feature.icon className="text-blue-600 w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gray-800 px-6 py-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-400 font-mono">
                    App.jsx
                  </div>
                </div>
                <div className="p-6 font-mono text-sm text-gray-300 overflow-x-auto">
                  <div className="text-purple-400">import</div>{" "}
                  <span className="text-white">React</span>{" "}
                  <div className="text-purple-400 inline">from</div>{" "}
                  <span className="text-green-400">'react'</span>
                  <br />
                  <div className="text-purple-400">import</div>{" "}
                  <span className="text-white">
                    {"{ BrowserRouter, Routes, Route }"}
                  </span>
                  <br />
                  <div className="text-purple-400 ml-8">from</div>{" "}
                  <span className="text-green-400">'react-router-dom'</span>
                  <br />
                  <br />
                  <div className="text-purple-400">function</div>{" "}
                  <span className="text-yellow-300">App</span>
                  <span className="text-white">() {"{"}</span>
                  <br />
                  <span className="ml-4 text-purple-400">return</span>{" "}
                  <span className="text-white">(</span>
                  <br />
                  <span className="ml-8 text-blue-400">
                    &lt;BrowserRouter&gt;
                  </span>
                  <br />
                  <span className="ml-12 text-blue-400">&lt;Routes&gt;</span>
                  <br />
                  <span className="ml-16 text-blue-400">&lt;Route</span>{" "}
                  <span className="text-green-400">path="/"</span>{" "}
                  <span className="text-blue-400">/&gt;</span>
                  <br />
                  <span className="ml-12 text-blue-400">&lt;/Routes&gt;</span>
                  <br />
                  <span className="ml-8 text-blue-400">
                    &lt;/BrowserRouter&gt;
                  </span>
                  <br />
                  <span className="ml-4 text-white">)</span>
                  <br />
                  <span className="text-white">{"}"}</span>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Build Time
                    </div>
                    <div className="text-xs text-gray-500">~50ms average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to build modern web apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with a complete development environment featuring the
              latest tools and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-6`}
                >
                  <feature.icon
                    className={`text-${feature.color}-600 w-6 h-6`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div
                  className={`inline-flex items-center text-${feature.color}-600 font-medium text-sm`}
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
