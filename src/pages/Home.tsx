import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, Package, Clock, FileText, Shield, Users } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const features = [
  {
    name: 'Project Dashboard',
    description: 'Real-time tracking of multiple construction projects with progress monitoring and status updates.',
    icon: BarChart3,
  },
  {
    name: 'Material Management',
    description: 'Track inventory levels for cement, steel, bricks, and other materials with low-stock alerts.',
    icon: Package,
  },
  {
    name: 'Timeline & Milestones',
    description: 'Visualize project schedules, track milestone completion, and manage deadlines effectively.',
    icon: Clock,
  },
  {
    name: 'Daily Reports',
    description: 'Upload site photos and daily progress reports with notes, weather conditions, and team attendance.',
    icon: FileText,
  },
  {
    name: 'Role-Based Access',
    description: 'Customized views for Admins, Workers, and Clients with appropriate permissions and data access.',
    icon: Shield,
  },
  {
    name: 'Team Collaboration',
    description: 'Streamline communication between project managers, workers, and clients in one platform.',
    icon: Users,
  },
];

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-construction-black to-gray-900">
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-construction-black via-construction-black/80 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="bg-construction-yellow text-construction-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Professional Construction Management
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
              Build Smarter, Manage Better
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Streamline your construction projects with powerful tools for tracking progress, managing materials, 
              coordinating timelines, and collaborating with your team — all in one centralized platform.
            </p>
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <Link to="/dashboard">
                <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-construction-black font-bold px-8">
                  View Dashboard
                </Button>
              </Link>
              <Link to="/timeline">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-construction-black font-semibold">
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="border-l-4 border-construction-yellow pl-4">
                <div className="text-3xl font-bold text-white">4</div>
                <div className="text-sm text-gray-400">Active Projects</div>
              </div>
              <div className="border-l-4 border-construction-yellow pl-4">
                <div className="text-3xl font-bold text-white">217+</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div className="border-l-4 border-construction-yellow pl-4">
                <div className="text-3xl font-bold text-white">$28.5M</div>
                <div className="text-sm text-gray-400">Projects Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-construction-black sm:text-4xl">
              Everything You Need to Manage Construction Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive tools designed specifically for modern construction project management.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-construction-yellow transition-all hover:shadow-lg group"
              >
                <div className="mb-4 inline-flex p-3 bg-construction-yellow/10 rounded-lg group-hover:bg-construction-yellow transition-colors">
                  <feature.icon className="h-6 w-6 text-construction-black" />
                </div>
                <h3 className="text-xl font-bold text-construction-black mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-construction-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Construction Management?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join modern construction teams using BuildPro to deliver projects on time and within budget.
            </p>
            <div className="mt-10">
              <Link to="/dashboard">
                <Button size="lg" className="bg-construction-yellow hover:bg-construction-yellow/90 text-construction-black font-bold px-8">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
