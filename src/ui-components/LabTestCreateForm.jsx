/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { LabTest } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LabTestCreateForm(props) {
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
    testTypeName: "",
    normalRange: "",
    abnormalRange: "",
    description: "",
  };
  const [testTypeName, setTestTypeName] = React.useState(
    initialValues.testTypeName
  );
  const [normalRange, setNormalRange] = React.useState(
    initialValues.normalRange
  );
  const [abnormalRange, setAbnormalRange] = React.useState(
    initialValues.abnormalRange
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTestTypeName(initialValues.testTypeName);
    setNormalRange(initialValues.normalRange);
    setAbnormalRange(initialValues.abnormalRange);
    setDescription(initialValues.description);
    setErrors({});
  };
  const validations = {
    testTypeName: [],
    normalRange: [],
    abnormalRange: [],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
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
          testTypeName,
          normalRange,
          abnormalRange,
          description,
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
          await DataStore.save(new LabTest(modelFields));
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
      {...getOverrideProps(overrides, "LabTestCreateForm")}
      {...rest}
    >
      <TextField
        label="Test type name"
        isRequired={false}
        isReadOnly={false}
        value={testTypeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              testTypeName: value,
              normalRange,
              abnormalRange,
              description,
            };
            const result = onChange(modelFields);
            value = result?.testTypeName ?? value;
          }
          if (errors.testTypeName?.hasError) {
            runValidationTasks("testTypeName", value);
          }
          setTestTypeName(value);
        }}
        onBlur={() => runValidationTasks("testTypeName", testTypeName)}
        errorMessage={errors.testTypeName?.errorMessage}
        hasError={errors.testTypeName?.hasError}
        {...getOverrideProps(overrides, "testTypeName")}
      ></TextField>
      <TextField
        label="Normal range"
        isRequired={false}
        isReadOnly={false}
        value={normalRange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              testTypeName,
              normalRange: value,
              abnormalRange,
              description,
            };
            const result = onChange(modelFields);
            value = result?.normalRange ?? value;
          }
          if (errors.normalRange?.hasError) {
            runValidationTasks("normalRange", value);
          }
          setNormalRange(value);
        }}
        onBlur={() => runValidationTasks("normalRange", normalRange)}
        errorMessage={errors.normalRange?.errorMessage}
        hasError={errors.normalRange?.hasError}
        {...getOverrideProps(overrides, "normalRange")}
      ></TextField>
      <TextField
        label="Abnormal range"
        isRequired={false}
        isReadOnly={false}
        value={abnormalRange}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              testTypeName,
              normalRange,
              abnormalRange: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.abnormalRange ?? value;
          }
          if (errors.abnormalRange?.hasError) {
            runValidationTasks("abnormalRange", value);
          }
          setAbnormalRange(value);
        }}
        onBlur={() => runValidationTasks("abnormalRange", abnormalRange)}
        errorMessage={errors.abnormalRange?.errorMessage}
        hasError={errors.abnormalRange?.hasError}
        {...getOverrideProps(overrides, "abnormalRange")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              testTypeName,
              normalRange,
              abnormalRange,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
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
