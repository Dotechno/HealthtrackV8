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
export default function LabTestUpdateForm(props) {
  const {
    id: idProp,
    labTest,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    typeName: "",
    rangeOfNotNormalResults: "",
    laborderID: "",
    rangeOfNormalResults: "",
  };
  const [typeName, setTypeName] = React.useState(initialValues.typeName);
  const [rangeOfNotNormalResults, setRangeOfNotNormalResults] = React.useState(
    initialValues.rangeOfNotNormalResults
  );
  const [laborderID, setLaborderID] = React.useState(initialValues.laborderID);
  const [rangeOfNormalResults, setRangeOfNormalResults] = React.useState(
    initialValues.rangeOfNormalResults
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = labTestRecord
      ? { ...initialValues, ...labTestRecord }
      : initialValues;
    setTypeName(cleanValues.typeName);
    setRangeOfNotNormalResults(cleanValues.rangeOfNotNormalResults);
    setLaborderID(cleanValues.laborderID);
    setRangeOfNormalResults(cleanValues.rangeOfNormalResults);
    setErrors({});
  };
  const [labTestRecord, setLabTestRecord] = React.useState(labTest);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(LabTest, idProp) : labTest;
      setLabTestRecord(record);
    };
    queryData();
  }, [idProp, labTest]);
  React.useEffect(resetStateValues, [labTestRecord]);
  const validations = {
    typeName: [],
    rangeOfNotNormalResults: [],
    laborderID: [{ type: "Required" }],
    rangeOfNormalResults: [],
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
          typeName,
          rangeOfNotNormalResults,
          laborderID,
          rangeOfNormalResults,
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
            LabTest.copyOf(labTestRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LabTestUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type name"
        isRequired={false}
        isReadOnly={false}
        value={typeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeName: value,
              rangeOfNotNormalResults,
              laborderID,
              rangeOfNormalResults,
            };
            const result = onChange(modelFields);
            value = result?.typeName ?? value;
          }
          if (errors.typeName?.hasError) {
            runValidationTasks("typeName", value);
          }
          setTypeName(value);
        }}
        onBlur={() => runValidationTasks("typeName", typeName)}
        errorMessage={errors.typeName?.errorMessage}
        hasError={errors.typeName?.hasError}
        {...getOverrideProps(overrides, "typeName")}
      ></TextField>
      <TextField
        label="Range of not normal results"
        isRequired={false}
        isReadOnly={false}
        value={rangeOfNotNormalResults}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeName,
              rangeOfNotNormalResults: value,
              laborderID,
              rangeOfNormalResults,
            };
            const result = onChange(modelFields);
            value = result?.rangeOfNotNormalResults ?? value;
          }
          if (errors.rangeOfNotNormalResults?.hasError) {
            runValidationTasks("rangeOfNotNormalResults", value);
          }
          setRangeOfNotNormalResults(value);
        }}
        onBlur={() =>
          runValidationTasks("rangeOfNotNormalResults", rangeOfNotNormalResults)
        }
        errorMessage={errors.rangeOfNotNormalResults?.errorMessage}
        hasError={errors.rangeOfNotNormalResults?.hasError}
        {...getOverrideProps(overrides, "rangeOfNotNormalResults")}
      ></TextField>
      <TextField
        label="Laborder id"
        isRequired={true}
        isReadOnly={false}
        value={laborderID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeName,
              rangeOfNotNormalResults,
              laborderID: value,
              rangeOfNormalResults,
            };
            const result = onChange(modelFields);
            value = result?.laborderID ?? value;
          }
          if (errors.laborderID?.hasError) {
            runValidationTasks("laborderID", value);
          }
          setLaborderID(value);
        }}
        onBlur={() => runValidationTasks("laborderID", laborderID)}
        errorMessage={errors.laborderID?.errorMessage}
        hasError={errors.laborderID?.hasError}
        {...getOverrideProps(overrides, "laborderID")}
      ></TextField>
      <TextField
        label="Range of normal results"
        isRequired={false}
        isReadOnly={false}
        value={rangeOfNormalResults}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              typeName,
              rangeOfNotNormalResults,
              laborderID,
              rangeOfNormalResults: value,
            };
            const result = onChange(modelFields);
            value = result?.rangeOfNormalResults ?? value;
          }
          if (errors.rangeOfNormalResults?.hasError) {
            runValidationTasks("rangeOfNormalResults", value);
          }
          setRangeOfNormalResults(value);
        }}
        onBlur={() =>
          runValidationTasks("rangeOfNormalResults", rangeOfNormalResults)
        }
        errorMessage={errors.rangeOfNormalResults?.errorMessage}
        hasError={errors.rangeOfNormalResults?.hasError}
        {...getOverrideProps(overrides, "rangeOfNormalResults")}
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
          isDisabled={!(idProp || labTest)}
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
              !(idProp || labTest) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
