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
export declare type PrescriptionCreateFormInputValues = {
    physicianName?: string;
    prescribedMedication?: string;
    medicineDosage?: string;
    frequencyOfMedication?: string;
    datePrescriptionFilled?: string;
    pharmacistWhoFilledPrescription?: string;
};
export declare type PrescriptionCreateFormValidationValues = {
    physicianName?: ValidationFunction<string>;
    prescribedMedication?: ValidationFunction<string>;
    medicineDosage?: ValidationFunction<string>;
    frequencyOfMedication?: ValidationFunction<string>;
    datePrescriptionFilled?: ValidationFunction<string>;
    pharmacistWhoFilledPrescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrescriptionCreateFormOverridesProps = {
    PrescriptionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicianName?: PrimitiveOverrideProps<TextFieldProps>;
    prescribedMedication?: PrimitiveOverrideProps<TextFieldProps>;
    medicineDosage?: PrimitiveOverrideProps<TextFieldProps>;
    frequencyOfMedication?: PrimitiveOverrideProps<TextFieldProps>;
    datePrescriptionFilled?: PrimitiveOverrideProps<TextFieldProps>;
    pharmacistWhoFilledPrescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrescriptionCreateFormProps = React.PropsWithChildren<{
    overrides?: PrescriptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrescriptionCreateFormInputValues) => PrescriptionCreateFormInputValues;
    onSuccess?: (fields: PrescriptionCreateFormInputValues) => void;
    onError?: (fields: PrescriptionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrescriptionCreateFormInputValues) => PrescriptionCreateFormInputValues;
    onValidate?: PrescriptionCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrescriptionCreateForm(props: PrescriptionCreateFormProps): React.ReactElement;
