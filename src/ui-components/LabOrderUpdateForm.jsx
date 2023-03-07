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
export default function LabOrderUpdateForm(props) {
  const {
    id: idProp,
    labOrder,
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
    type: "",
    date: "",
    technician: "",
    result: "",
  };
  const [physicianName, setPhysicianName] = React.useState(
    initialValues.physicianName
  );
  const [type, setType] = React.useState(initialValues.type);
  const [date, setDate] = React.useState(initialValues.date);
  const [technician, setTechnician] = React.useState(initialValues.technician);
  const [result, setResult] = React.useState(initialValues.result);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = labOrderRecord
      ? { ...initialValues, ...labOrderRecord }
      : initialValues;
    setPhysicianName(cleanValues.physicianName);
    setType(cleanValues.type);
    setDate(cleanValues.date);
    setTechnician(cleanValues.technician);
    setResult(cleanValues.result);
    setErrors({});
  };
  const [labOrderRecord, setLabOrderRecord] = React.useState(labOrder);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(LabOrder, idProp)
        : labOrder;
      setLabOrderRecord(record);
    };
    queryData();
  }, [idProp, labOrder]);
  React.useEffect(resetStateValues, [labOrderRecord]);
  const validations = {
    physicianName: [],
    type: [],
    date: [],
    technician: [],
    result: [],
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
          physicianName,
          type,
          date,
          technician,
          result,
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
            LabOrder.copyOf(labOrderRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LabOrderUpdateForm")}
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
              type,
              date,
              technician,
              result,
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
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              type: value,
              date,
              technician,
              result,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              type,
              date: value,
              technician,
              result,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
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
              type,
              date,
              technician: value,
              result,
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
        label="Result"
        isRequired={false}
        isReadOnly={false}
        value={result}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              type,
              date,
              technician,
              result: value,
            };
            const result = onChange(modelFields);
            value = result?.result ?? value;
          }
          if (errors.result?.hasError) {
            runValidationTasks("result", value);
          }
          setResult(value);
        }}
        onBlur={() => runValidationTasks("result", result)}
        errorMessage={errors.result?.errorMessage}
        hasError={errors.result?.hasError}
        {...getOverrideProps(overrides, "result")}
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
          isDisabled={!(idProp || labOrder)}
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
              !(idProp || labOrder) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
