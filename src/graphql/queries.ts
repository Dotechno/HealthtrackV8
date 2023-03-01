/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMedicalEncounter = /* GraphQL */ `
  query GetMedicalEncounter($id: ID!) {
    getMedicalEncounter(id: $id) {
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
export const listMedicalEncounters = /* GraphQL */ `
  query ListMedicalEncounters(
    $filter: ModelMedicalEncounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalEncounters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMedicalEncounters = /* GraphQL */ `
  query SyncMedicalEncounters(
    $filter: ModelMedicalEncounterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMedicalEncounters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const medicalEncountersByPatientID = /* GraphQL */ `
  query MedicalEncountersByPatientID(
    $patientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMedicalEncounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    medicalEncountersByPatientID(
      patientID: $patientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        patientName
        telephoneNumber
        insuranceCarrierID
        dateOfBirth
        gender
        primaryCarePhysician
        listCurrentMedications
        listScheduledAppointments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPatients = /* GraphQL */ `
  query SyncPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        patientName
        telephoneNumber
        insuranceCarrierID
        dateOfBirth
        gender
        primaryCarePhysician
        listCurrentMedications
        listScheduledAppointments
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
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
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncVendors = /* GraphQL */ `
  query SyncVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVendors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
