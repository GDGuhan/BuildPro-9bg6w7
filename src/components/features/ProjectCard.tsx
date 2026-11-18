import { Project } from '@/types';
import { MapPin, Users, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  'On Track': 'bg-green-500',
  'Delayed': 'bg-red-500',
  'Ahead': 'bg-blue-500',
  'Completed': 'bg-gray-500',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const budgetPercentage = (project.spent / project.budget) * 100;

  return (
    <Card className="hover:shadow-lg transition-shadow construction-shadow border-l-4 border-construction-yellow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
          <Badge className={`${statusColors[project.status]} text-white`}>
            {project.status}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <MapPin className="h-4 w-4" />
          <span>{project.location}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-2xl font-bold text-construction-yellow">
              {project.progress}%
            </span>
          </div>
          <Progress value={project.progress} className="h-3" />
        </div>

        {/* Budget */}
        <div className="bg-muted p-3 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4" />
              <span className="font-medium">Budget</span>
            </div>
            <span className="text-sm font-semibold">
              ${(project.spent / 1000000).toFixed(1)}M / ${(project.budget / 1000000).toFixed(1)}M
            </span>
          </div>
          <Progress value={budgetPercentage} className="h-2" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{project.team} Team Members</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Due {new Date(project.endDate).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-sm text-muted-foreground">
            Manager: <span className="font-medium text-foreground">{project.manager}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
