/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServiceProvidedByClinic = /* GraphQL */ `
  mutation CreateServiceProvidedByClinic(
    $input: CreateServiceProvidedByClinicInput!
    $condition: ModelServiceProvidedByClinicConditionInput
  ) {
    createServiceProvidedByClinic(input: $input, condition: $condition) {
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
export const updateServiceProvidedByClinic = /* GraphQL */ `
  mutation UpdateServiceProvidedByClinic(
    $input: UpdateServiceProvidedByClinicInput!
    $condition: ModelServiceProvidedByClinicConditionInput
  ) {
    updateServiceProvidedByClinic(input: $input, condition: $condition) {
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
export const deleteServiceProvidedByClinic = /* GraphQL */ `
  mutation DeleteServiceProvidedByClinic(
    $input: DeleteServiceProvidedByClinicInput!
    $condition: ModelServiceProvidedByClinicConditionInput
  ) {
    deleteServiceProvidedByClinic(input: $input, condition: $condition) {
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
export const createLabTest = /* GraphQL */ `
  mutation CreateLabTest(
    $input: CreateLabTestInput!
    $condition: ModelLabTestConditionInput
  ) {
    createLabTest(input: $input, condition: $condition) {
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
export const updateLabTest = /* GraphQL */ `
  mutation UpdateLabTest(
    $input: UpdateLabTestInput!
    $condition: ModelLabTestConditionInput
  ) {
    updateLabTest(input: $input, condition: $condition) {
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
export const deleteLabTest = /* GraphQL */ `
  mutation DeleteLabTest(
    $input: DeleteLabTestInput!
    $condition: ModelLabTestConditionInput
  ) {
    deleteLabTest(input: $input, condition: $condition) {
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
export const createPrescription = /* GraphQL */ `
  mutation CreatePrescription(
    $input: CreatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    createPrescription(input: $input, condition: $condition) {
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
export const updatePrescription = /* GraphQL */ `
  mutation UpdatePrescription(
    $input: UpdatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    updatePrescription(input: $input, condition: $condition) {
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
export const deletePrescription = /* GraphQL */ `
  mutation DeletePrescription(
    $input: DeletePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    deletePrescription(input: $input, condition: $condition) {
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
export const createLabOrder = /* GraphQL */ `
  mutation CreateLabOrder(
    $input: CreateLabOrderInput!
    $condition: ModelLabOrderConditionInput
  ) {
    createLabOrder(input: $input, condition: $condition) {
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
export const updateLabOrder = /* GraphQL */ `
  mutation UpdateLabOrder(
    $input: UpdateLabOrderInput!
    $condition: ModelLabOrderConditionInput
  ) {
    updateLabOrder(input: $input, condition: $condition) {
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
export const deleteLabOrder = /* GraphQL */ `
  mutation DeleteLabOrder(
    $input: DeleteLabOrderInput!
    $condition: ModelLabOrderConditionInput
  ) {
    deleteLabOrder(input: $input, condition: $condition) {
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
export const createVitalSign = /* GraphQL */ `
  mutation CreateVitalSign(
    $input: CreateVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    createVitalSign(input: $input, condition: $condition) {
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
export const updateVitalSign = /* GraphQL */ `
  mutation UpdateVitalSign(
    $input: UpdateVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    updateVitalSign(input: $input, condition: $condition) {
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
export const deleteVitalSign = /* GraphQL */ `
  mutation DeleteVitalSign(
    $input: DeleteVitalSignInput!
    $condition: ModelVitalSignConditionInput
  ) {
    deleteVitalSign(input: $input, condition: $condition) {
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
export const createWorkSchedule = /* GraphQL */ `
  mutation CreateWorkSchedule(
    $input: CreateWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    createWorkSchedule(input: $input, condition: $condition) {
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
export const updateWorkSchedule = /* GraphQL */ `
  mutation UpdateWorkSchedule(
    $input: UpdateWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    updateWorkSchedule(input: $input, condition: $condition) {
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
export const deleteWorkSchedule = /* GraphQL */ `
  mutation DeleteWorkSchedule(
    $input: DeleteWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    deleteWorkSchedule(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createMedication = /* GraphQL */ `
  mutation CreateMedication(
    $input: CreateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    createMedication(input: $input, condition: $condition) {
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
export const updateMedication = /* GraphQL */ `
  mutation UpdateMedication(
    $input: UpdateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    updateMedication(input: $input, condition: $condition) {
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
export const deleteMedication = /* GraphQL */ `
  mutation DeleteMedication(
    $input: DeleteMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    deleteMedication(input: $input, condition: $condition) {
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
export const createPhysicianSchedule = /* GraphQL */ `
  mutation CreatePhysicianSchedule(
    $input: CreatePhysicianScheduleInput!
    $condition: ModelPhysicianScheduleConditionInput
  ) {
    createPhysicianSchedule(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePhysicianSchedule = /* GraphQL */ `
  mutation UpdatePhysicianSchedule(
    $input: UpdatePhysicianScheduleInput!
    $condition: ModelPhysicianScheduleConditionInput
  ) {
    updatePhysicianSchedule(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePhysicianSchedule = /* GraphQL */ `
  mutation DeletePhysicianSchedule(
    $input: DeletePhysicianScheduleInput!
    $condition: ModelPhysicianScheduleConditionInput
  ) {
    deletePhysicianSchedule(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPhysician = /* GraphQL */ `
  mutation CreatePhysician(
    $input: CreatePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    createPhysician(input: $input, condition: $condition) {
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
export const updatePhysician = /* GraphQL */ `
  mutation UpdatePhysician(
    $input: UpdatePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    updatePhysician(input: $input, condition: $condition) {
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
export const deletePhysician = /* GraphQL */ `
  mutation DeletePhysician(
    $input: DeletePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    deletePhysician(input: $input, condition: $condition) {
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
export const createInsuranceCarrier = /* GraphQL */ `
  mutation CreateInsuranceCarrier(
    $input: CreateInsuranceCarrierInput!
    $condition: ModelInsuranceCarrierConditionInput
  ) {
    createInsuranceCarrier(input: $input, condition: $condition) {
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
export const updateInsuranceCarrier = /* GraphQL */ `
  mutation UpdateInsuranceCarrier(
    $input: UpdateInsuranceCarrierInput!
    $condition: ModelInsuranceCarrierConditionInput
  ) {
    updateInsuranceCarrier(input: $input, condition: $condition) {
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
export const deleteInsuranceCarrier = /* GraphQL */ `
  mutation DeleteInsuranceCarrier(
    $input: DeleteInsuranceCarrierInput!
    $condition: ModelInsuranceCarrierConditionInput
  ) {
    deleteInsuranceCarrier(input: $input, condition: $condition) {
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
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
export const createEquipmentMaintenance = /* GraphQL */ `
  mutation CreateEquipmentMaintenance(
    $input: CreateEquipmentMaintenanceInput!
    $condition: ModelEquipmentMaintenanceConditionInput
  ) {
    createEquipmentMaintenance(input: $input, condition: $condition) {
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
export const updateEquipmentMaintenance = /* GraphQL */ `
  mutation UpdateEquipmentMaintenance(
    $input: UpdateEquipmentMaintenanceInput!
    $condition: ModelEquipmentMaintenanceConditionInput
  ) {
    updateEquipmentMaintenance(input: $input, condition: $condition) {
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
export const deleteEquipmentMaintenance = /* GraphQL */ `
  mutation DeleteEquipmentMaintenance(
    $input: DeleteEquipmentMaintenanceInput!
    $condition: ModelEquipmentMaintenanceConditionInput
  ) {
    deleteEquipmentMaintenance(input: $input, condition: $condition) {
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
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
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
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
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
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
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
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
