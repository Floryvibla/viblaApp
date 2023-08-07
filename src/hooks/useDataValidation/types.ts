import { conditions } from "./dataValidationConditions";

// types.ts
export type Condition = {
    key: keyof Data;
    validations: ((value: string, data: Data) => boolean)[];
};
  
export type Data = {
    [key: string]: string;
};

export type ValidationResult = {
    isValid: boolean;
    errors: string[];
    onMsgValidateErro?: ({ key, message }: OnMsgErroProps) => void;
};
  
export type ConditionsValidationProps = keyof typeof conditions;

export type OnMsgErroProps = {
    key: ConditionsValidationProps,
    message?: string;
}