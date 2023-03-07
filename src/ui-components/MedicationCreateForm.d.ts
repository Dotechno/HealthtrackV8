/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicationCreateFormInputValues = {
    name?: string;
    usage?: string;
    dosage?: string;
    frequency?: string;
    sideEffects?: string;
    interactions?: string;
};
export declare type MedicationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    usage?: ValidationFunction<string>;
    dosage?: ValidationFunction<string>;
    frequency?: ValidationFunction<string>;
    sideEffects?: ValidationFunction<string>;
    interactions?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationCreateFormOverridesProps = {
    MedicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    usage?: PrimitiveOverrideProps<TextFieldProps>;
    dosage?: PrimitiveOverrideProps<TextFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    sideEffects?: PrimitiveOverrideProps<TextFieldProps>;
    interactions?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicationCreateFormInputValues) => MedicationCreateFormInputValues;
    onSuccess?: (fields: MedicationCreateFormInputValues) => void;
    onError?: (fields: MedicationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationCreateFormInputValues) => MedicationCreateFormInputValues;
    onValidate?: MedicationCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationCreateForm(props: MedicationCreateFormProps): React.ReactElement;
