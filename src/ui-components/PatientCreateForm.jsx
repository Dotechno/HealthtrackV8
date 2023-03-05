/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Patient } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PatientCreateForm(props) {
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
    name: "",
    telephoneNumber: "",
    insuranceCarrierID: "",
    dateOfBirth: "",
    gender: "",
    primaryCarePhysician: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [telephoneNumber, setTelephoneNumber] = React.useState(
    initialValues.telephoneNumber
  );
  const [insuranceCarrierID, setInsuranceCarrierID] = React.useState(
    initialValues.insuranceCarrierID
  );
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [primaryCarePhysician, setPrimaryCarePhysician] = React.useState(
    initialValues.primaryCarePhysician
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setTelephoneNumber(initialValues.telephoneNumber);
    setInsuranceCarrierID(initialValues.insuranceCarrierID);
    setDateOfBirth(initialValues.dateOfBirth);
    setGender(initialValues.gender);
    setPrimaryCarePhysician(initialValues.primaryCarePhysician);
    setErrors({});
  };
  const validations = {
    name: [],
    telephoneNumber: [],
    insuranceCarrierID: [],
    dateOfBirth: [],
    gender: [],
    primaryCarePhysician: [],
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
          telephoneNumber,
          insuranceCarrierID,
          dateOfBirth,
          gender,
          primaryCarePhysician,
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
          await DataStore.save(new Patient(modelFields));
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
      {...getOverrideProps(overrides, "PatientCreateForm")}
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
              telephoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician,
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
        label="Telephone number"
        isRequired={false}
        isReadOnly={false}
        value={telephoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              telephoneNumber: value,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician,
            };
            const result = onChange(modelFields);
            value = result?.telephoneNumber ?? value;
          }
          if (errors.telephoneNumber?.hasError) {
            runValidationTasks("telephoneNumber", value);
          }
          setTelephoneNumber(value);
        }}
        onBlur={() => runValidationTasks("telephoneNumber", telephoneNumber)}
        errorMessage={errors.telephoneNumber?.errorMessage}
        hasError={errors.telephoneNumber?.hasError}
        {...getOverrideProps(overrides, "telephoneNumber")}
      ></TextField>
      <TextField
        label="Insurance carrier id"
        isRequired={false}
        isReadOnly={false}
        value={insuranceCarrierID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              telephoneNumber,
              insuranceCarrierID: value,
              dateOfBirth,
              gender,
              primaryCarePhysician,
            };
            const result = onChange(modelFields);
            value = result?.insuranceCarrierID ?? value;
          }
          if (errors.insuranceCarrierID?.hasError) {
            runValidationTasks("insuranceCarrierID", value);
          }
          setInsuranceCarrierID(value);
        }}
        onBlur={() =>
          runValidationTasks("insuranceCarrierID", insuranceCarrierID)
        }
        errorMessage={errors.insuranceCarrierID?.errorMessage}
        hasError={errors.insuranceCarrierID?.hasError}
        {...getOverrideProps(overrides, "insuranceCarrierID")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              telephoneNumber,
              insuranceCarrierID,
              dateOfBirth: value,
              gender,
              primaryCarePhysician,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              telephoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender: value,
              primaryCarePhysician,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Primary care physician"
        isRequired={false}
        isReadOnly={false}
        value={primaryCarePhysician}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              telephoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician: value,
            };
            const result = onChange(modelFields);
            value = result?.primaryCarePhysician ?? value;
          }
          if (errors.primaryCarePhysician?.hasError) {
            runValidationTasks("primaryCarePhysician", value);
          }
          setPrimaryCarePhysician(value);
        }}
        onBlur={() =>
          runValidationTasks("primaryCarePhysician", primaryCarePhysician)
        }
        errorMessage={errors.primaryCarePhysician?.errorMessage}
        hasError={errors.primaryCarePhysician?.hasError}
        {...getOverrideProps(overrides, "primaryCarePhysician")}
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
