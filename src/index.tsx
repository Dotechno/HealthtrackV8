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
import App from './App';

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
                    <option value="PhysicianAssisstant">Physician Assisstant</option>
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
            }
          }
        }}
      >
        {({ user }): any => 
         
           <App user={user} />
        }
      </Authenticator>
    </Authenticator.Provider>
  </React.StrictMode>
);
