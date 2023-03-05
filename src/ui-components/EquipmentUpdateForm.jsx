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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Equipment } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EquipmentUpdateForm(props) {
  const {
    id: idProp,
    equipment,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    description: "",
    department: "",
    owned: false,
    startDate: "",
    endDate: "",
    leasingCompany: "",
    datePurchased: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [department, setDepartment] = React.useState(initialValues.department);
  const [owned, setOwned] = React.useState(initialValues.owned);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [endDate, setEndDate] = React.useState(initialValues.endDate);
  const [leasingCompany, setLeasingCompany] = React.useState(
    initialValues.leasingCompany
  );
  const [datePurchased, setDatePurchased] = React.useState(
    initialValues.datePurchased
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = equipmentRecord
      ? { ...initialValues, ...equipmentRecord }
      : initialValues;
    setType(cleanValues.type);
    setDescription(cleanValues.description);
    setDepartment(cleanValues.department);
    setOwned(cleanValues.owned);
    setStartDate(cleanValues.startDate);
    setEndDate(cleanValues.endDate);
    setLeasingCompany(cleanValues.leasingCompany);
    setDatePurchased(cleanValues.datePurchased);
    setErrors({});
  };
  const [equipmentRecord, setEquipmentRecord] = React.useState(equipment);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Equipment, idProp)
        : equipment;
      setEquipmentRecord(record);
    };
    queryData();
  }, [idProp, equipment]);
  React.useEffect(resetStateValues, [equipmentRecord]);
  const validations = {
    type: [],
    description: [],
    department: [],
    owned: [],
    startDate: [],
    endDate: [],
    leasingCompany: [],
    datePurchased: [],
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
          type,
          description,
          department,
          owned,
          startDate,
          endDate,
          leasingCompany,
          datePurchased,
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
            Equipment.copyOf(equipmentRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EquipmentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              description,
              department,
              owned,
              startDate,
              endDate,
              leasingCompany,
              datePurchased,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description: value,
              department,
              owned,
              startDate,
              endDate,
              leasingCompany,
              datePurchased,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Department"
        isRequired={false}
        isReadOnly={false}
        value={department}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description,
              department: value,
              owned,
              startDate,
              endDate,
              leasingCompany,
              datePurchased,
            };
            const result = onChange(modelFields);
            value = result?.department ?? value;
          }
          if (errors.department?.hasError) {
            runValidationTasks("department", value);
          }
          setDepartment(value);
        }}
        onBlur={() => runValidationTasks("department", department)}
        errorMessage={errors.department?.errorMessage}
        hasError={errors.department?.hasError}
        {...getOverrideProps(overrides, "department")}
      ></TextField>
      <SwitchField
        label="Owned"
        defaultChecked={false}
        isDisabled={false}
        isChecked={owned}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              description,
              department,
              owned: value,
              startDate,
              endDate,
              leasingCompany,
              datePurchased,
            };
            const result = onChange(modelFields);
            value = result?.owned ?? value;
          }
          if (errors.owned?.hasError) {
            runValidationTasks("owned", value);
          }
          setOwned(value);
        }}
        onBlur={() => runValidationTasks("owned", owned)}
        errorMessage={errors.owned?.errorMessage}
        hasError={errors.owned?.hasError}
        {...getOverrideProps(overrides, "owned")}
      ></SwitchField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description,
              department,
              owned,
              startDate: value,
              endDate,
              leasingCompany,
              datePurchased,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={endDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description,
              department,
              owned,
              startDate,
              endDate: value,
              leasingCompany,
              datePurchased,
            };
            const result = onChange(modelFields);
            value = result?.endDate ?? value;
          }
          if (errors.endDate?.hasError) {
            runValidationTasks("endDate", value);
          }
          setEndDate(value);
        }}
        onBlur={() => runValidationTasks("endDate", endDate)}
        errorMessage={errors.endDate?.errorMessage}
        hasError={errors.endDate?.hasError}
        {...getOverrideProps(overrides, "endDate")}
      ></TextField>
      <TextField
        label="Leasing company"
        isRequired={false}
        isReadOnly={false}
        value={leasingCompany}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description,
              department,
              owned,
              startDate,
              endDate,
              leasingCompany: value,
              datePurchased,
            };
            const result = onChange(modelFields);
            value = result?.leasingCompany ?? value;
          }
          if (errors.leasingCompany?.hasError) {
            runValidationTasks("leasingCompany", value);
          }
          setLeasingCompany(value);
        }}
        onBlur={() => runValidationTasks("leasingCompany", leasingCompany)}
        errorMessage={errors.leasingCompany?.errorMessage}
        hasError={errors.leasingCompany?.hasError}
        {...getOverrideProps(overrides, "leasingCompany")}
      ></TextField>
      <TextField
        label="Date purchased"
        isRequired={false}
        isReadOnly={false}
        value={datePurchased}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              description,
              department,
              owned,
              startDate,
              endDate,
              leasingCompany,
              datePurchased: value,
            };
            const result = onChange(modelFields);
            value = result?.datePurchased ?? value;
          }
          if (errors.datePurchased?.hasError) {
            runValidationTasks("datePurchased", value);
          }
          setDatePurchased(value);
        }}
        onBlur={() => runValidationTasks("datePurchased", datePurchased)}
        errorMessage={errors.datePurchased?.errorMessage}
        hasError={errors.datePurchased?.hasError}
        {...getOverrideProps(overrides, "datePurchased")}
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
          isDisabled={!(idProp || equipment)}
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
              !(idProp || equipment) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
