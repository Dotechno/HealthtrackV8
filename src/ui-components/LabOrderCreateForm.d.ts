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
export declare type LabOrderCreateFormInputValues = {
    physicianName?: string;
    testType?: string;
    testDate?: string;
    technician?: string;
    testResult?: string;
};
export declare type LabOrderCreateFormValidationValues = {
    physicianName?: ValidationFunction<string>;
    testType?: ValidationFunction<string>;
    testDate?: ValidationFunction<string>;
    technician?: ValidationFunction<string>;
    testResult?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LabOrderCreateFormOverridesProps = {
    LabOrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicianName?: PrimitiveOverrideProps<TextFieldProps>;
    testType?: PrimitiveOverrideProps<TextFieldProps>;
    testDate?: PrimitiveOverrideProps<TextFieldProps>;
    technician?: PrimitiveOverrideProps<TextFieldProps>;
    testResult?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LabOrderCreateFormProps = React.PropsWithChildren<{
    overrides?: LabOrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LabOrderCreateFormInputValues) => LabOrderCreateFormInputValues;
    onSuccess?: (fields: LabOrderCreateFormInputValues) => void;
    onError?: (fields: LabOrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LabOrderCreateFormInputValues) => LabOrderCreateFormInputValues;
    onValidate?: LabOrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function LabOrderCreateForm(props: LabOrderCreateFormProps): React.ReactElement;
