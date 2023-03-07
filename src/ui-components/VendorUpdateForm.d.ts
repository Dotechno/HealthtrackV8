/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Vendor } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VendorUpdateFormInputValues = {
    name?: string;
    address?: string;
    preferred?: boolean;
};
export declare type VendorUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    preferred?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VendorUpdateFormOverridesProps = {
    VendorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    preferred?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type VendorUpdateFormProps = React.PropsWithChildren<{
    overrides?: VendorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vendor?: Vendor;
    onSubmit?: (fields: VendorUpdateFormInputValues) => VendorUpdateFormInputValues;
    onSuccess?: (fields: VendorUpdateFormInputValues) => void;
    onError?: (fields: VendorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VendorUpdateFormInputValues) => VendorUpdateFormInputValues;
    onValidate?: VendorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VendorUpdateForm(props: VendorUpdateFormProps): React.ReactElement;
