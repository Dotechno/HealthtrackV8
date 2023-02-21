import React from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import './index.css';
import { Amplify } from 'aws-amplify';
import {
  CheckboxField,
  SelectField,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import App from './view/technician/App';
import Nurse from './view/nurse/Nurse';
import Technician from './view/technician/Technician';
import Pharmacist from './view/pharmacist/Pharmacist';
import Physician from './view/physician/Physician';
import PhysicianAssistant from './view/physicianassistant/PhysicianAssistant';
import Admin from './view/admin/admin';

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Authenticator
        components={{
          SignUp: {
            FormFields() {
              const { validationErrors } = useAuthenticator();

              return (
                <>
                  {/* Re-use default `Authenticator.SignUp.FormFields` */}
                  <Authenticator.SignUp.FormFields />

                  <SelectField name="custom:role" label="Roles">
                    <option value="Physician">Physician</option>
                    <option value="PhysicianAssisstant">
                      Physician Assisstant
                    </option>
                    <option value="Nurse">Nurse</option>
                    <option value="Pharmacist">Pharmacist</option>
                    <option value="LabTechnician">Lab Technician</option>
                  </SelectField>

                  {/* Append & require Terms & Conditions field to sign up  */}
                  <CheckboxField
                    errorMessage={validationErrors.acknowledgement as string}
                    hasError={!!validationErrors.acknowledgement}
                    name="acknowledgement"
                    value="yes"
                    label="I agree with the Terms & Conditions"
                  />
                </>
              );
            },
          },
        }}
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
