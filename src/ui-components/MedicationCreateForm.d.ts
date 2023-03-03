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
    useOfMedication?: string;
    recommendedDosage?: string;
    recommendedFrequencyOfUse?: string;
    potentialSideEffect?: string;
    drugThatMayReactAdversely?: string;
};
export declare type MedicationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    useOfMedication?: ValidationFunction<string>;
    recommendedDosage?: ValidationFunction<string>;
    recommendedFrequencyOfUse?: ValidationFunction<string>;
    potentialSideEffect?: ValidationFunction<string>;
    drugThatMayReactAdversely?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationCreateFormOverridesProps = {
    MedicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    useOfMedication?: PrimitiveOverrideProps<TextFieldProps>;
    recommendedDosage?: PrimitiveOverrideProps<TextFieldProps>;
    recommendedFrequencyOfUse?: PrimitiveOverrideProps<TextFieldProps>;
    potentialSideEffect?: PrimitiveOverrideProps<TextFieldProps>;
    drugThatMayReactAdversely?: PrimitiveOverrideProps<TextFieldProps>;
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
