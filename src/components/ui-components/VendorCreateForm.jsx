/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Vendor } from "../../util/models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VendorCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    vendorName: "",
    vendorAddress: "",
    typeOfEquipment: "",
    preferredVendor: false,
  };
  const [vendorName, setVendorName] = React.useState(initialValues.vendorName);
  const [vendorAddress, setVendorAddress] = React.useState(
    initialValues.vendorAddress
  );
  const [typeOfEquipment, setTypeOfEquipment] = React.useState(
    initialValues.typeOfEquipment
  );
  const [preferredVendor, setPreferredVendor] = React.useState(
    initialValues.preferredVendor
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setVendorName(initialValues.vendorName);
    setVendorAddress(initialValues.vendorAddress);
    setTypeOfEquipment(initialValues.typeOfEquipment);
    setPreferredVendor(initialValues.preferredVendor);
    setErrors({});
  };
  const validations = {
    vendorName: [],
    vendorAddress: [],
    typeOfEquipment: [],
    preferredVendor: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          vendorName,
          vendorAddress,
          typeOfEquipment,
          preferredVendor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Vendor(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VendorCreateForm")}
      {...rest}
    >
      <TextField
        label="Vendor name"
        isRequired={false}
        isReadOnly={false}
        value={vendorName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendorName: value,
              vendorAddress,
              typeOfEquipment,
              preferredVendor,
            };
            const result = onChange(modelFields);
            value = result?.vendorName ?? value;
          }
          if (errors.vendorName?.hasError) {
            runValidationTasks("vendorName", value);
          }
          setVendorName(value);
        }}
        onBlur={() => runValidationTasks("vendorName", vendorName)}
        errorMessage={errors.vendorName?.errorMessage}
        hasError={errors.vendorName?.hasError}
        {...getOverrideProps(overrides, "vendorName")}
      ></TextField>
      <TextField
        label="Vendor address"
        isRequired={false}
        isReadOnly={false}
        value={vendorAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendorName,
              vendorAddress: value,
              typeOfEquipment,
              preferredVendor,
            };
            const result = onChange(modelFields);
            value = result?.vendorAddress ?? value;
          }
          if (errors.vendorAddress?.hasError) {
            runValidationTasks("vendorAddress", value);
          }
          setVendorAddress(value);
        }}
        onBlur={() => runValidationTasks("vendorAddress", vendorAddress)}
        errorMessage={errors.vendorAddress?.errorMessage}
        hasError={errors.vendorAddress?.hasError}
        {...getOverrideProps(overrides, "vendorAddress")}
      ></TextField>
      <TextField
        label="Type of equipment"
        isRequired={false}
        isReadOnly={false}
        value={typeOfEquipment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendorName,
              vendorAddress,
              typeOfEquipment: value,
              preferredVendor,
            };
            const result = onChange(modelFields);
            value = result?.typeOfEquipment ?? value;
          }
          if (errors.typeOfEquipment?.hasError) {
            runValidationTasks("typeOfEquipment", value);
          }
          setTypeOfEquipment(value);
        }}
        onBlur={() => runValidationTasks("typeOfEquipment", typeOfEquipment)}
        errorMessage={errors.typeOfEquipment?.errorMessage}
        hasError={errors.typeOfEquipment?.hasError}
        {...getOverrideProps(overrides, "typeOfEquipment")}
      ></TextField>
      <SwitchField
        label="Preferred vendor"
        defaultChecked={false}
        isDisabled={false}
        isChecked={preferredVendor}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              vendorName,
              vendorAddress,
              typeOfEquipment,
              preferredVendor: value,
            };
            const result = onChange(modelFields);
            value = result?.preferredVendor ?? value;
          }
          if (errors.preferredVendor?.hasError) {
            runValidationTasks("preferredVendor", value);
          }
          setPreferredVendor(value);
        }}
        onBlur={() => runValidationTasks("preferredVendor", preferredVendor)}
        errorMessage={errors.preferredVendor?.errorMessage}
        hasError={errors.preferredVendor?.hasError}
        {...getOverrideProps(overrides, "preferredVendor")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
