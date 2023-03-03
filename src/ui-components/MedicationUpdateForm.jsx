/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Medication } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MedicationUpdateForm(props) {
  const {
    id: idProp,
    medication,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    useOfMedication: "",
    recommendedDosage: "",
    recommendedFrequencyOfUse: "",
    potentialSideEffect: "",
    drugThatMayReactAdversely: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [useOfMedication, setUseOfMedication] = React.useState(
    initialValues.useOfMedication
  );
  const [recommendedDosage, setRecommendedDosage] = React.useState(
    initialValues.recommendedDosage
  );
  const [recommendedFrequencyOfUse, setRecommendedFrequencyOfUse] =
    React.useState(initialValues.recommendedFrequencyOfUse);
  const [potentialSideEffect, setPotentialSideEffect] = React.useState(
    initialValues.potentialSideEffect
  );
  const [drugThatMayReactAdversely, setDrugThatMayReactAdversely] =
    React.useState(initialValues.drugThatMayReactAdversely);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = medicationRecord
      ? { ...initialValues, ...medicationRecord }
      : initialValues;
    setName(cleanValues.name);
    setUseOfMedication(cleanValues.useOfMedication);
    setRecommendedDosage(cleanValues.recommendedDosage);
    setRecommendedFrequencyOfUse(cleanValues.recommendedFrequencyOfUse);
    setPotentialSideEffect(cleanValues.potentialSideEffect);
    setDrugThatMayReactAdversely(cleanValues.drugThatMayReactAdversely);
    setErrors({});
  };
  const [medicationRecord, setMedicationRecord] = React.useState(medication);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Medication, idProp)
        : medication;
      setMedicationRecord(record);
    };
    queryData();
  }, [idProp, medication]);
  React.useEffect(resetStateValues, [medicationRecord]);
  const validations = {
    name: [],
    useOfMedication: [],
    recommendedDosage: [],
    recommendedFrequencyOfUse: [],
    potentialSideEffect: [],
    drugThatMayReactAdversely: [],
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
          name,
          useOfMedication,
          recommendedDosage,
          recommendedFrequencyOfUse,
          potentialSideEffect,
          drugThatMayReactAdversely,
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
            Medication.copyOf(medicationRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MedicationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              useOfMedication,
              recommendedDosage,
              recommendedFrequencyOfUse,
              potentialSideEffect,
              drugThatMayReactAdversely,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Use of medication"
        isRequired={false}
        isReadOnly={false}
        value={useOfMedication}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              useOfMedication: value,
              recommendedDosage,
              recommendedFrequencyOfUse,
              potentialSideEffect,
              drugThatMayReactAdversely,
            };
            const result = onChange(modelFields);
            value = result?.useOfMedication ?? value;
          }
          if (errors.useOfMedication?.hasError) {
            runValidationTasks("useOfMedication", value);
          }
          setUseOfMedication(value);
        }}
        onBlur={() => runValidationTasks("useOfMedication", useOfMedication)}
        errorMessage={errors.useOfMedication?.errorMessage}
        hasError={errors.useOfMedication?.hasError}
        {...getOverrideProps(overrides, "useOfMedication")}
      ></TextField>
      <TextField
        label="Recommended dosage"
        isRequired={false}
        isReadOnly={false}
        value={recommendedDosage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              useOfMedication,
              recommendedDosage: value,
              recommendedFrequencyOfUse,
              potentialSideEffect,
              drugThatMayReactAdversely,
            };
            const result = onChange(modelFields);
            value = result?.recommendedDosage ?? value;
          }
          if (errors.recommendedDosage?.hasError) {
            runValidationTasks("recommendedDosage", value);
          }
          setRecommendedDosage(value);
        }}
        onBlur={() =>
          runValidationTasks("recommendedDosage", recommendedDosage)
        }
        errorMessage={errors.recommendedDosage?.errorMessage}
        hasError={errors.recommendedDosage?.hasError}
        {...getOverrideProps(overrides, "recommendedDosage")}
      ></TextField>
      <TextField
        label="Recommended frequency of use"
        isRequired={false}
        isReadOnly={false}
        value={recommendedFrequencyOfUse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              useOfMedication,
              recommendedDosage,
              recommendedFrequencyOfUse: value,
              potentialSideEffect,
              drugThatMayReactAdversely,
            };
            const result = onChange(modelFields);
            value = result?.recommendedFrequencyOfUse ?? value;
          }
          if (errors.recommendedFrequencyOfUse?.hasError) {
            runValidationTasks("recommendedFrequencyOfUse", value);
          }
          setRecommendedFrequencyOfUse(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "recommendedFrequencyOfUse",
            recommendedFrequencyOfUse
          )
        }
        errorMessage={errors.recommendedFrequencyOfUse?.errorMessage}
        hasError={errors.recommendedFrequencyOfUse?.hasError}
        {...getOverrideProps(overrides, "recommendedFrequencyOfUse")}
      ></TextField>
      <TextField
        label="Potential side effect"
        isRequired={false}
        isReadOnly={false}
        value={potentialSideEffect}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              useOfMedication,
              recommendedDosage,
              recommendedFrequencyOfUse,
              potentialSideEffect: value,
              drugThatMayReactAdversely,
            };
            const result = onChange(modelFields);
            value = result?.potentialSideEffect ?? value;
          }
          if (errors.potentialSideEffect?.hasError) {
            runValidationTasks("potentialSideEffect", value);
          }
          setPotentialSideEffect(value);
        }}
        onBlur={() =>
          runValidationTasks("potentialSideEffect", potentialSideEffect)
        }
        errorMessage={errors.potentialSideEffect?.errorMessage}
        hasError={errors.potentialSideEffect?.hasError}
        {...getOverrideProps(overrides, "potentialSideEffect")}
      ></TextField>
      <TextField
        label="Drug that may react adversely"
        isRequired={false}
        isReadOnly={false}
        value={drugThatMayReactAdversely}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              useOfMedication,
              recommendedDosage,
              recommendedFrequencyOfUse,
              potentialSideEffect,
              drugThatMayReactAdversely: value,
            };
            const result = onChange(modelFields);
            value = result?.drugThatMayReactAdversely ?? value;
          }
          if (errors.drugThatMayReactAdversely?.hasError) {
            runValidationTasks("drugThatMayReactAdversely", value);
          }
          setDrugThatMayReactAdversely(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "drugThatMayReactAdversely",
            drugThatMayReactAdversely
          )
        }
        errorMessage={errors.drugThatMayReactAdversely?.errorMessage}
        hasError={errors.drugThatMayReactAdversely?.hasError}
        {...getOverrideProps(overrides, "drugThatMayReactAdversely")}
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
          isDisabled={!(idProp || medication)}
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
              !(idProp || medication) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
