import { Button, useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { AppLayout } from '@cloudscape-design/components';
import { API } from 'aws-amplify';
import { graphqlOperation, GraphQLQuery } from '@aws-amplify/api';
import {
    CreatePatientInput,
    CreatePatientMutation,
    DeletePatientMutation,
    ListPatientsQuery,
    UpdatePatientMutation,
} from 'src/API';
import {
    createPatient,
    deletePatient,
    updatePatient,
} from '../graphql/mutations';
import { listPatients } from '../graphql/queries';

export interface PharmacistProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

function Pharmacist({ user }: PharmacistProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    const [Patient, setPatient] = useState<any>(undefined);
    const Ken: CreatePatientInput = {
        patientName: 'Charlie',
        telephoneNumber: 'Lorem ipsum dolor sit amet',
        insuranceCarrierID: 'Lorem ipsum dolor sit amet',
        dateOfBirth: 'Lorem ipsum dolor sit amet',
        gender: 'Lorem ipsum dolor sit amet',
        primaryCarePhysician: 'Lorem ipsum dolor sit amet',
        listCurrentMedications: 'Lorem ipsum dolor sit amet',
        listScheduledAppointments: 'Lorem ipsum dolor sit amet',
    };

    const Create = async () => {
        await API.graphql<GraphQLQuery<CreatePatientMutation>>(
            graphqlOperation(createPatient, { input: Ken })
        );
    };

    const List = async () => {
        await API.graphql<GraphQLQuery<any>>({
            query: listPatients,
        });
    };
    async function LL() {
        console.log(Create);
        console.log(List);
        const ListName = List.data?.listPatients?.items;
        await setPatient(ListName);
        await console.log(ListName);
    }

    return (
        <AppLayout
            navigation={
                <>
                    <Navigation signOut={signOut} />
                </>
            }
            content={
                <>
                    <Button onClick={LL}></Button>
                </>
            }
        />
    );
}
export default Pharmacist;
