import React from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import './index.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Nurse from './view/nurse/Nurse';
import Pharmacist from './view/pharmacist/Pharmacist';
import Physician from './view/physician/Physician';
import PhysicianAssistant from './view/physicianassistant/PhysicianAssistant';
import Admin from './view/admin/admin';
import customSignUpFields from './components/authenticator/FormFields';

Amplify.configure(awsExports);

const components = {
  SignUp: { FormFields: customSignUpFields },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Authenticator
        components={components}
      >
        {({ user }): any => {

          // Get the custom role attribute
          // console.log(JSON.stringify(user));
          console.log(typeof user?.attributes?.['custom:role']);
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
              return <Physician user={user} />;
            case 'PhysicianAssistant':
              return <PhysicianAssistant user={user} />;
          }
        }}
      </Authenticator>
    </Authenticator.Provider>
  </React.StrictMode>
);
