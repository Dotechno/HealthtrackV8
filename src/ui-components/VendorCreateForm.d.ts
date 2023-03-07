/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VendorCreateFormInputValues = {
    name?: string;
    address?: string;
    preferred?: boolean;
};
export declare type VendorCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    preferred?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VendorCreateFormOverridesProps = {
    VendorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    preferred?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type VendorCreateFormProps = React.PropsWithChildren<{
    overrides?: VendorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VendorCreateFormInputValues) => VendorCreateFormInputValues;
    onSuccess?: (fields: VendorCreateFormInputValues) => void;
    onError?: (fields: VendorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VendorCreateFormInputValues) => VendorCreateFormInputValues;
    onValidate?: VendorCreateFormValidationValues;
} & React.CSSProperties>;
export default function VendorCreateForm(props: VendorCreateFormProps): React.ReactElement;
