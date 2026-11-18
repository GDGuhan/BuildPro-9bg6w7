import { useState } from 'react';
import { mockMaterials, mockProjects } from '@/lib/mockData';
import { MaterialCard } from '@/components/features/MaterialCard';
import { Package, AlertTriangle, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Materials() {
  const [selectedProject, setSelectedProject] = useState<string>('all');

  const filteredMaterials = selectedProject === 'all'
    ? mockMaterials
    : mockMaterials.filter(m => m.projectId === selectedProject);

  const lowStockCount = filteredMaterials.filter(
    m => m.quantity < m.threshold
  ).length;

  const totalItems = filteredMaterials.length;

  const stats = [
    {
      name: 'Total Materials',
      value: totalItems,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Low Stock Items',
      value: lowStockCount,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      name: 'Categories',
      value: new Set(filteredMaterials.map(m => m.category)).size,
      icon: TrendingDown,
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
            Material Inventory
          </h1>
          <p className="text-lg text-gray-600">
            Track construction materials across all projects
          </p>
        </div>

        {/* Project Filter */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Filter by Project
          </label>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-full sm:w-64 border-construction-yellow">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              {mockProjects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
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

        {/* Materials Grid */}
        <div>
          <h2 className="text-2xl font-bold text-construction-black mb-6 flex items-center gap-2">
            <div className="h-1 w-12 bg-construction-yellow"></div>
            Material Stock Levels
          </h2>

          {lowStockCount > 0 && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <p className="font-semibold text-red-800">
                  {lowStockCount} material{lowStockCount > 1 ? 's' : ''} below threshold level
                </p>
              </div>
              <p className="text-sm text-red-700 mt-1">
                Consider placing purchase orders to avoid project delays
              </p>
            </div>
          )}

          {filteredMaterials.length === 0 ? (
            <Card className="p-12 text-center">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600">No materials found for this project</p>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-12 p-6 bg-construction-yellow/10 border-l-4 border-construction-yellow rounded-lg">
          <h3 className="text-lg font-bold text-construction-black mb-2">
            📦 Material Tracking Guide
          </h3>
          <div className="space-y-2 text-gray-700">
            <p>• <strong>Current Stock:</strong> Real-time inventory levels updated daily</p>
            <p>• <strong>Threshold:</strong> Minimum quantity before reordering is required</p>
            <p>• <strong>Low Stock Alert:</strong> Automatically flagged when below threshold</p>
            <p>• <strong>Categories:</strong> Materials organized by type (Cement, Steel, Bricks, Other)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
