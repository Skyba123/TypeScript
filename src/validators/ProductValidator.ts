import { Validator, ValidationResult } from './Validator'; 
import { Product } from '../models/Product'; 

//Реалізація валідатора для продуктів
export const productValidator: Validator<Product> = {
  validate: (data: Product): ValidationResult => {
    const errors: string[] = [];
    if (!data.name || data.name.length < 3) {
      errors.push('Name must be at least 3 characters long.');
    }
    if (data.price <= 0) {
      errors.push('Price must be greater than 0.');
    }
    return { isValid: errors.length === 0, errors };
  },
};