/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PhysicianScheduleCreateFormInputValues = {};
export declare type PhysicianScheduleCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhysicianScheduleCreateFormOverridesProps = {
    PhysicianScheduleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type PhysicianScheduleCreateFormProps = React.PropsWithChildren<{
    overrides?: PhysicianScheduleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PhysicianScheduleCreateFormInputValues) => PhysicianScheduleCreateFormInputValues;
    onSuccess?: (fields: PhysicianScheduleCreateFormInputValues) => void;
    onError?: (fields: PhysicianScheduleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhysicianScheduleCreateFormInputValues) => PhysicianScheduleCreateFormInputValues;
    onValidate?: PhysicianScheduleCreateFormValidationValues;
} & React.CSSProperties>;
export default function PhysicianScheduleCreateForm(props: PhysicianScheduleCreateFormProps): React.ReactElement;
