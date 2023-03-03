/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { VitalSign } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function VitalSignUpdateForm(props) {
  const {
    id: idProp,
    vitalSign,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bodyTemperature: "",
    pulseRate: "",
    respirationRate: "",
    bloodPressure: "",
  };
  const [bodyTemperature, setBodyTemperature] = React.useState(
    initialValues.bodyTemperature
  );
  const [pulseRate, setPulseRate] = React.useState(initialValues.pulseRate);
  const [respirationRate, setRespirationRate] = React.useState(
    initialValues.respirationRate
  );
  const [bloodPressure, setBloodPressure] = React.useState(
    initialValues.bloodPressure
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = vitalSignRecord
      ? { ...initialValues, ...vitalSignRecord }
      : initialValues;
    setBodyTemperature(cleanValues.bodyTemperature);
    setPulseRate(cleanValues.pulseRate);
    setRespirationRate(cleanValues.respirationRate);
    setBloodPressure(cleanValues.bloodPressure);
    setErrors({});
  };
  const [vitalSignRecord, setVitalSignRecord] = React.useState(vitalSign);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(VitalSign, idProp)
        : vitalSign;
      setVitalSignRecord(record);
    };
    queryData();
  }, [idProp, vitalSign]);
  React.useEffect(resetStateValues, [vitalSignRecord]);
  const validations = {
    bodyTemperature: [],
    pulseRate: [],
    respirationRate: [],
    bloodPressure: [],
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
          bodyTemperature,
          pulseRate,
          respirationRate,
          bloodPressure,
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
          await DataStore.save(
            VitalSign.copyOf(vitalSignRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VitalSignUpdateForm")}
      {...rest}
    >
      <TextField
        label="Body temperature"
        isRequired={false}
        isReadOnly={false}
        value={bodyTemperature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bodyTemperature: value,
              pulseRate,
              respirationRate,
              bloodPressure,
            };
            const result = onChange(modelFields);
            value = result?.bodyTemperature ?? value;
          }
          if (errors.bodyTemperature?.hasError) {
            runValidationTasks("bodyTemperature", value);
          }
          setBodyTemperature(value);
        }}
        onBlur={() => runValidationTasks("bodyTemperature", bodyTemperature)}
        errorMessage={errors.bodyTemperature?.errorMessage}
        hasError={errors.bodyTemperature?.hasError}
        {...getOverrideProps(overrides, "bodyTemperature")}
      ></TextField>
      <TextField
        label="Pulse rate"
        isRequired={false}
        isReadOnly={false}
        value={pulseRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bodyTemperature,
              pulseRate: value,
              respirationRate,
              bloodPressure,
            };
            const result = onChange(modelFields);
            value = result?.pulseRate ?? value;
          }
          if (errors.pulseRate?.hasError) {
            runValidationTasks("pulseRate", value);
          }
          setPulseRate(value);
        }}
        onBlur={() => runValidationTasks("pulseRate", pulseRate)}
        errorMessage={errors.pulseRate?.errorMessage}
        hasError={errors.pulseRate?.hasError}
        {...getOverrideProps(overrides, "pulseRate")}
      ></TextField>
      <TextField
        label="Respiration rate"
        isRequired={false}
        isReadOnly={false}
        value={respirationRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bodyTemperature,
              pulseRate,
              respirationRate: value,
              bloodPressure,
            };
            const result = onChange(modelFields);
            value = result?.respirationRate ?? value;
          }
          if (errors.respirationRate?.hasError) {
            runValidationTasks("respirationRate", value);
          }
          setRespirationRate(value);
        }}
        onBlur={() => runValidationTasks("respirationRate", respirationRate)}
        errorMessage={errors.respirationRate?.errorMessage}
        hasError={errors.respirationRate?.hasError}
        {...getOverrideProps(overrides, "respirationRate")}
      ></TextField>
      <TextField
        label="Blood pressure"
        isRequired={false}
        isReadOnly={false}
        value={bloodPressure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bodyTemperature,
              pulseRate,
              respirationRate,
              bloodPressure: value,
            };
            const result = onChange(modelFields);
            value = result?.bloodPressure ?? value;
          }
          if (errors.bloodPressure?.hasError) {
            runValidationTasks("bloodPressure", value);
          }
          setBloodPressure(value);
        }}
        onBlur={() => runValidationTasks("bloodPressure", bloodPressure)}
        errorMessage={errors.bloodPressure?.errorMessage}
        hasError={errors.bloodPressure?.hasError}
        {...getOverrideProps(overrides, "bloodPressure")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || vitalSign)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || vitalSign) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
