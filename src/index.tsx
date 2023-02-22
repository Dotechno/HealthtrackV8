import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import './index.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Nurse from './view/nurse/Nurse';
import Pharmacist from './view/pharmacist/Pharmacist';
import Physician from './view/physician/Physician';
import PhysicianAssistant from './view/physicianassistant/PhysicianAssistant';
import customSignUpFields from './components/authenticator/FormFields';
import Admin from './view/admin/Admin';
import Technician from './view/technician/Technician';
import type { AmplifyUser } from '@aws-amplify/ui';

import { AuthEventData } from '@aws-amplify/ui';

Amplify.configure(awsExports);

const components = {
  SignUp: { FormFields: customSignUpFields },
}

interface HealthtrackUser {
  user?: AmplifyUser;
  signOut?: (event?: AuthEventData) => void;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Authenticator
        components={components}
      >
        {({ user }:HealthtrackUser):any =>  {

          // Get the custom role attribute
          switch (user?.attributes?.['custom:role'] as string) {
            case 'admin':
              return <Admin user={user} />;
            case 'Nurse':
              return <Nurse user={user} />;
            case 'LabTechnician':
              return <Technician user={user} />;
            case 'Pharmacist':
              return <Pharmacist user={user} />;
            case 'Physician':
              return <Physician user={user as AmplifyUser} />;
            case 'PhysicianAssistant':
              return <PhysicianAssistant user={user} />;
          }
        }}
      </Authenticator>
    </Authenticator.Provider>
  </React.StrictMode>
);
