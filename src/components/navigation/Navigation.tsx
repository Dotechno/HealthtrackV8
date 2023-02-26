import { AuthEventData } from '@aws-amplify/ui';
import { Button } from '@aws-amplify/ui-react';
import { SpaceBetween } from '@awsui/components-react';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavigationProps {
    signOut: (event: AuthEventData) => void;
}

export function Navigation({ signOut }: NavigationProps) {
    return (
        <div>
            <SpaceBetween direction="horizontal" size="xs">
                <Button>
                    <Link to="/">Home</Link>
                </Button>
                <Button className="Signout" onClick={signOut}>
                    Sign out
                </Button>
            </SpaceBetween>
        </div>
    );
}
