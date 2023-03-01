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
export default function PatientUpdateForm(props) {
  const {
    id: idProp,
    patient,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    patientName: "",
    telelphoneNumber: "",
    insuranceCarrierID: "",
    dateOfBirth: "",
    gender: "",
    primaryCarePhysician: "",
    listCurrentMedications: "",
    listScheduledAppointments: "",
  };
  const [patientName, setPatientName] = React.useState(
    initialValues.patientName
  );
  const [telelphoneNumber, setTelelphoneNumber] = React.useState(
    initialValues.telelphoneNumber
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
  const [listCurrentMedications, setListCurrentMedications] = React.useState(
    initialValues.listCurrentMedications
  );
  const [listScheduledAppointments, setListScheduledAppointments] =
    React.useState(initialValues.listScheduledAppointments);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = patientRecord
      ? { ...initialValues, ...patientRecord }
      : initialValues;
    setPatientName(cleanValues.patientName);
    setTelelphoneNumber(cleanValues.telelphoneNumber);
    setInsuranceCarrierID(cleanValues.insuranceCarrierID);
    setDateOfBirth(cleanValues.dateOfBirth);
    setGender(cleanValues.gender);
    setPrimaryCarePhysician(cleanValues.primaryCarePhysician);
    setListCurrentMedications(cleanValues.listCurrentMedications);
    setListScheduledAppointments(cleanValues.listScheduledAppointments);
    setErrors({});
  };
  const [patientRecord, setPatientRecord] = React.useState(patient);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Patient, idProp) : patient;
      setPatientRecord(record);
    };
    queryData();
  }, [idProp, patient]);
  React.useEffect(resetStateValues, [patientRecord]);
  const validations = {
    patientName: [],
    telelphoneNumber: [],
    insuranceCarrierID: [],
    dateOfBirth: [],
    gender: [],
    primaryCarePhysician: [],
    listCurrentMedications: [],
    listScheduledAppointments: [],
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
          patientName,
          telelphoneNumber,
          insuranceCarrierID,
          dateOfBirth,
          gender,
          primaryCarePhysician,
          listCurrentMedications,
          listScheduledAppointments,
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
            Patient.copyOf(patientRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PatientUpdateForm")}
      {...rest}
    >
      <TextField
        label="Patient name"
        isRequired={false}
        isReadOnly={false}
        value={patientName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              patientName: value,
              telelphoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician,
              listCurrentMedications,
              listScheduledAppointments,
            };
            const result = onChange(modelFields);
            value = result?.patientName ?? value;
          }
          if (errors.patientName?.hasError) {
            runValidationTasks("patientName", value);
          }
          setPatientName(value);
        }}
        onBlur={() => runValidationTasks("patientName", patientName)}
        errorMessage={errors.patientName?.errorMessage}
        hasError={errors.patientName?.hasError}
        {...getOverrideProps(overrides, "patientName")}
      ></TextField>
      <TextField
        label="Telelphone number"
        isRequired={false}
        isReadOnly={false}
        value={telelphoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              patientName,
              telelphoneNumber: value,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician,
              listCurrentMedications,
              listScheduledAppointments,
            };
            const result = onChange(modelFields);
            value = result?.telelphoneNumber ?? value;
          }
          if (errors.telelphoneNumber?.hasError) {
            runValidationTasks("telelphoneNumber", value);
          }
          setTelelphoneNumber(value);
        }}
        onBlur={() => runValidationTasks("telelphoneNumber", telelphoneNumber)}
        errorMessage={errors.telelphoneNumber?.errorMessage}
        hasError={errors.telelphoneNumber?.hasError}
        {...getOverrideProps(overrides, "telelphoneNumber")}
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
              patientName,
              telelphoneNumber,
              insuranceCarrierID: value,
              dateOfBirth,
              gender,
              primaryCarePhysician,
              listCurrentMedications,
              listScheduledAppointments,
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
              patientName,
              telelphoneNumber,
              insuranceCarrierID,
              dateOfBirth: value,
              gender,
              primaryCarePhysician,
              listCurrentMedications,
              listScheduledAppointments,
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
              patientName,
              telelphoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender: value,
              primaryCarePhysician,
              listCurrentMedications,
              listScheduledAppointments,
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
              patientName,
              telelphoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician: value,
              listCurrentMedications,
              listScheduledAppointments,
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
      <TextField
        label="List current medications"
        isRequired={false}
        isReadOnly={false}
        value={listCurrentMedications}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              patientName,
              telelphoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician,
              listCurrentMedications: value,
              listScheduledAppointments,
            };
            const result = onChange(modelFields);
            value = result?.listCurrentMedications ?? value;
          }
          if (errors.listCurrentMedications?.hasError) {
            runValidationTasks("listCurrentMedications", value);
          }
          setListCurrentMedications(value);
        }}
        onBlur={() =>
          runValidationTasks("listCurrentMedications", listCurrentMedications)
        }
        errorMessage={errors.listCurrentMedications?.errorMessage}
        hasError={errors.listCurrentMedications?.hasError}
        {...getOverrideProps(overrides, "listCurrentMedications")}
      ></TextField>
      <TextField
        label="List scheduled appointments"
        isRequired={false}
        isReadOnly={false}
        value={listScheduledAppointments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              patientName,
              telelphoneNumber,
              insuranceCarrierID,
              dateOfBirth,
              gender,
              primaryCarePhysician,
              listCurrentMedications,
              listScheduledAppointments: value,
            };
            const result = onChange(modelFields);
            value = result?.listScheduledAppointments ?? value;
          }
          if (errors.listScheduledAppointments?.hasError) {
            runValidationTasks("listScheduledAppointments", value);
          }
          setListScheduledAppointments(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "listScheduledAppointments",
            listScheduledAppointments
          )
        }
        errorMessage={errors.listScheduledAppointments?.errorMessage}
        hasError={errors.listScheduledAppointments?.hasError}
        {...getOverrideProps(overrides, "listScheduledAppointments")}
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
          isDisabled={!(idProp || patient)}
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
              !(idProp || patient) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}