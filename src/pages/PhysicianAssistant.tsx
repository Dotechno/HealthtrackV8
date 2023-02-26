import { Button, View, useAuthenticator } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';

import type { AmplifyUser, AuthEventData } from '@aws-amplify/ui';
import { Navigation } from '../components/navigation/Navigation';

export interface PhysicianAssistantProps {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

function PhysicianAssistant({ user }: PhysicianAssistantProps) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);

    return (
        <AwsUI.AppLayout
            navigation={
                <>
                   <Navigation signOut={signOut}/>
                </>
            }
            content={<>Physician Assistant View</>}
        />
    );
}

export default PhysicianAssistant;
