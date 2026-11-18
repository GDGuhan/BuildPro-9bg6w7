export type UserRole = 'Admin' | 'Worker' | 'Client';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  progress: number;
  status: 'On Track' | 'Delayed' | 'Ahead' | 'Completed';
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  manager: string;
  team: number;
}

export interface Material {
  id: string;
  name: string;
  category: 'cement' | 'steel' | 'bricks' | 'other';
  quantity: number;
  unit: string;
  threshold: number;
  lastUpdated: string;
  projectId: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending';
  projectId: string;
}

export interface SiteReport {
  id: string;
  date: string;
  projectId: string;
  images: string[];
  notes: string;
  uploadedBy: string;
  weather: string;
  workersPresent: number;
}
