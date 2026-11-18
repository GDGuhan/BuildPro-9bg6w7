import { mockMilestones, mockProjects } from '@/lib/mockData';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    label: 'Completed',
  },
  'in-progress': {
    icon: Clock,
    color: 'text-construction-yellow',
    bgColor: 'bg-construction-yellow/10',
    borderColor: 'border-construction-yellow',
    label: 'In Progress',
  },
  pending: {
    icon: Circle,
    color: 'text-gray-400',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    label: 'Pending',
  },
};

export function Timeline() {
  const project = mockProjects[0]; // Using first project for demo

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-construction-black mb-2">
            Project Timeline
          </h1>
          <p className="text-lg text-gray-600">
            Track milestones and deliverables for {project.name}
          </p>
        </div>

        {/* Project Overview Card */}
        <Card className="mb-12 border-l-4 border-construction-yellow construction-shadow-lg">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Project</p>
                <p className="text-xl font-bold text-construction-black">{project.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Timeline</p>
                <p className="text-lg font-semibold">
                  {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">Overall Progress</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-construction-yellow"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-2xl font-bold text-construction-yellow">{project.progress}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-bold text-construction-black mb-6 flex items-center gap-2">
            <div className="h-1 w-12 bg-construction-yellow"></div>
            Project Milestones
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300 hidden md:block" />

            {/* Milestones */}
            <div className="space-y-8">
              {mockMilestones.map((milestone, index) => {
                const config = statusConfig[milestone.status];
                const Icon = config.icon;

                return (
                  <div key={milestone.id} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 hidden md:block">
                      <div className={`w-5 h-5 rounded-full ${config.bgColor} border-4 ${config.borderColor}`} />
                    </div>

                    {/* Content Card */}
                    <Card className={`md:ml-20 border-l-4 ${config.borderColor} hover:shadow-lg transition-shadow`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`${config.bgColor} p-2 rounded-lg`}>
                                <Icon className={`h-5 w-5 ${config.color}`} />
                              </div>
                              <h3 className="text-xl font-bold text-construction-black">
                                {milestone.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                          <Badge className={`${config.bgColor} ${config.color} border-0`}>
                            {config.label}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">
                            Target Date: {new Date(milestone.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">
                {mockMilestones.filter(m => m.status === 'completed').length}
              </p>
              <p className="text-sm font-medium text-gray-600">Completed Milestones</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-construction-yellow">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-construction-yellow mb-2">
                {mockMilestones.filter(m => m.status === 'in-progress').length}
              </p>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-gray-400">
            <CardContent className="p-6 text-center">
              <p className="text-4xl font-bold text-gray-600 mb-2">
                {mockMilestones.filter(m => m.status === 'pending').length}
              </p>
              <p className="text-sm font-medium text-gray-600">Pending</p>
            </CardContent>
          </Card>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-construction-yellow/10 border-l-4 border-construction-yellow rounded-lg">
          <h3 className="text-lg font-bold text-construction-black mb-2">
            📅 Timeline Management
          </h3>
          <p className="text-gray-700">
            This timeline view shows all major project milestones in chronological order. 
            Track completion status, target dates, and dependencies to ensure your project stays on schedule. 
            Each milestone includes detailed descriptions and progress indicators.
          </p>
        </div>
      </div>
    </div>
  );
}
