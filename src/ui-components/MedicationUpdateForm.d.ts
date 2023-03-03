/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Medication } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicationUpdateFormInputValues = {
    name?: string;
    useOfMedication?: string;
    recommendedDosage?: string;
    recommendedFrequencyOfUse?: string;
    potentialSideEffect?: string;
    drugThatMayReactAdversely?: string;
};
export declare type MedicationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    useOfMedication?: ValidationFunction<string>;
    recommendedDosage?: ValidationFunction<string>;
    recommendedFrequencyOfUse?: ValidationFunction<string>;
    potentialSideEffect?: ValidationFunction<string>;
    drugThatMayReactAdversely?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationUpdateFormOverridesProps = {
    MedicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    useOfMedication?: PrimitiveOverrideProps<TextFieldProps>;
    recommendedDosage?: PrimitiveOverrideProps<TextFieldProps>;
    recommendedFrequencyOfUse?: PrimitiveOverrideProps<TextFieldProps>;
    potentialSideEffect?: PrimitiveOverrideProps<TextFieldProps>;
    drugThatMayReactAdversely?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationUpdateFormProps = React.PropsWithChildren<{
    overrides?: MedicationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medication?: Medication;
    onSubmit?: (fields: MedicationUpdateFormInputValues) => MedicationUpdateFormInputValues;
    onSuccess?: (fields: MedicationUpdateFormInputValues) => void;
    onError?: (fields: MedicationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationUpdateFormInputValues) => MedicationUpdateFormInputValues;
    onValidate?: MedicationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationUpdateForm(props: MedicationUpdateFormProps): React.ReactElement;
