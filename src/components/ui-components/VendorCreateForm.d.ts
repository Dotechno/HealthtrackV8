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
    vendorName?: string;
    vendorAddress?: string;
    typeOfEquipment?: string;
    preferredVendor?: boolean;
};
export declare type VendorCreateFormValidationValues = {
    vendorName?: ValidationFunction<string>;
    vendorAddress?: ValidationFunction<string>;
    typeOfEquipment?: ValidationFunction<string>;
    preferredVendor?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VendorCreateFormOverridesProps = {
    VendorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    vendorName?: PrimitiveOverrideProps<TextFieldProps>;
    vendorAddress?: PrimitiveOverrideProps<TextFieldProps>;
    typeOfEquipment?: PrimitiveOverrideProps<TextFieldProps>;
    preferredVendor?: PrimitiveOverrideProps<SwitchFieldProps>;
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
