// dataValidationConditions.ts
import { Condition, ConditionsValidationProps } from './types';

export const conditions = {
  name: {
    key: 'name',
    validations: [
      (value) => value.trim().split(' ').length >= 2,
    ],
  },
  identifier: {
    key: 'identifier',
    validations: [
      (value) => value.length >= 3 || /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
    ],
  },
  username: {
    key: 'username',
    validations: [
      (value) => value.length > 3,
    ],
  },
  password: {
    key: 'password',
    validations: [
      (value) => value.length >= 6,
    ],
  },
  email: {
    key: 'email',
    validations: [
      (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
    ],
  },
  confirmPass: {
    key: 'confirmPass',
    validations: [
      (value, data) => value === data.password,
    ],
  },
};



export const handleDataValidationConditions = (fields: ConditionsValidationProps[]) => {
  const selectedConditions: Condition[] = [];

  for (const field of fields) {
    if (conditions.hasOwnProperty(field)) {
      selectedConditions.push(conditions[field]);
    }
  }

  return selectedConditions
}
