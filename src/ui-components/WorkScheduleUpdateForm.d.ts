/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WorkSchedule } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkScheduleUpdateFormInputValues = {
    date?: string[];
    time?: boolean[];
    physicianID?: string;
};
export declare type WorkScheduleUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    time?: ValidationFunction<boolean>;
    physicianID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkScheduleUpdateFormOverridesProps = {
    WorkScheduleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<SwitchFieldProps>;
    physicianID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkScheduleUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkScheduleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workSchedule?: WorkSchedule;
    onSubmit?: (fields: WorkScheduleUpdateFormInputValues) => WorkScheduleUpdateFormInputValues;
    onSuccess?: (fields: WorkScheduleUpdateFormInputValues) => void;
    onError?: (fields: WorkScheduleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkScheduleUpdateFormInputValues) => WorkScheduleUpdateFormInputValues;
    onValidate?: WorkScheduleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkScheduleUpdateForm(props: WorkScheduleUpdateFormProps): React.ReactElement;
