import {
    Autocomplete,
    Button,
    Heading,
    useAuthenticator,
    View,
} from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import '../styles/Navigation.css';
import type { AmplifyUser } from '@aws-amplify/ui';
import { Navigation } from '../components/navigation/Navigation';

export interface NurseProps {
    user?: AmplifyUser;
}

function Nurse({ user }: NurseProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = useState(false);
    console.log(user);

    return (
        <>
            <AwsUI.AppLayout
                navigation={
                    <>
                        <Navigation signOut={signOut}/>
                    </>
                }
                content={
                    <>
                        <Heading className="Title">Patient Recorder</Heading>

                        <Autocomplete
                            className="Search"
                            hasSearchIcon={true}
                            label="Search"
                            placeholder="Search for Patient, Patient ID, and Physcian Name"
                            hasSearchButton={false}
                            color="black"
                            options={[]}
                        />
                    </>
                }
            />
        </>
    );
}

export default Nurse;
