import { BaseContent } from '../models/BaseContent';

export type ContentOperations<T extends BaseContent> = {
  create: (content: T) => T;
  read: (id: string) => T | null;
  update: (id: string, updates: Partial<T>) => T | null;
  delete: (id: string) => boolean;
  list: (filters?: Partial<T>) => T[];
};