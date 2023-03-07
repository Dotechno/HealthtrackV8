/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Prescription } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrescriptionUpdateFormInputValues = {
    physicianName?: string;
    prescribedMedication?: string;
    medicineDosage?: string;
    frequencyOfMedication?: string;
    datePrescriptionFilled?: string;
    pharmacistWhoFilledPrescription?: string;
};
export declare type PrescriptionUpdateFormValidationValues = {
    physicianName?: ValidationFunction<string>;
    prescribedMedication?: ValidationFunction<string>;
    medicineDosage?: ValidationFunction<string>;
    frequencyOfMedication?: ValidationFunction<string>;
    datePrescriptionFilled?: ValidationFunction<string>;
    pharmacistWhoFilledPrescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrescriptionUpdateFormOverridesProps = {
    PrescriptionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicianName?: PrimitiveOverrideProps<TextFieldProps>;
    prescribedMedication?: PrimitiveOverrideProps<TextFieldProps>;
    medicineDosage?: PrimitiveOverrideProps<TextFieldProps>;
    frequencyOfMedication?: PrimitiveOverrideProps<TextFieldProps>;
    datePrescriptionFilled?: PrimitiveOverrideProps<TextFieldProps>;
    pharmacistWhoFilledPrescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrescriptionUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrescriptionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    prescription?: Prescription;
    onSubmit?: (fields: PrescriptionUpdateFormInputValues) => PrescriptionUpdateFormInputValues;
    onSuccess?: (fields: PrescriptionUpdateFormInputValues) => void;
    onError?: (fields: PrescriptionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrescriptionUpdateFormInputValues) => PrescriptionUpdateFormInputValues;
    onValidate?: PrescriptionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrescriptionUpdateForm(props: PrescriptionUpdateFormProps): React.ReactElement;
