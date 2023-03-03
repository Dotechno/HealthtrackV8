/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LabTest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LabTestUpdateFormInputValues = {
    typeName?: string;
    rangeOfNotNormalResults?: string;
    laborderID?: string;
    rangeOfNormalResults?: string;
};
export declare type LabTestUpdateFormValidationValues = {
    typeName?: ValidationFunction<string>;
    rangeOfNotNormalResults?: ValidationFunction<string>;
    laborderID?: ValidationFunction<string>;
    rangeOfNormalResults?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LabTestUpdateFormOverridesProps = {
    LabTestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    typeName?: PrimitiveOverrideProps<TextFieldProps>;
    rangeOfNotNormalResults?: PrimitiveOverrideProps<TextFieldProps>;
    laborderID?: PrimitiveOverrideProps<TextFieldProps>;
    rangeOfNormalResults?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LabTestUpdateFormProps = React.PropsWithChildren<{
    overrides?: LabTestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    labTest?: LabTest;
    onSubmit?: (fields: LabTestUpdateFormInputValues) => LabTestUpdateFormInputValues;
    onSuccess?: (fields: LabTestUpdateFormInputValues) => void;
    onError?: (fields: LabTestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LabTestUpdateFormInputValues) => LabTestUpdateFormInputValues;
    onValidate?: LabTestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LabTestUpdateForm(props: LabTestUpdateFormProps): React.ReactElement;
