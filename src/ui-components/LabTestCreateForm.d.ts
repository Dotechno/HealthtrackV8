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
export declare type LabTestCreateFormInputValues = {
    testTypeName?: string;
    normalRange?: string;
    abnormalRange?: string;
    description?: string;
};
export declare type LabTestCreateFormValidationValues = {
    testTypeName?: ValidationFunction<string>;
    normalRange?: ValidationFunction<string>;
    abnormalRange?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LabTestCreateFormOverridesProps = {
    LabTestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    testTypeName?: PrimitiveOverrideProps<TextFieldProps>;
    normalRange?: PrimitiveOverrideProps<TextFieldProps>;
    abnormalRange?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LabTestCreateFormProps = React.PropsWithChildren<{
    overrides?: LabTestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LabTestCreateFormInputValues) => LabTestCreateFormInputValues;
    onSuccess?: (fields: LabTestCreateFormInputValues) => void;
    onError?: (fields: LabTestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LabTestCreateFormInputValues) => LabTestCreateFormInputValues;
    onValidate?: LabTestCreateFormValidationValues;
} & React.CSSProperties>;
export default function LabTestCreateForm(props: LabTestCreateFormProps): React.ReactElement;
