/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Prescription } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PrescriptionUpdateForm(props) {
  const {
    id: idProp,
    prescription,
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
    medication: "",
    dosag: "",
    frequency: "",
    filledBy: "",
    dateFilled: "",
  };
  const [physicianName, setPhysicianName] = React.useState(
    initialValues.physicianName
  );
  const [medication, setMedication] = React.useState(initialValues.medication);
  const [dosag, setDosag] = React.useState(initialValues.dosag);
  const [frequency, setFrequency] = React.useState(initialValues.frequency);
  const [filledBy, setFilledBy] = React.useState(initialValues.filledBy);
  const [dateFilled, setDateFilled] = React.useState(initialValues.dateFilled);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = prescriptionRecord
      ? { ...initialValues, ...prescriptionRecord }
      : initialValues;
    setPhysicianName(cleanValues.physicianName);
    setMedication(cleanValues.medication);
    setDosag(cleanValues.dosag);
    setFrequency(cleanValues.frequency);
    setFilledBy(cleanValues.filledBy);
    setDateFilled(cleanValues.dateFilled);
    setErrors({});
  };
  const [prescriptionRecord, setPrescriptionRecord] =
    React.useState(prescription);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Prescription, idProp)
        : prescription;
      setPrescriptionRecord(record);
    };
    queryData();
  }, [idProp, prescription]);
  React.useEffect(resetStateValues, [prescriptionRecord]);
  const validations = {
    physicianName: [{ type: "Required" }],
    medication: [{ type: "Required" }],
    dosag: [{ type: "Required" }],
    frequency: [{ type: "Required" }],
    filledBy: [],
    dateFilled: [{ type: "Required" }],
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
          medication,
          dosag,
          frequency,
          filledBy,
          dateFilled,
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
            Prescription.copyOf(prescriptionRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PrescriptionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Physician name"
        isRequired={true}
        isReadOnly={false}
        value={physicianName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName: value,
              medication,
              dosag,
              frequency,
              filledBy,
              dateFilled,
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
        label="Medication"
        isRequired={true}
        isReadOnly={false}
        value={medication}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              medication: value,
              dosag,
              frequency,
              filledBy,
              dateFilled,
            };
            const result = onChange(modelFields);
            value = result?.medication ?? value;
          }
          if (errors.medication?.hasError) {
            runValidationTasks("medication", value);
          }
          setMedication(value);
        }}
        onBlur={() => runValidationTasks("medication", medication)}
        errorMessage={errors.medication?.errorMessage}
        hasError={errors.medication?.hasError}
        {...getOverrideProps(overrides, "medication")}
      ></TextField>
      <TextField
        label="Dosag"
        isRequired={true}
        isReadOnly={false}
        value={dosag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              medication,
              dosag: value,
              frequency,
              filledBy,
              dateFilled,
            };
            const result = onChange(modelFields);
            value = result?.dosag ?? value;
          }
          if (errors.dosag?.hasError) {
            runValidationTasks("dosag", value);
          }
          setDosag(value);
        }}
        onBlur={() => runValidationTasks("dosag", dosag)}
        errorMessage={errors.dosag?.errorMessage}
        hasError={errors.dosag?.hasError}
        {...getOverrideProps(overrides, "dosag")}
      ></TextField>
      <TextField
        label="Frequency"
        isRequired={true}
        isReadOnly={false}
        value={frequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              medication,
              dosag,
              frequency: value,
              filledBy,
              dateFilled,
            };
            const result = onChange(modelFields);
            value = result?.frequency ?? value;
          }
          if (errors.frequency?.hasError) {
            runValidationTasks("frequency", value);
          }
          setFrequency(value);
        }}
        onBlur={() => runValidationTasks("frequency", frequency)}
        errorMessage={errors.frequency?.errorMessage}
        hasError={errors.frequency?.hasError}
        {...getOverrideProps(overrides, "frequency")}
      ></TextField>
      <TextField
        label="Filled by"
        isRequired={false}
        isReadOnly={false}
        value={filledBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              medication,
              dosag,
              frequency,
              filledBy: value,
              dateFilled,
            };
            const result = onChange(modelFields);
            value = result?.filledBy ?? value;
          }
          if (errors.filledBy?.hasError) {
            runValidationTasks("filledBy", value);
          }
          setFilledBy(value);
        }}
        onBlur={() => runValidationTasks("filledBy", filledBy)}
        errorMessage={errors.filledBy?.errorMessage}
        hasError={errors.filledBy?.hasError}
        {...getOverrideProps(overrides, "filledBy")}
      ></TextField>
      <TextField
        label="Date filled"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dateFilled}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              medication,
              dosag,
              frequency,
              filledBy,
              dateFilled: value,
            };
            const result = onChange(modelFields);
            value = result?.dateFilled ?? value;
          }
          if (errors.dateFilled?.hasError) {
            runValidationTasks("dateFilled", value);
          }
          setDateFilled(value);
        }}
        onBlur={() => runValidationTasks("dateFilled", dateFilled)}
        errorMessage={errors.dateFilled?.errorMessage}
        hasError={errors.dateFilled?.hasError}
        {...getOverrideProps(overrides, "dateFilled")}
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
          isDisabled={!(idProp || prescription)}
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
              !(idProp || prescription) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
