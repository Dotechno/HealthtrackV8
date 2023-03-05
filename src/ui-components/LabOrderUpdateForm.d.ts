/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LabOrder } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LabOrderUpdateFormInputValues = {
    physicianName?: string;
    type?: string;
    date?: string;
    technician?: string;
    result?: string;
};
export declare type LabOrderUpdateFormValidationValues = {
    physicianName?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    technician?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LabOrderUpdateFormOverridesProps = {
    LabOrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicianName?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    technician?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LabOrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: LabOrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    labOrder?: LabOrder;
    onSubmit?: (fields: LabOrderUpdateFormInputValues) => LabOrderUpdateFormInputValues;
    onSuccess?: (fields: LabOrderUpdateFormInputValues) => void;
    onError?: (fields: LabOrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LabOrderUpdateFormInputValues) => LabOrderUpdateFormInputValues;
    onValidate?: LabOrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LabOrderUpdateForm(props: LabOrderUpdateFormProps): React.ReactElement;
