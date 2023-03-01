import {
    Autocomplete,
    Heading,
    useAuthenticator,
} from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import type { AmplifyUser } from '@aws-amplify/ui';
import { Navigation } from '../components/navigation/Navigation';
import '../styles/base.scss'
import { AppLayout } from '@cloudscape-design/components';

export interface NurseProps {
    user?: AmplifyUser;
}



function Nurse({ user }: NurseProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = useState(false);
    console.log(user?.attributes);

    return (
        <>
            <AppLayout
                headerSelector='#header'
                navigation={
                    <>
                        <Navigation signOut={signOut} user={user}/>
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
