/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PhysicianSchedule } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PhysicianScheduleUpdateFormInputValues = {};
export declare type PhysicianScheduleUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PhysicianScheduleUpdateFormOverridesProps = {
    PhysicianScheduleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type PhysicianScheduleUpdateFormProps = React.PropsWithChildren<{
    overrides?: PhysicianScheduleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    physicianSchedule?: PhysicianSchedule;
    onSubmit?: (fields: PhysicianScheduleUpdateFormInputValues) => PhysicianScheduleUpdateFormInputValues;
    onSuccess?: (fields: PhysicianScheduleUpdateFormInputValues) => void;
    onError?: (fields: PhysicianScheduleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PhysicianScheduleUpdateFormInputValues) => PhysicianScheduleUpdateFormInputValues;
    onValidate?: PhysicianScheduleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PhysicianScheduleUpdateForm(props: PhysicianScheduleUpdateFormProps): React.ReactElement;
