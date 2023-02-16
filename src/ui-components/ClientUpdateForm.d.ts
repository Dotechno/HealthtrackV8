/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Client } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClientUpdateFormInputValues = {
    name?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    phone?: string;
    email?: string;
};
export declare type ClientUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientUpdateFormOverridesProps = {
    ClientUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    client?: Client;
    onSubmit?: (fields: ClientUpdateFormInputValues) => ClientUpdateFormInputValues;
    onSuccess?: (fields: ClientUpdateFormInputValues) => void;
    onError?: (fields: ClientUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientUpdateFormInputValues) => ClientUpdateFormInputValues;
    onValidate?: ClientUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientUpdateForm(props: ClientUpdateFormProps): React.ReactElement;
