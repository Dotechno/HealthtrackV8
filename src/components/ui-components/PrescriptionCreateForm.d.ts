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
export declare type PrescriptionCreateFormInputValues = {
    name?: string;
    dosage?: string;
    description?: string;
};
export declare type PrescriptionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    dosage?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrescriptionCreateFormOverridesProps = {
    PrescriptionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    dosage?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrescriptionCreateFormProps = React.PropsWithChildren<{
    overrides?: PrescriptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrescriptionCreateFormInputValues) => PrescriptionCreateFormInputValues;
    onSuccess?: (fields: PrescriptionCreateFormInputValues) => void;
    onError?: (fields: PrescriptionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrescriptionCreateFormInputValues) => PrescriptionCreateFormInputValues;
    onValidate?: PrescriptionCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrescriptionCreateForm(props: PrescriptionCreateFormProps): React.ReactElement;
