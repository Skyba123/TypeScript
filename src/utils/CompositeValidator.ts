import { Validator, ValidationResult } from '../validators/Validator';

export const runValidators = <T>(
  validators: Validator<T>[],
  data: T
): ValidationResult => {
  const results = validators.map((validator) => validator.validate(data));
  const errors = results.map((result) => result.errors || []).reduce((acc, val) => acc.concat(val), []);
  return {
    isValid: errors.length === 0,
    errors,
  };
};