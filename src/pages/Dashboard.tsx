import { mockProjects } from '@/lib/mockData';
import { ProjectCard } from '@/components/features/ProjectCard';
import { TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Dashboard() {
  const totalBudget = mockProjects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = mockProjects.reduce((sum, p) => sum + p.spent, 0);
  const onTrackProjects = mockProjects.filter(p => p.status === 'On Track').length;
  const delayedProjects = mockProjects.filter(p => p.status === 'Delayed').length;

  const stats = [
    {
      name: 'Total Projects',
      value: mockProjects.length,
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'On Track',
      value: onTrackProjects,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Delayed',
      value: delayedProjects,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      name: 'Budget Used',
      value: `${((totalSpent / totalBudget) * 100).toFixed(1)}%`,
      icon: Clock,
      color: 'text-construction-black',
      bgColor: 'bg-construction-yellow/20',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-construction-black mb-2">
            Project Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Monitor all active construction projects and their progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((stat) => (
            <Card key={stat.name} className="border-l-4 border-construction-yellow construction-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {stat.name}
                    </p>
                    <p className="text-3xl font-bold text-construction-black">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold text-construction-black mb-6 flex items-center gap-2">
            <div className="h-1 w-12 bg-construction-yellow"></div>
            Active Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {mockProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-construction-yellow/10 border-l-4 border-construction-yellow rounded-lg">
          <h3 className="text-lg font-bold text-construction-black mb-2">
            📊 Dashboard Overview
          </h3>
          <p className="text-gray-700">
            This dashboard provides real-time insights into all construction projects. 
            Monitor progress percentages, budget utilization, team allocation, and project status at a glance. 
            Use filters and detailed views to drill down into specific project metrics.
          </p>
        </div>
      </div>
    </div>
  );
}
