/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EquipmentMaintenance } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipmentMaintenanceUpdateFormInputValues = {
    type?: string;
    description?: string;
    status?: boolean;
    resolution?: string;
};
export declare type EquipmentMaintenanceUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    resolution?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipmentMaintenanceUpdateFormOverridesProps = {
    EquipmentMaintenanceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    resolution?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipmentMaintenanceUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquipmentMaintenanceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipmentMaintenance?: EquipmentMaintenance;
    onSubmit?: (fields: EquipmentMaintenanceUpdateFormInputValues) => EquipmentMaintenanceUpdateFormInputValues;
    onSuccess?: (fields: EquipmentMaintenanceUpdateFormInputValues) => void;
    onError?: (fields: EquipmentMaintenanceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipmentMaintenanceUpdateFormInputValues) => EquipmentMaintenanceUpdateFormInputValues;
    onValidate?: EquipmentMaintenanceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquipmentMaintenanceUpdateForm(props: EquipmentMaintenanceUpdateFormProps): React.ReactElement;
