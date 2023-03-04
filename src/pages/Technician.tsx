import { useAuthenticator } from '@aws-amplify/ui-react';
import React, { useState } from 'react';

import { Navigation } from '../components/navigation/Navigation';
import { DataStore } from '@aws-amplify/datastore';
import { MedicalEncounter, Patient } from '../models';
import PatientCreateForm from '../ui-components/PatientCreateForm';
import { AppLayout, Button } from '@cloudscape-design/components';

function Technician({ user }: { user: any }) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [patient, setPatient] = useState<any>(undefined);
    const [charliePatientID, setCharliePatientID] = useState<any>(undefined);
    // console.log(user);

    // const createMedicalPatient = async () => {
    //     await DataStore.save(
    //         new Patient({
    //             patientName: 'Lorem ipsum dolor sit amet',
    //             telephoneNumber: 'Lorem ipsum dolor sit amet',
    //             insuranceCarrierID: 'Lorem ipsum dolor sit amet',
    //             dateOfBirth: 'Lorem ipsum dolor sit amet',
    //             gender: 'Lorem ipsum dolor sit amet',
    //             primaryCarePhysician: 'Lorem ipsum dolor sit amet',
    //             listCurrentMedications: 'Lorem ipsum dolor sit amet',
    //             listScheduledAppointments: 'Lorem ipsum dolor sit amet',
    //             MedicalEncounters: [],
    //         })
    //     );
    // };

    // const queryAllPatient = async () => {
    //     const patients = await DataStore.query(Patient);
    //     setPatient(patients);
    //     console.log(patients);
    // };

    
    
    return (
        <AppLayout
            navigation={<Navigation signOut={signOut} />}
            content={
                <>
                    <PatientCreateForm />
                    <Button onClick={queryAllPatient}>Query Patient</Button>
                    
                </>
            }
            tools={<>Tools panel</>}
            navigationOpen={navigationOpen}
            onNavigationChange={() => setNavigationOpen(!navigationOpen)}
            toolsOpen={toolsOpen}
        />
    );
}

export default Technician;
