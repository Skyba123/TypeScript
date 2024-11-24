import { BaseContent } from './BaseContent';

export type Versioned<T extends BaseContent> = T & {
  version: number;
  history: Array<{
    version: number;
    data: Partial<T>;
    updatedAt: Date;
  }>;
};