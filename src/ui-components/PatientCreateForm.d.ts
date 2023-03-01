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
export declare type PatientCreateFormInputValues = {
    patientName?: string;
    telephoneNumber?: string;
    insuranceCarrierID?: string;
    dateOfBirth?: string;
    gender?: string;
    primaryCarePhysician?: string;
    listCurrentMedications?: string;
    listScheduledAppointments?: string;
};
export declare type PatientCreateFormValidationValues = {
    patientName?: ValidationFunction<string>;
    telephoneNumber?: ValidationFunction<string>;
    insuranceCarrierID?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    primaryCarePhysician?: ValidationFunction<string>;
    listCurrentMedications?: ValidationFunction<string>;
    listScheduledAppointments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientCreateFormOverridesProps = {
    PatientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    patientName?: PrimitiveOverrideProps<TextFieldProps>;
    telephoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    insuranceCarrierID?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    primaryCarePhysician?: PrimitiveOverrideProps<TextFieldProps>;
    listCurrentMedications?: PrimitiveOverrideProps<TextFieldProps>;
    listScheduledAppointments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatientCreateFormProps = React.PropsWithChildren<{
    overrides?: PatientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PatientCreateFormInputValues) => PatientCreateFormInputValues;
    onSuccess?: (fields: PatientCreateFormInputValues) => void;
    onError?: (fields: PatientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientCreateFormInputValues) => PatientCreateFormInputValues;
    onValidate?: PatientCreateFormValidationValues;
} & React.CSSProperties>;
export default function PatientCreateForm(props: PatientCreateFormProps): React.ReactElement;
