import { Role } from '../types/Role';
import { BaseContent } from '../models/BaseContent';
import { ContentOperations } from './ContentOperations';
export type AccessControl<T extends BaseContent> = {
    [role in Role]: {
      [operation in keyof ContentOperations<T>]?: boolean;
    };
  };