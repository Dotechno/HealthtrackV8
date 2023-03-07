/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServiceProvidedByClinic = /* GraphQL */ `
  subscription OnCreateServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
  ) {
    onCreateServiceProvidedByClinic(filter: $filter) {
      id
      type
      description
      billableCostForService
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateServiceProvidedByClinic = /* GraphQL */ `
  subscription OnUpdateServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
  ) {
    onUpdateServiceProvidedByClinic(filter: $filter) {
      id
      type
      description
      billableCostForService
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteServiceProvidedByClinic = /* GraphQL */ `
  subscription OnDeleteServiceProvidedByClinic(
    $filter: ModelSubscriptionServiceProvidedByClinicFilterInput
  ) {
    onDeleteServiceProvidedByClinic(filter: $filter) {
      id
      type
      description
      billableCostForService
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLabTest = /* GraphQL */ `
  subscription OnCreateLabTest($filter: ModelSubscriptionLabTestFilterInput) {
    onCreateLabTest(filter: $filter) {
      id
      typeName
      rangeOfNotNormalResults
      laborderID
      rangeOfNormalResults
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLabTest = /* GraphQL */ `
  subscription OnUpdateLabTest($filter: ModelSubscriptionLabTestFilterInput) {
    onUpdateLabTest(filter: $filter) {
      id
      typeName
      rangeOfNotNormalResults
      laborderID
      rangeOfNormalResults
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLabTest = /* GraphQL */ `
  subscription OnDeleteLabTest($filter: ModelSubscriptionLabTestFilterInput) {
    onDeleteLabTest(filter: $filter) {
      id
      typeName
      rangeOfNotNormalResults
      laborderID
      rangeOfNormalResults
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePrescription = /* GraphQL */ `
  subscription OnCreatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onCreatePrescription(filter: $filter) {
      id
      physicianName
      prescribedMedication
      medicineDosage
      frequencyOfMedication
      datePrescriptionFilled
      pharmacistWhoFilledPrescription
      medicalencounterID
      Prescription2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionPrescription2ServiceProvidedByClinicId
    }
  }
`;
export const onUpdatePrescription = /* GraphQL */ `
  subscription OnUpdatePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onUpdatePrescription(filter: $filter) {
      id
      physicianName
      prescribedMedication
      medicineDosage
      frequencyOfMedication
      datePrescriptionFilled
      pharmacistWhoFilledPrescription
      medicalencounterID
      Prescription2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionPrescription2ServiceProvidedByClinicId
    }
  }
`;
export const onDeletePrescription = /* GraphQL */ `
  subscription OnDeletePrescription(
    $filter: ModelSubscriptionPrescriptionFilterInput
  ) {
    onDeletePrescription(filter: $filter) {
      id
      physicianName
      prescribedMedication
      medicineDosage
      frequencyOfMedication
      datePrescriptionFilled
      pharmacistWhoFilledPrescription
      medicalencounterID
      Prescription2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      prescriptionPrescription2ServiceProvidedByClinicId
    }
  }
`;
export const onCreateLabOrder = /* GraphQL */ `
  subscription OnCreateLabOrder($filter: ModelSubscriptionLabOrderFilterInput) {
    onCreateLabOrder(filter: $filter) {
      id
      physicianName
      type
      date
      technician
      result
      medicalencounterID
      LabOrder2ServiceProvideByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      LabOrder2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      labOrderLabOrder2ServiceProvideByClinicId
      labOrderLabOrder2ServiceProvidedByClinicId
    }
  }
`;
export const onUpdateLabOrder = /* GraphQL */ `
  subscription OnUpdateLabOrder($filter: ModelSubscriptionLabOrderFilterInput) {
    onUpdateLabOrder(filter: $filter) {
      id
      physicianName
      type
      date
      technician
      result
      medicalencounterID
      LabOrder2ServiceProvideByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      LabOrder2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      labOrderLabOrder2ServiceProvideByClinicId
      labOrderLabOrder2ServiceProvidedByClinicId
    }
  }
`;
export const onDeleteLabOrder = /* GraphQL */ `
  subscription OnDeleteLabOrder($filter: ModelSubscriptionLabOrderFilterInput) {
    onDeleteLabOrder(filter: $filter) {
      id
      physicianName
      type
      date
      technician
      result
      medicalencounterID
      LabOrder2ServiceProvideByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      LabOrder2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      labOrderLabOrder2ServiceProvideByClinicId
      labOrderLabOrder2ServiceProvidedByClinicId
    }
  }
`;
export const onCreateVitalSign = /* GraphQL */ `
  subscription OnCreateVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
  ) {
    onCreateVitalSign(filter: $filter) {
      id
      bodyTemperature
      pulseRate
      respirationRate
      bloodPressure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateVitalSign = /* GraphQL */ `
  subscription OnUpdateVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
  ) {
    onUpdateVitalSign(filter: $filter) {
      id
      bodyTemperature
      pulseRate
      respirationRate
      bloodPressure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteVitalSign = /* GraphQL */ `
  subscription OnDeleteVitalSign(
    $filter: ModelSubscriptionVitalSignFilterInput
  ) {
    onDeleteVitalSign(filter: $filter) {
      id
      bodyTemperature
      pulseRate
      respirationRate
      bloodPressure
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateWorkSchedule = /* GraphQL */ `
  subscription OnCreateWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
  ) {
    onCreateWorkSchedule(filter: $filter) {
      id
      date
      time
      physicianID
      appointmentScheduled {
        eventID
        isReserved
        period
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateWorkSchedule = /* GraphQL */ `
  subscription OnUpdateWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
  ) {
    onUpdateWorkSchedule(filter: $filter) {
      id
      date
      time
      physicianID
      appointmentScheduled {
        eventID
        isReserved
        period
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteWorkSchedule = /* GraphQL */ `
  subscription OnDeleteWorkSchedule(
    $filter: ModelSubscriptionWorkScheduleFilterInput
  ) {
    onDeleteWorkSchedule(filter: $filter) {
      id
      date
      time
      physicianID
      appointmentScheduled {
        eventID
        isReserved
        period
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
      id
      date
      type
      time {
        eventID
        isReserved
        period
      }
      patientID
      physicianID
      Appointment2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentAppointment2ServiceProvidedByClinicId
    }
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
      id
      date
      type
      time {
        eventID
        isReserved
        period
      }
      patientID
      physicianID
      Appointment2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentAppointment2ServiceProvidedByClinicId
    }
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
      id
      date
      type
      time {
        eventID
        isReserved
        period
      }
      patientID
      physicianID
      Appointment2ServiceProvidedByClinic {
        id
        type
        description
        billableCostForService
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentAppointment2ServiceProvidedByClinicId
    }
  }
`;
export const onCreateMedication = /* GraphQL */ `
  subscription OnCreateMedication(
    $filter: ModelSubscriptionMedicationFilterInput
  ) {
    onCreateMedication(filter: $filter) {
      id
      name
      useOfMedication
      recommendedDosage
      recommendedFrequencyOfUse
      potentialSideEffect
      drugThatMayReactAdversely
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMedication = /* GraphQL */ `
  subscription OnUpdateMedication(
    $filter: ModelSubscriptionMedicationFilterInput
  ) {
    onUpdateMedication(filter: $filter) {
      id
      name
      useOfMedication
      recommendedDosage
      recommendedFrequencyOfUse
      potentialSideEffect
      drugThatMayReactAdversely
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMedication = /* GraphQL */ `
  subscription OnDeleteMedication(
    $filter: ModelSubscriptionMedicationFilterInput
  ) {
    onDeleteMedication(filter: $filter) {
      id
      name
      useOfMedication
      recommendedDosage
      recommendedFrequencyOfUse
      potentialSideEffect
      drugThatMayReactAdversely
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePhysicianSchedule = /* GraphQL */ `
  subscription OnCreatePhysicianSchedule(
    $filter: ModelSubscriptionPhysicianScheduleFilterInput
  ) {
    onCreatePhysicianSchedule(filter: $filter) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePhysicianSchedule = /* GraphQL */ `
  subscription OnUpdatePhysicianSchedule(
    $filter: ModelSubscriptionPhysicianScheduleFilterInput
  ) {
    onUpdatePhysicianSchedule(filter: $filter) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePhysicianSchedule = /* GraphQL */ `
  subscription OnDeletePhysicianSchedule(
    $filter: ModelSubscriptionPhysicianScheduleFilterInput
  ) {
    onDeletePhysicianSchedule(filter: $filter) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePhysician = /* GraphQL */ `
  subscription OnCreatePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
  ) {
    onCreatePhysician(filter: $filter) {
      id
      name
      cellPhoneNumber
      schedule {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Physician2Appointment {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      physicianScheduleId
    }
  }
`;
export const onUpdatePhysician = /* GraphQL */ `
  subscription OnUpdatePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
  ) {
    onUpdatePhysician(filter: $filter) {
      id
      name
      cellPhoneNumber
      schedule {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Physician2Appointment {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      physicianScheduleId
    }
  }
`;
export const onDeletePhysician = /* GraphQL */ `
  subscription OnDeletePhysician(
    $filter: ModelSubscriptionPhysicianFilterInput
  ) {
    onDeletePhysician(filter: $filter) {
      id
      name
      cellPhoneNumber
      schedule {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Physician2Appointment {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      physicianScheduleId
    }
  }
`;
export const onCreateInsuranceCarrier = /* GraphQL */ `
  subscription OnCreateInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
  ) {
    onCreateInsuranceCarrier(filter: $filter) {
      id
      name
      address
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateInsuranceCarrier = /* GraphQL */ `
  subscription OnUpdateInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
  ) {
    onUpdateInsuranceCarrier(filter: $filter) {
      id
      name
      address
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteInsuranceCarrier = /* GraphQL */ `
  subscription OnDeleteInsuranceCarrier(
    $filter: ModelSubscriptionInsuranceCarrierFilterInput
  ) {
    onDeleteInsuranceCarrier(filter: $filter) {
      id
      name
      address
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
      MedicalEncounter2VitalSign {
        id
        bodyTemperature
        pulseRate
        respirationRate
        bloodPressure
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      MedicalEncounter2LabOrder {
        nextToken
        startedAt
      }
      MedicalEncounter2Prescription {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      medicalEncounterMedicalEncounter2VitalSignId
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
      MedicalEncounter2VitalSign {
        id
        bodyTemperature
        pulseRate
        respirationRate
        bloodPressure
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      MedicalEncounter2LabOrder {
        nextToken
        startedAt
      }
      MedicalEncounter2Prescription {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      medicalEncounterMedicalEncounter2VitalSignId
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
      MedicalEncounter2VitalSign {
        id
        bodyTemperature
        pulseRate
        respirationRate
        bloodPressure
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      MedicalEncounter2LabOrder {
        nextToken
        startedAt
      }
      MedicalEncounter2Prescription {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      medicalEncounterMedicalEncounter2VitalSignId
    }
  }
`;
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onCreatePatient(filter: $filter) {
      id
      name
      telephoneNumber
      insuranceCarrierID
      dateOfBirth
      gender
      primaryCarePhysician
      Patient2MedicalEncounters {
        nextToken
        startedAt
      }
      Patient2InsuranceCarrier {
        id
        name
        address
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Patient2Physician {
        id
        name
        cellPhoneNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        physicianScheduleId
      }
      Patient2Appointment {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientPatient2InsuranceCarrierId
      patientPatient2PhysicianId
    }
  }
`;
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient($filter: ModelSubscriptionPatientFilterInput) {
    onUpdatePatient(filter: $filter) {
      id
      name
      telephoneNumber
      insuranceCarrierID
      dateOfBirth
      gender
      primaryCarePhysician
      Patient2MedicalEncounters {
        nextToken
        startedAt
      }
      Patient2InsuranceCarrier {
        id
        name
        address
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Patient2Physician {
        id
        name
        cellPhoneNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        physicianScheduleId
      }
      Patient2Appointment {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientPatient2InsuranceCarrierId
      patientPatient2PhysicianId
    }
  }
`;
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient($filter: ModelSubscriptionPatientFilterInput) {
    onDeletePatient(filter: $filter) {
      id
      name
      telephoneNumber
      insuranceCarrierID
      dateOfBirth
      gender
      primaryCarePhysician
      Patient2MedicalEncounters {
        nextToken
        startedAt
      }
      Patient2InsuranceCarrier {
        id
        name
        address
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Patient2Physician {
        id
        name
        cellPhoneNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        physicianScheduleId
      }
      Patient2Appointment {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      patientPatient2InsuranceCarrierId
      patientPatient2PhysicianId
    }
  }
`;
export const onCreateEquipmentMaintenance = /* GraphQL */ `
  subscription OnCreateEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
  ) {
    onCreateEquipmentMaintenance(filter: $filter) {
      id
      type
      problem
      status
      resolution
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEquipmentMaintenance = /* GraphQL */ `
  subscription OnUpdateEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
  ) {
    onUpdateEquipmentMaintenance(filter: $filter) {
      id
      type
      problem
      status
      resolution
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEquipmentMaintenance = /* GraphQL */ `
  subscription OnDeleteEquipmentMaintenance(
    $filter: ModelSubscriptionEquipmentMaintenanceFilterInput
  ) {
    onDeleteEquipmentMaintenance(filter: $filter) {
      id
      type
      problem
      status
      resolution
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onCreateEquipment(filter: $filter) {
      id
      type
      description
      department
      owned
      startDate
      endDate
      leasingCompany
      datePurchased
      Equipment2EquipmentMaintenance {
        nextToken
        startedAt
      }
      Equipment2Vendor {
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
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onUpdateEquipment(filter: $filter) {
      id
      type
      description
      department
      owned
      startDate
      endDate
      leasingCompany
      datePurchased
      Equipment2EquipmentMaintenance {
        nextToken
        startedAt
      }
      Equipment2Vendor {
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
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment(
    $filter: ModelSubscriptionEquipmentFilterInput
  ) {
    onDeleteEquipment(filter: $filter) {
      id
      type
      description
      department
      owned
      startDate
      endDate
      leasingCompany
      datePurchased
      Equipment2EquipmentMaintenance {
        nextToken
        startedAt
      }
      Equipment2Vendor {
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
  subscription OnCreateVendor(
    $filter: ModelSubscriptionVendorFilterInput
    $owner: String
  ) {
    onCreateVendor(filter: $filter, owner: $owner) {
      id
      name
      address
      equipment
      preferred
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor(
    $filter: ModelSubscriptionVendorFilterInput
    $owner: String
  ) {
    onUpdateVendor(filter: $filter, owner: $owner) {
      id
      name
      address
      equipment
      preferred
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor(
    $filter: ModelSubscriptionVendorFilterInput
    $owner: String
  ) {
    onDeleteVendor(filter: $filter, owner: $owner) {
      id
      name
      address
      equipment
      preferred
      equipmentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
