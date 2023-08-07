// useDataValidation.ts
import { useState, useEffect } from 'react';
import { Condition, Data, OnMsgErroProps, ValidationResult } from './types';
import { handleMsgErro } from './messagesErrors';

export function useDataValidation(data: Data, conditions: Condition[]): ValidationResult {
    const [validationResult, setValidationResult] = useState<ValidationResult>({
        isValid: false,
        errors: [],
        onMsgValidateErro: () => null
    });


    const onMsgValidateErro = ({ key, message }: OnMsgErroProps) => {
        if (validationResult.errors.includes(`Invalid ${key}`)) {
          return handleMsgErro({ key, message });
        }
    
        return false
    }

    useEffect(() => {
        const errors: string[] = [];
        let isValid = true;

        conditions.forEach((condition) => {
            const { key, validations } = condition;
            const value = data[key];

            if (value?.length > 0) {
                validations.forEach((validation) => {
                    if (!validation(value, data)) {
                        isValid = false;
                        errors.push(`Invalid ${key}`);
                    }
                });
            }else {
                isValid = false
            }
        });

        setValidationResult({
            isValid,
            errors,
            onMsgValidateErro
        });
    }, [data, conditions]);

    return validationResult;
}
