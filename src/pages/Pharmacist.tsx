import { Button, useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { AppLayout } from '@cloudscape-design/components';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';
import { graphqlOperation, GraphQLQuery } from '@aws-amplify/api';
import {
    ListPatientsQuery,
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
    const [labOrder, setLaborder] = useState<any>(undefined);
    const [medicalEncounters, SetMedicalEncounters] = useState<any>("intial string")

    // const CreateLabOrder = async () =>{
       // await API.graphql<GraphQLQuery<CreateLabOrderMutation>>(
          ///  graphqlOperation()

    // }
    const sampleLabOrder = {

    }
    
    async function CreateLabOrder(){
            
    }
    
    async function GetAllMedicalEncounters(){
        let appointments = await API.graphql<GraphQLQuery<any>>({
            query: queries.getMedicalEncounter,
        })
        SetMedicalEncounters(appointments)
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
                    <Button onClick={GetAllMedicalEncounters}>Get Medical Encounters</Button>
                    {/* {JSON.stringify(medicalEncounters)} */}
                    {JSON.stringify(medicalEncounters)}
                </>
            }
        />
    );
}
export default Pharmacist;
