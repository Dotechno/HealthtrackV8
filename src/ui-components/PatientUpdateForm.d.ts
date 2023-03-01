/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Patient } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatientUpdateFormInputValues = {
    patientName?: string;
    telelphoneNumber?: string;
    insuranceCarrierID?: string;
    dateOfBirth?: string;
    gender?: string;
    primaryCarePhysician?: string;
    listCurrentMedications?: string;
    listScheduledAppointments?: string;
};
export declare type PatientUpdateFormValidationValues = {
    patientName?: ValidationFunction<string>;
    telelphoneNumber?: ValidationFunction<string>;
    insuranceCarrierID?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    primaryCarePhysician?: ValidationFunction<string>;
    listCurrentMedications?: ValidationFunction<string>;
    listScheduledAppointments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientUpdateFormOverridesProps = {
    PatientUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    patientName?: PrimitiveOverrideProps<TextFieldProps>;
    telelphoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    insuranceCarrierID?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    primaryCarePhysician?: PrimitiveOverrideProps<TextFieldProps>;
    listCurrentMedications?: PrimitiveOverrideProps<TextFieldProps>;
    listScheduledAppointments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatientUpdateFormProps = React.PropsWithChildren<{
    overrides?: PatientUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    patient?: Patient;
    onSubmit?: (fields: PatientUpdateFormInputValues) => PatientUpdateFormInputValues;
    onSuccess?: (fields: PatientUpdateFormInputValues) => void;
    onError?: (fields: PatientUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientUpdateFormInputValues) => PatientUpdateFormInputValues;
    onValidate?: PatientUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PatientUpdateForm(props: PatientUpdateFormProps): React.ReactElement;