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
export declare type RetrievePrescriptionInputValues = {
    PrescriptionID?: string;
};
export declare type RetrievePrescriptionValidationValues = {
    PrescriptionID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RetrievePrescriptionOverridesProps = {
    RetrievePrescriptionGrid?: PrimitiveOverrideProps<GridProps>;
    PrescriptionID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RetrievePrescriptionProps = React.PropsWithChildren<{
    overrides?: RetrievePrescriptionOverridesProps | undefined | null;
} & {
    onSubmit: (fields: RetrievePrescriptionInputValues) => void;
    onChange?: (fields: RetrievePrescriptionInputValues) => RetrievePrescriptionInputValues;
    onValidate?: RetrievePrescriptionValidationValues;
} & React.CSSProperties>;
export default function RetrievePrescription(props: RetrievePrescriptionProps): React.ReactElement;
