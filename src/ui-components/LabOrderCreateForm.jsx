/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { LabOrder } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LabOrderCreateForm(props) {
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
    physicianName: "",
    testType: "",
    testDate: "",
    technician: "",
    testResult: "",
  };
  const [physicianName, setPhysicianName] = React.useState(
    initialValues.physicianName
  );
  const [testType, setTestType] = React.useState(initialValues.testType);
  const [testDate, setTestDate] = React.useState(initialValues.testDate);
  const [technician, setTechnician] = React.useState(initialValues.technician);
  const [testResult, setTestResult] = React.useState(initialValues.testResult);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPhysicianName(initialValues.physicianName);
    setTestType(initialValues.testType);
    setTestDate(initialValues.testDate);
    setTechnician(initialValues.technician);
    setTestResult(initialValues.testResult);
    setErrors({});
  };
  const validations = {
    physicianName: [],
    testType: [],
    testDate: [],
    technician: [],
    testResult: [],
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
          physicianName,
          testType,
          testDate,
          technician,
          testResult,
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
          await DataStore.save(new LabOrder(modelFields));
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
      {...getOverrideProps(overrides, "LabOrderCreateForm")}
      {...rest}
    >
      <TextField
        label="Physician name"
        isRequired={false}
        isReadOnly={false}
        value={physicianName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName: value,
              testType,
              testDate,
              technician,
              testResult,
            };
            const result = onChange(modelFields);
            value = result?.physicianName ?? value;
          }
          if (errors.physicianName?.hasError) {
            runValidationTasks("physicianName", value);
          }
          setPhysicianName(value);
        }}
        onBlur={() => runValidationTasks("physicianName", physicianName)}
        errorMessage={errors.physicianName?.errorMessage}
        hasError={errors.physicianName?.hasError}
        {...getOverrideProps(overrides, "physicianName")}
      ></TextField>
      <TextField
        label="Test type"
        isRequired={false}
        isReadOnly={false}
        value={testType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              testType: value,
              testDate,
              technician,
              testResult,
            };
            const result = onChange(modelFields);
            value = result?.testType ?? value;
          }
          if (errors.testType?.hasError) {
            runValidationTasks("testType", value);
          }
          setTestType(value);
        }}
        onBlur={() => runValidationTasks("testType", testType)}
        errorMessage={errors.testType?.errorMessage}
        hasError={errors.testType?.hasError}
        {...getOverrideProps(overrides, "testType")}
      ></TextField>
      <TextField
        label="Test date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={testDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              testType,
              testDate: value,
              technician,
              testResult,
            };
            const result = onChange(modelFields);
            value = result?.testDate ?? value;
          }
          if (errors.testDate?.hasError) {
            runValidationTasks("testDate", value);
          }
          setTestDate(value);
        }}
        onBlur={() => runValidationTasks("testDate", testDate)}
        errorMessage={errors.testDate?.errorMessage}
        hasError={errors.testDate?.hasError}
        {...getOverrideProps(overrides, "testDate")}
      ></TextField>
      <TextField
        label="Technician"
        isRequired={false}
        isReadOnly={false}
        value={technician}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              testType,
              testDate,
              technician: value,
              testResult,
            };
            const result = onChange(modelFields);
            value = result?.technician ?? value;
          }
          if (errors.technician?.hasError) {
            runValidationTasks("technician", value);
          }
          setTechnician(value);
        }}
        onBlur={() => runValidationTasks("technician", technician)}
        errorMessage={errors.technician?.errorMessage}
        hasError={errors.technician?.hasError}
        {...getOverrideProps(overrides, "technician")}
      ></TextField>
      <TextField
        label="Test result"
        isRequired={false}
        isReadOnly={false}
        value={testResult}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              testType,
              testDate,
              technician,
              testResult: value,
            };
            const result = onChange(modelFields);
            value = result?.testResult ?? value;
          }
          if (errors.testResult?.hasError) {
            runValidationTasks("testResult", value);
          }
          setTestResult(value);
        }}
        onBlur={() => runValidationTasks("testResult", testResult)}
        errorMessage={errors.testResult?.errorMessage}
        hasError={errors.testResult?.hasError}
        {...getOverrideProps(overrides, "testResult")}
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
