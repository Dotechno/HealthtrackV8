/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMedicalEncounter = /* GraphQL */ `
  mutation CreateMedicalEncounter(
    $input: CreateMedicalEncounterInput!
    $condition: ModelMedicalEncounterConditionInput
  ) {
    createMedicalEncounter(input: $input, condition: $condition) {
      id
      encounterDateTime
      practitionerTypeSeen
      patientComplaints
      vitalSigns
      practionerNotes
      labOrders
      pharmacyOrders
      diagnosis
      treatmentPlan
      referralToSpecialists
      recommendedFollowUp
      dataTimeEncounterSubmitted
      employeeIDWhoSubmitted
      patientID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMedicalEncounter = /* GraphQL */ `
  mutation UpdateMedicalEncounter(
    $input: UpdateMedicalEncounterInput!
    $condition: ModelMedicalEncounterConditionInput
  ) {
    updateMedicalEncounter(input: $input, condition: $condition) {
      id
      encounterDateTime
      practitionerTypeSeen
      patientComplaints
      vitalSigns
      practionerNotes
      labOrders
      pharmacyOrders
      diagnosis
      treatmentPlan
      referralToSpecialists
      recommendedFollowUp
      dataTimeEncounterSubmitted
      employeeIDWhoSubmitted
      patientID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMedicalEncounter = /* GraphQL */ `
  mutation DeleteMedicalEncounter(
    $input: DeleteMedicalEncounterInput!
    $condition: ModelMedicalEncounterConditionInput
  ) {
    deleteMedicalEncounter(input: $input, condition: $condition) {
      id
      encounterDateTime
      practitionerTypeSeen
      patientComplaints
      vitalSigns
      practionerNotes
      labOrders
      pharmacyOrders
      diagnosis
      treatmentPlan
      referralToSpecialists
      recommendedFollowUp
      dataTimeEncounterSubmitted
      employeeIDWhoSubmitted
      patientID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      patientName
      telephoneNumber
      insuranceCarrierID
      dateOfBirth
      gender
      primaryCarePhysician
      listCurrentMedications
      listScheduledAppointments
      MedicalEncounters {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      patientName
      telephoneNumber
      insuranceCarrierID
      dateOfBirth
      gender
      primaryCarePhysician
      listCurrentMedications
      listScheduledAppointments
      MedicalEncounters {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      patientName
      telephoneNumber
      insuranceCarrierID
      dateOfBirth
      gender
      primaryCarePhysician
      listCurrentMedications
      listScheduledAppointments
      MedicalEncounters {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
      id
      vendorName
      vendorAddress
      typeOfEquipment
      preferredVendor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
      id
      vendorName
      vendorAddress
      typeOfEquipment
      preferredVendor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
      id
      vendorName
      vendorAddress
      typeOfEquipment
      preferredVendor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
