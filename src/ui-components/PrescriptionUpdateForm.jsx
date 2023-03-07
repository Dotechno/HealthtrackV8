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
    prescribedMedication: "",
    medicineDosage: "",
    frequencyOfMedication: "",
    datePrescriptionFilled: "",
    pharmacistWhoFilledPrescription: "",
  };
  const [physicianName, setPhysicianName] = React.useState(
    initialValues.physicianName
  );
  const [prescribedMedication, setPrescribedMedication] = React.useState(
    initialValues.prescribedMedication
  );
  const [medicineDosage, setMedicineDosage] = React.useState(
    initialValues.medicineDosage
  );
  const [frequencyOfMedication, setFrequencyOfMedication] = React.useState(
    initialValues.frequencyOfMedication
  );
  const [datePrescriptionFilled, setDatePrescriptionFilled] = React.useState(
    initialValues.datePrescriptionFilled
  );
  const [pharmacistWhoFilledPrescription, setPharmacistWhoFilledPrescription] =
    React.useState(initialValues.pharmacistWhoFilledPrescription);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = prescriptionRecord
      ? { ...initialValues, ...prescriptionRecord }
      : initialValues;
    setPhysicianName(cleanValues.physicianName);
    setPrescribedMedication(cleanValues.prescribedMedication);
    setMedicineDosage(cleanValues.medicineDosage);
    setFrequencyOfMedication(cleanValues.frequencyOfMedication);
    setDatePrescriptionFilled(cleanValues.datePrescriptionFilled);
    setPharmacistWhoFilledPrescription(
      cleanValues.pharmacistWhoFilledPrescription
    );
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
    physicianName: [],
    prescribedMedication: [],
    medicineDosage: [],
    frequencyOfMedication: [],
    datePrescriptionFilled: [],
    pharmacistWhoFilledPrescription: [],
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
          prescribedMedication,
          medicineDosage,
          frequencyOfMedication,
          datePrescriptionFilled,
          pharmacistWhoFilledPrescription,
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
        isRequired={false}
        isReadOnly={false}
        value={physicianName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName: value,
              prescribedMedication,
              medicineDosage,
              frequencyOfMedication,
              datePrescriptionFilled,
              pharmacistWhoFilledPrescription,
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
        label="Prescribed medication"
        isRequired={false}
        isReadOnly={false}
        value={prescribedMedication}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              prescribedMedication: value,
              medicineDosage,
              frequencyOfMedication,
              datePrescriptionFilled,
              pharmacistWhoFilledPrescription,
            };
            const result = onChange(modelFields);
            value = result?.prescribedMedication ?? value;
          }
          if (errors.prescribedMedication?.hasError) {
            runValidationTasks("prescribedMedication", value);
          }
          setPrescribedMedication(value);
        }}
        onBlur={() =>
          runValidationTasks("prescribedMedication", prescribedMedication)
        }
        errorMessage={errors.prescribedMedication?.errorMessage}
        hasError={errors.prescribedMedication?.hasError}
        {...getOverrideProps(overrides, "prescribedMedication")}
      ></TextField>
      <TextField
        label="Medicine dosage"
        isRequired={false}
        isReadOnly={false}
        value={medicineDosage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              prescribedMedication,
              medicineDosage: value,
              frequencyOfMedication,
              datePrescriptionFilled,
              pharmacistWhoFilledPrescription,
            };
            const result = onChange(modelFields);
            value = result?.medicineDosage ?? value;
          }
          if (errors.medicineDosage?.hasError) {
            runValidationTasks("medicineDosage", value);
          }
          setMedicineDosage(value);
        }}
        onBlur={() => runValidationTasks("medicineDosage", medicineDosage)}
        errorMessage={errors.medicineDosage?.errorMessage}
        hasError={errors.medicineDosage?.hasError}
        {...getOverrideProps(overrides, "medicineDosage")}
      ></TextField>
      <TextField
        label="Frequency of medication"
        isRequired={false}
        isReadOnly={false}
        value={frequencyOfMedication}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              prescribedMedication,
              medicineDosage,
              frequencyOfMedication: value,
              datePrescriptionFilled,
              pharmacistWhoFilledPrescription,
            };
            const result = onChange(modelFields);
            value = result?.frequencyOfMedication ?? value;
          }
          if (errors.frequencyOfMedication?.hasError) {
            runValidationTasks("frequencyOfMedication", value);
          }
          setFrequencyOfMedication(value);
        }}
        onBlur={() =>
          runValidationTasks("frequencyOfMedication", frequencyOfMedication)
        }
        errorMessage={errors.frequencyOfMedication?.errorMessage}
        hasError={errors.frequencyOfMedication?.hasError}
        {...getOverrideProps(overrides, "frequencyOfMedication")}
      ></TextField>
      <TextField
        label="Date prescription filled"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={datePrescriptionFilled}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              prescribedMedication,
              medicineDosage,
              frequencyOfMedication,
              datePrescriptionFilled: value,
              pharmacistWhoFilledPrescription,
            };
            const result = onChange(modelFields);
            value = result?.datePrescriptionFilled ?? value;
          }
          if (errors.datePrescriptionFilled?.hasError) {
            runValidationTasks("datePrescriptionFilled", value);
          }
          setDatePrescriptionFilled(value);
        }}
        onBlur={() =>
          runValidationTasks("datePrescriptionFilled", datePrescriptionFilled)
        }
        errorMessage={errors.datePrescriptionFilled?.errorMessage}
        hasError={errors.datePrescriptionFilled?.hasError}
        {...getOverrideProps(overrides, "datePrescriptionFilled")}
      ></TextField>
      <TextField
        label="Pharmacist who filled prescription"
        isRequired={false}
        isReadOnly={false}
        value={pharmacistWhoFilledPrescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              physicianName,
              prescribedMedication,
              medicineDosage,
              frequencyOfMedication,
              datePrescriptionFilled,
              pharmacistWhoFilledPrescription: value,
            };
            const result = onChange(modelFields);
            value = result?.pharmacistWhoFilledPrescription ?? value;
          }
          if (errors.pharmacistWhoFilledPrescription?.hasError) {
            runValidationTasks("pharmacistWhoFilledPrescription", value);
          }
          setPharmacistWhoFilledPrescription(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "pharmacistWhoFilledPrescription",
            pharmacistWhoFilledPrescription
          )
        }
        errorMessage={errors.pharmacistWhoFilledPrescription?.errorMessage}
        hasError={errors.pharmacistWhoFilledPrescription?.hasError}
        {...getOverrideProps(overrides, "pharmacistWhoFilledPrescription")}
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
