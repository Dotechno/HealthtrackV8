import {
    Divider,
    Link,
    useAuthenticator,
} from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import Nurse from './Nurse';
import Pharmacist from './Pharmacist';
import Physician from './Physician';
import PhysicianAssistant from './PhysicianAssistant';
import Technician from './Technician';
import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { AppLayout } from '@cloudscape-design/components';

export interface AdminProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

function Admin({ user }: AdminProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [page, setPage] = useState<string>('nurse');

    function switchView() {
        switch (page) {
            case 'nurse':
                return (<Nurse user={user} />) as JSX.Element;
            case 'technician':
                return <Technician user={user} />;
            case 'pharmacist':
                return <Pharmacist user={user} />;
            case 'physician':
                return <Physician user={user} />;
            case 'physicianassistant':
                return <PhysicianAssistant user={user} />;
        }
    }
    function handleNurse() {
        setPage('nurse');
    }
    return (
        <AppLayout
            navigation={
                <>
                    <Link onClick={handleNurse}>Nurse View</Link>
                    <br />
                    <Link onClick={() => setPage('technician')}>
                        Technician View
                    </Link>
                    <br />
                    <Link onClick={() => setPage('pharmacist')}>
                        Pharmacist View
                    </Link>
                    <br />
                    <Link onClick={() => setPage('physician')}>
                        Physician View
                    </Link>
                    <br />
                    <Link onClick={() => setPage('physicianassistant')}>
                        Physician Assistant View
                    </Link>
                    <Divider />
                    <Link isDisabled onClick={() => alert('Delete')}>
                        Delete
                    </Link>
                    <Link onClick={() => alert('Attend a workshop')}>
                        Attend a workshop
                    </Link>
                </>
            }
            content={
                <>
                    {switchView()}
                </>
            }
            tools={<>Tools panel</>}
            navigationOpen={navigationOpen}
            onNavigationChange={() => setNavigationOpen(!navigationOpen)}
            toolsOpen={toolsOpen}
        />
    );
}
export default Admin;
