import { useAuthenticator } from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import '../styles/Navigation.css';
import { Navigation } from '../components/navigation/Navigation';

function Technician({ user }: { user: any }) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    console.log(user);
    return (
        <AwsUI.AppLayout
            navigation={<Navigation signOut={signOut}/>}
            content={<></>}
            tools={<>Tools panel</>}
            navigationOpen={navigationOpen}
            onNavigationChange={() => setNavigationOpen(!navigationOpen)}
            toolsOpen={toolsOpen}
        />
    );
}

export default Technician;
