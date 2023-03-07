/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicalEncounterCreateFormInputValues = {
    encounterDateTime?: string;
    practitionerTypeSeen?: string;
    patientComplaints?: string;
    vitalSigns?: string;
    practionerNotes?: string;
    labOrders?: string;
    pharmacyOrders?: string;
    diagnosis?: string;
    treatmentPlan?: string;
    referralToSpecialists?: string;
    recommendedFollowUp?: string;
    dataTimeEncounterSubmitted?: string;
    employeeIDWhoSubmitted?: number;
};
export declare type MedicalEncounterCreateFormValidationValues = {
    encounterDateTime?: ValidationFunction<string>;
    practitionerTypeSeen?: ValidationFunction<string>;
    patientComplaints?: ValidationFunction<string>;
    vitalSigns?: ValidationFunction<string>;
    practionerNotes?: ValidationFunction<string>;
    labOrders?: ValidationFunction<string>;
    pharmacyOrders?: ValidationFunction<string>;
    diagnosis?: ValidationFunction<string>;
    treatmentPlan?: ValidationFunction<string>;
    referralToSpecialists?: ValidationFunction<string>;
    recommendedFollowUp?: ValidationFunction<string>;
    dataTimeEncounterSubmitted?: ValidationFunction<string>;
    employeeIDWhoSubmitted?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicalEncounterCreateFormOverridesProps = {
    MedicalEncounterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    encounterDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    practitionerTypeSeen?: PrimitiveOverrideProps<SelectFieldProps>;
    patientComplaints?: PrimitiveOverrideProps<TextFieldProps>;
    vitalSigns?: PrimitiveOverrideProps<TextFieldProps>;
    practionerNotes?: PrimitiveOverrideProps<TextFieldProps>;
    labOrders?: PrimitiveOverrideProps<TextFieldProps>;
    pharmacyOrders?: PrimitiveOverrideProps<TextFieldProps>;
    diagnosis?: PrimitiveOverrideProps<TextFieldProps>;
    treatmentPlan?: PrimitiveOverrideProps<TextFieldProps>;
    referralToSpecialists?: PrimitiveOverrideProps<TextFieldProps>;
    recommendedFollowUp?: PrimitiveOverrideProps<TextFieldProps>;
    dataTimeEncounterSubmitted?: PrimitiveOverrideProps<TextFieldProps>;
    employeeIDWhoSubmitted?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicalEncounterCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicalEncounterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicalEncounterCreateFormInputValues) => MedicalEncounterCreateFormInputValues;
    onSuccess?: (fields: MedicalEncounterCreateFormInputValues) => void;
    onError?: (fields: MedicalEncounterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicalEncounterCreateFormInputValues) => MedicalEncounterCreateFormInputValues;
    onValidate?: MedicalEncounterCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicalEncounterCreateForm(props: MedicalEncounterCreateFormProps): React.ReactElement;
