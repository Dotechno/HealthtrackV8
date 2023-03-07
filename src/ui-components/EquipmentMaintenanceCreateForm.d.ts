/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipmentMaintenanceCreateFormInputValues = {
    type?: string;
    description?: string;
    status?: boolean;
    resolution?: string;
};
export declare type EquipmentMaintenanceCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    resolution?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentMaintenanceCreateFormOverridesProps = {
    EquipmentMaintenanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    resolution?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentMaintenanceCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentMaintenanceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipmentMaintenanceCreateFormInputValues) => EquipmentMaintenanceCreateFormInputValues;
    onSuccess?: (fields: EquipmentMaintenanceCreateFormInputValues) => void;
    onError?: (fields: EquipmentMaintenanceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentMaintenanceCreateFormInputValues) => EquipmentMaintenanceCreateFormInputValues;
    onValidate?: EquipmentMaintenanceCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentMaintenanceCreateForm(props: EquipmentMaintenanceCreateFormProps): React.ReactElement;
