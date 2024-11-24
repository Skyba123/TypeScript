import { Validator, ValidationResult } from './Validator'; 
import { Article } from '../models/Article'; 

export const articleValidator: Validator<Article> = {
  validate: (data: Article): ValidationResult => {
    const errors: string[] = [];
    if (!data.title || data.title.length < 3) {
      errors.push('Title must be at least 3 characters long.');
    }
    if (!data.content) {
      errors.push('Content is required.');
    }
    return { isValid: errors.length === 0, errors };
  },
};