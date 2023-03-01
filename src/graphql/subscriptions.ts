/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMedicalEncounter = /* GraphQL */ `
  subscription OnCreateMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
  ) {
    onCreateMedicalEncounter(filter: $filter) {
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
export const onUpdateMedicalEncounter = /* GraphQL */ `
  subscription OnUpdateMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
  ) {
    onUpdateMedicalEncounter(filter: $filter) {
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
export const onDeleteMedicalEncounter = /* GraphQL */ `
  subscription OnDeleteMedicalEncounter(
    $filter: ModelSubscriptionMedicalEncounterFilterInput
  ) {
    onDeleteMedicalEncounter(filter: $filter) {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onCreatePatient(filter: $filter) {
      id
      patientName
      telelphoneNumber
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onUpdatePatient(filter: $filter) {
      id
      patientName
      telelphoneNumber
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
    onDeletePatient(filter: $filter) {
      id
      patientName
      telelphoneNumber
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor($filter: ModelSubscriptionVendorFilterInput) {
    onCreateVendor(filter: $filter) {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor($filter: ModelSubscriptionVendorFilterInput) {
    onUpdateVendor(filter: $filter) {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor($filter: ModelSubscriptionVendorFilterInput) {
    onDeleteVendor(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
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
