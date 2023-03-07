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
export declare type WorkScheduleInputValues = {
    Field0?: string;
};
export declare type WorkScheduleValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkScheduleOverridesProps = {
    WorkScheduleGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkScheduleProps = React.PropsWithChildren<{
    overrides?: WorkScheduleOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkScheduleInputValues) => WorkScheduleInputValues;
    onSuccess?: (fields: WorkScheduleInputValues) => void;
    onError?: (fields: WorkScheduleInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkScheduleInputValues) => WorkScheduleInputValues;
    onValidate?: WorkScheduleValidationValues;
} & React.CSSProperties>;
export default function WorkSchedule(props: WorkScheduleProps): React.ReactElement;
