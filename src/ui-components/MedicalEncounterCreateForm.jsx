/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { MedicalEncounter } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MedicalEncounterCreateForm(props) {
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
    encounterDateTime: "",
    practitionerTypeSeen: undefined,
    patientComplaints: "",
    vitalSigns: "",
    practionerNotes: "",
    labOrders: "",
    pharmacyOrders: "",
    diagnosis: "",
    treatmentPlan: "",
    referralToSpecialists: "",
    recommendedFollowUp: "",
    dataTimeEncounterSubmitted: "",
    employeeIDWhoSubmitted: "",
  };
  const [encounterDateTime, setEncounterDateTime] = React.useState(
    initialValues.encounterDateTime
  );
  const [practitionerTypeSeen, setPractitionerTypeSeen] = React.useState(
    initialValues.practitionerTypeSeen
  );
  const [patientComplaints, setPatientComplaints] = React.useState(
    initialValues.patientComplaints
  );
  const [vitalSigns, setVitalSigns] = React.useState(initialValues.vitalSigns);
  const [practionerNotes, setPractionerNotes] = React.useState(
    initialValues.practionerNotes
  );
  const [labOrders, setLabOrders] = React.useState(initialValues.labOrders);
  const [pharmacyOrders, setPharmacyOrders] = React.useState(
    initialValues.pharmacyOrders
  );
  const [diagnosis, setDiagnosis] = React.useState(initialValues.diagnosis);
  const [treatmentPlan, setTreatmentPlan] = React.useState(
    initialValues.treatmentPlan
  );
  const [referralToSpecialists, setReferralToSpecialists] = React.useState(
    initialValues.referralToSpecialists
  );
  const [recommendedFollowUp, setRecommendedFollowUp] = React.useState(
    initialValues.recommendedFollowUp
  );
  const [dataTimeEncounterSubmitted, setDataTimeEncounterSubmitted] =
    React.useState(initialValues.dataTimeEncounterSubmitted);
  const [employeeIDWhoSubmitted, setEmployeeIDWhoSubmitted] = React.useState(
    initialValues.employeeIDWhoSubmitted
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEncounterDateTime(initialValues.encounterDateTime);
    setPractitionerTypeSeen(initialValues.practitionerTypeSeen);
    setPatientComplaints(initialValues.patientComplaints);
    setVitalSigns(initialValues.vitalSigns);
    setPractionerNotes(initialValues.practionerNotes);
    setLabOrders(initialValues.labOrders);
    setPharmacyOrders(initialValues.pharmacyOrders);
    setDiagnosis(initialValues.diagnosis);
    setTreatmentPlan(initialValues.treatmentPlan);
    setReferralToSpecialists(initialValues.referralToSpecialists);
    setRecommendedFollowUp(initialValues.recommendedFollowUp);
    setDataTimeEncounterSubmitted(initialValues.dataTimeEncounterSubmitted);
    setEmployeeIDWhoSubmitted(initialValues.employeeIDWhoSubmitted);
    setErrors({});
  };
  const validations = {
    encounterDateTime: [],
    practitionerTypeSeen: [],
    patientComplaints: [],
    vitalSigns: [],
    practionerNotes: [],
    labOrders: [],
    pharmacyOrders: [],
    diagnosis: [],
    treatmentPlan: [],
    referralToSpecialists: [],
    recommendedFollowUp: [],
    dataTimeEncounterSubmitted: [],
    employeeIDWhoSubmitted: [],
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
          encounterDateTime,
          practitionerTypeSeen,
          patientComplaints,
          vitalSigns,
          practionerNotes,
          labOrders,
          pharmacyOrders,
          diagnosis,
          treatmentPlan,
          referralToSpecialists,
          recommendedFollowUp,
          dataTimeEncounterSubmitted,
          employeeIDWhoSubmitted,
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
          await DataStore.save(new MedicalEncounter(modelFields));
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
      {...getOverrideProps(overrides, "MedicalEncounterCreateForm")}
      {...rest}
    >
      <TextField
        label="Encounter date time"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={encounterDateTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime: value,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.encounterDateTime ?? value;
          }
          if (errors.encounterDateTime?.hasError) {
            runValidationTasks("encounterDateTime", value);
          }
          setEncounterDateTime(value);
        }}
        onBlur={() =>
          runValidationTasks("encounterDateTime", encounterDateTime)
        }
        errorMessage={errors.encounterDateTime?.errorMessage}
        hasError={errors.encounterDateTime?.hasError}
        {...getOverrideProps(overrides, "encounterDateTime")}
      ></TextField>
      <SelectField
        label="Practitioner type seen"
        placeholder="Please select an option"
        isDisabled={false}
        value={practitionerTypeSeen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen: value,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.practitionerTypeSeen ?? value;
          }
          if (errors.practitionerTypeSeen?.hasError) {
            runValidationTasks("practitionerTypeSeen", value);
          }
          setPractitionerTypeSeen(value);
        }}
        onBlur={() =>
          runValidationTasks("practitionerTypeSeen", practitionerTypeSeen)
        }
        errorMessage={errors.practitionerTypeSeen?.errorMessage}
        hasError={errors.practitionerTypeSeen?.hasError}
        {...getOverrideProps(overrides, "practitionerTypeSeen")}
      >
        <option
          children="Physician"
          value="PHYSICIAN"
          {...getOverrideProps(overrides, "practitionerTypeSeenoption0")}
        ></option>
        <option
          children="Nurse"
          value="NURSE"
          {...getOverrideProps(overrides, "practitionerTypeSeenoption1")}
        ></option>
        <option
          children="Physician assistant"
          value="PHYSICIAN_ASSISTANT"
          {...getOverrideProps(overrides, "practitionerTypeSeenoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Patient complaints"
        isRequired={false}
        isReadOnly={false}
        value={patientComplaints}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints: value,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.patientComplaints ?? value;
          }
          if (errors.patientComplaints?.hasError) {
            runValidationTasks("patientComplaints", value);
          }
          setPatientComplaints(value);
        }}
        onBlur={() =>
          runValidationTasks("patientComplaints", patientComplaints)
        }
        errorMessage={errors.patientComplaints?.errorMessage}
        hasError={errors.patientComplaints?.hasError}
        {...getOverrideProps(overrides, "patientComplaints")}
      ></TextField>
      <TextField
        label="Vital signs"
        isRequired={false}
        isReadOnly={false}
        value={vitalSigns}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns: value,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.vitalSigns ?? value;
          }
          if (errors.vitalSigns?.hasError) {
            runValidationTasks("vitalSigns", value);
          }
          setVitalSigns(value);
        }}
        onBlur={() => runValidationTasks("vitalSigns", vitalSigns)}
        errorMessage={errors.vitalSigns?.errorMessage}
        hasError={errors.vitalSigns?.hasError}
        {...getOverrideProps(overrides, "vitalSigns")}
      ></TextField>
      <TextField
        label="Practioner notes"
        isRequired={false}
        isReadOnly={false}
        value={practionerNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes: value,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.practionerNotes ?? value;
          }
          if (errors.practionerNotes?.hasError) {
            runValidationTasks("practionerNotes", value);
          }
          setPractionerNotes(value);
        }}
        onBlur={() => runValidationTasks("practionerNotes", practionerNotes)}
        errorMessage={errors.practionerNotes?.errorMessage}
        hasError={errors.practionerNotes?.hasError}
        {...getOverrideProps(overrides, "practionerNotes")}
      ></TextField>
      <TextField
        label="Lab orders"
        isRequired={false}
        isReadOnly={false}
        value={labOrders}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders: value,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.labOrders ?? value;
          }
          if (errors.labOrders?.hasError) {
            runValidationTasks("labOrders", value);
          }
          setLabOrders(value);
        }}
        onBlur={() => runValidationTasks("labOrders", labOrders)}
        errorMessage={errors.labOrders?.errorMessage}
        hasError={errors.labOrders?.hasError}
        {...getOverrideProps(overrides, "labOrders")}
      ></TextField>
      <TextField
        label="Pharmacy orders"
        isRequired={false}
        isReadOnly={false}
        value={pharmacyOrders}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders: value,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.pharmacyOrders ?? value;
          }
          if (errors.pharmacyOrders?.hasError) {
            runValidationTasks("pharmacyOrders", value);
          }
          setPharmacyOrders(value);
        }}
        onBlur={() => runValidationTasks("pharmacyOrders", pharmacyOrders)}
        errorMessage={errors.pharmacyOrders?.errorMessage}
        hasError={errors.pharmacyOrders?.hasError}
        {...getOverrideProps(overrides, "pharmacyOrders")}
      ></TextField>
      <TextField
        label="Diagnosis"
        isRequired={false}
        isReadOnly={false}
        value={diagnosis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis: value,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.diagnosis ?? value;
          }
          if (errors.diagnosis?.hasError) {
            runValidationTasks("diagnosis", value);
          }
          setDiagnosis(value);
        }}
        onBlur={() => runValidationTasks("diagnosis", diagnosis)}
        errorMessage={errors.diagnosis?.errorMessage}
        hasError={errors.diagnosis?.hasError}
        {...getOverrideProps(overrides, "diagnosis")}
      ></TextField>
      <TextField
        label="Treatment plan"
        isRequired={false}
        isReadOnly={false}
        value={treatmentPlan}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan: value,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.treatmentPlan ?? value;
          }
          if (errors.treatmentPlan?.hasError) {
            runValidationTasks("treatmentPlan", value);
          }
          setTreatmentPlan(value);
        }}
        onBlur={() => runValidationTasks("treatmentPlan", treatmentPlan)}
        errorMessage={errors.treatmentPlan?.errorMessage}
        hasError={errors.treatmentPlan?.hasError}
        {...getOverrideProps(overrides, "treatmentPlan")}
      ></TextField>
      <TextField
        label="Referral to specialists"
        isRequired={false}
        isReadOnly={false}
        value={referralToSpecialists}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists: value,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.referralToSpecialists ?? value;
          }
          if (errors.referralToSpecialists?.hasError) {
            runValidationTasks("referralToSpecialists", value);
          }
          setReferralToSpecialists(value);
        }}
        onBlur={() =>
          runValidationTasks("referralToSpecialists", referralToSpecialists)
        }
        errorMessage={errors.referralToSpecialists?.errorMessage}
        hasError={errors.referralToSpecialists?.hasError}
        {...getOverrideProps(overrides, "referralToSpecialists")}
      ></TextField>
      <TextField
        label="Recommended follow up"
        isRequired={false}
        isReadOnly={false}
        value={recommendedFollowUp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp: value,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.recommendedFollowUp ?? value;
          }
          if (errors.recommendedFollowUp?.hasError) {
            runValidationTasks("recommendedFollowUp", value);
          }
          setRecommendedFollowUp(value);
        }}
        onBlur={() =>
          runValidationTasks("recommendedFollowUp", recommendedFollowUp)
        }
        errorMessage={errors.recommendedFollowUp?.errorMessage}
        hasError={errors.recommendedFollowUp?.hasError}
        {...getOverrideProps(overrides, "recommendedFollowUp")}
      ></TextField>
      <TextField
        label="Data time encounter submitted"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dataTimeEncounterSubmitted}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted: value,
              employeeIDWhoSubmitted,
            };
            const result = onChange(modelFields);
            value = result?.dataTimeEncounterSubmitted ?? value;
          }
          if (errors.dataTimeEncounterSubmitted?.hasError) {
            runValidationTasks("dataTimeEncounterSubmitted", value);
          }
          setDataTimeEncounterSubmitted(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "dataTimeEncounterSubmitted",
            dataTimeEncounterSubmitted
          )
        }
        errorMessage={errors.dataTimeEncounterSubmitted?.errorMessage}
        hasError={errors.dataTimeEncounterSubmitted?.hasError}
        {...getOverrideProps(overrides, "dataTimeEncounterSubmitted")}
      ></TextField>
      <TextField
        label="Employee id who submitted"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={employeeIDWhoSubmitted}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              encounterDateTime,
              practitionerTypeSeen,
              patientComplaints,
              vitalSigns,
              practionerNotes,
              labOrders,
              pharmacyOrders,
              diagnosis,
              treatmentPlan,
              referralToSpecialists,
              recommendedFollowUp,
              dataTimeEncounterSubmitted,
              employeeIDWhoSubmitted: value,
            };
            const result = onChange(modelFields);
            value = result?.employeeIDWhoSubmitted ?? value;
          }
          if (errors.employeeIDWhoSubmitted?.hasError) {
            runValidationTasks("employeeIDWhoSubmitted", value);
          }
          setEmployeeIDWhoSubmitted(value);
        }}
        onBlur={() =>
          runValidationTasks("employeeIDWhoSubmitted", employeeIDWhoSubmitted)
        }
        errorMessage={errors.employeeIDWhoSubmitted?.errorMessage}
        hasError={errors.employeeIDWhoSubmitted?.hasError}
        {...getOverrideProps(overrides, "employeeIDWhoSubmitted")}
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
