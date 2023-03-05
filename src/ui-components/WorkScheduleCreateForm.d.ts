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
export declare type WorkScheduleCreateFormInputValues = {
    date?: string[];
    time?: boolean[];
    physicianID?: string;
};
export declare type WorkScheduleCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    time?: ValidationFunction<boolean>;
    physicianID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkScheduleCreateFormOverridesProps = {
    WorkScheduleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<SwitchFieldProps>;
    physicianID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkScheduleCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkScheduleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkScheduleCreateFormInputValues) => WorkScheduleCreateFormInputValues;
    onSuccess?: (fields: WorkScheduleCreateFormInputValues) => void;
    onError?: (fields: WorkScheduleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkScheduleCreateFormInputValues) => WorkScheduleCreateFormInputValues;
    onValidate?: WorkScheduleCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkScheduleCreateForm(props: WorkScheduleCreateFormProps): React.ReactElement;
