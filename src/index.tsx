import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import './index.css';
import * as AwsUI from '@awsui/components-react';
import { Amplify } from 'aws-amplify';
import { CheckboxField, SelectField, TextField, useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

//hi

function App({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);



  return (
    <AwsUI.AppLayout
      navigation={<></>}
      content={
        <AwsUI.ContentLayout
          header={
            <AwsUI.SpaceBetween size="m">
              <AwsUI.Header
                variant="h1"
                info={<AwsUI.Link>Info</AwsUI.Link>}
                description="This is a generic description used in the header."
                actions={
                  <AwsUI.Button onClick={signOut} variant="primary">
                    Sign Out
                  </AwsUI.Button>
                }
              >
                Healthtrack
              </AwsUI.Header>

              <AwsUI.Alert>This is a generic alert.</AwsUI.Alert>
            </AwsUI.SpaceBetween>
          }
        >
          <AwsUI.Container
            header={
              <AwsUI.Header variant="h2" description="Container description">
                Container header
              </AwsUI.Header>
            }
          >
            {`Your email is ${user.attributes.email}`}
          </AwsUI.Container>
        </AwsUI.ContentLayout>
      }
    />
  );
}

const components = {

}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Authenticator
        signUpAttributes={[
          'email',

          //   // Unwanted fields can be removed from the sign up form:
          //   // 'gender',
          //   // 'address',
          //   // 'birthdate',
        ]}
        components={{
          SignUp: {
            FormFields() {
              const { validationErrors } = useAuthenticator();

              return (
                <>
                  {/* https://ui.docs.amplify.aws/react/components/textfield */}
                  <TextField
                    name="username"
                    descriptiveText="Please enter your username"
                    label="Username"
                    errorMessage={validationErrors.username as string}
                  />

                  {/* Re-use default `Authenticator.SignUp.FormFields` */}
                  <Authenticator.SignUp.FormFields />

                  <SelectField name="role" label="Roles">
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
        {({ user }) => <App user={user} />}
      </Authenticator>
    </Authenticator.Provider>
  </React.StrictMode >
);
