export type filterTypes = 'all' | 'active' | ' completed';

export interface Tasks {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}

export interface TaslState {
  total: number;
  active: number;
  completed: number;
  completionRate: number;
}
