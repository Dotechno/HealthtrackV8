import * as React from 'react';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { Routes, Route } from 'react-router-dom';
import customSignUpFields from '../components/authenticator/FormFields';
import { Authenticator } from '@aws-amplify/ui-react';
import Nurse from './Nurse';
import Technician from './Technician';
import Pharmacist from './Pharmacist';
import Physician from './Physician';
import { Link } from 'react-router-dom';
import { ColumnLayout, Container, Header } from '@awsui/components-react';

const components = {
    SignUp: { FormFields: customSignUpFields },
};

export interface RouterProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

function Nav() {
    return (
        <div>
            <Container
                header={
                    <Header variant="h2" description="Container description">
                        Container title
                    </Header>
                }
            >
                <ColumnLayout>
                    <Link to="/nurse">Nurse</Link>
                    <Link to="/physician">Physician</Link>
                    <Link to="/technician">Technician</Link>
                    <Link to="/physicianassistant">Physician Assistant</Link>
                    <Link to="/pharmacist">Pharmacist</Link>
                </ColumnLayout>
            </Container>
        </div>
    );
}

export function Router({ user }: RouterProps) {
    return (
        <>
            <Authenticator.Provider>
                <Authenticator components={components}>
                    {({ user }: RouterProps) => (
                        <Routes>
                            <Route path="/" element={<Nav />} />
                            <Route
                                path="/nurse"
                                element={<Nurse user={user} />}
                            />
                            <Route
                                path="/technician"
                                element={<Technician user={user} />}
                            />
                            <Route
                                path="/pharmacist"
                                element={<Pharmacist user={user} />}
                            />
                            <Route
                                path="/physician"
                                element={<Physician user={user} />}
                            />
                            <Route
                                path="/physicianassistant"
                                element={<Physician user={user} />}
                            />
                        </Routes>
                    )}
                </Authenticator>
            </Authenticator.Provider>
        </>
    );
}
