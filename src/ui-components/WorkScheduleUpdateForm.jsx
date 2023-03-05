/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { WorkSchedule } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function WorkScheduleUpdateForm(props) {
  const {
    id: idProp,
    workSchedule,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: [],
    time: [],
    physicianID: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [time, setTime] = React.useState(initialValues.time);
  const [physicianID, setPhysicianID] = React.useState(
    initialValues.physicianID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = workScheduleRecord
      ? { ...initialValues, ...workScheduleRecord }
      : initialValues;
    setDate(cleanValues.date ?? []);
    setCurrentDateValue("");
    setTime(cleanValues.time ?? []);
    setCurrentTimeValue(false);
    setPhysicianID(cleanValues.physicianID);
    setErrors({});
  };
  const [workScheduleRecord, setWorkScheduleRecord] =
    React.useState(workSchedule);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(WorkSchedule, idProp)
        : workSchedule;
      setWorkScheduleRecord(record);
    };
    queryData();
  }, [idProp, workSchedule]);
  React.useEffect(resetStateValues, [workScheduleRecord]);
  const [currentDateValue, setCurrentDateValue] = React.useState("");
  const dateRef = React.createRef();
  const [currentTimeValue, setCurrentTimeValue] = React.useState(false);
  const timeRef = React.createRef();
  const validations = {
    date: [],
    time: [],
    physicianID: [{ type: "Required" }],
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
          date,
          time,
          physicianID,
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
            WorkSchedule.copyOf(workScheduleRecord, (updated) => {
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
      {...getOverrideProps(overrides, "WorkScheduleUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              date: values,
              time,
              physicianID,
            };
            const result = onChange(modelFields);
            values = result?.date ?? values;
          }
          setDate(values);
          setCurrentDateValue("");
        }}
        currentFieldValue={currentDateValue}
        label={"Date"}
        items={date}
        hasError={errors.date?.hasError}
        setFieldValue={setCurrentDateValue}
        inputFieldRef={dateRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Date"
          isRequired={false}
          isReadOnly={false}
          type="date"
          value={currentDateValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.date?.hasError) {
              runValidationTasks("date", value);
            }
            setCurrentDateValue(value);
          }}
          onBlur={() => runValidationTasks("date", currentDateValue)}
          errorMessage={errors.date?.errorMessage}
          hasError={errors.date?.hasError}
          ref={dateRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "date")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              date,
              time: values,
              physicianID,
            };
            const result = onChange(modelFields);
            values = result?.time ?? values;
          }
          setTime(values);
          setCurrentTimeValue(false);
        }}
        currentFieldValue={currentTimeValue}
        label={"Time"}
        items={time}
        hasError={errors.time?.hasError}
        setFieldValue={setCurrentTimeValue}
        inputFieldRef={timeRef}
        defaultFieldValue={false}
      >
        <SwitchField
          label="Time"
          defaultChecked={false}
          isDisabled={false}
          isChecked={currentTimeValue}
          onChange={(e) => {
            let value = e.target.checked;
            if (errors.time?.hasError) {
              runValidationTasks("time", value);
            }
            setCurrentTimeValue(value);
          }}
          onBlur={() => runValidationTasks("time", currentTimeValue)}
          errorMessage={errors.time?.errorMessage}
          hasError={errors.time?.hasError}
          ref={timeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "time")}
        ></SwitchField>
      </ArrayField>
      <TextField
        label="Physician id"
        isRequired={true}
        isReadOnly={false}
        value={physicianID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              time,
              physicianID: value,
            };
            const result = onChange(modelFields);
            value = result?.physicianID ?? value;
          }
          if (errors.physicianID?.hasError) {
            runValidationTasks("physicianID", value);
          }
          setPhysicianID(value);
        }}
        onBlur={() => runValidationTasks("physicianID", physicianID)}
        errorMessage={errors.physicianID?.errorMessage}
        hasError={errors.physicianID?.hasError}
        {...getOverrideProps(overrides, "physicianID")}
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
          isDisabled={!(idProp || workSchedule)}
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
              !(idProp || workSchedule) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
