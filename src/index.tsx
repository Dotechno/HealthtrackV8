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
          'address',
          'birthdate',
          'email',
          'gender',
          'name',
          'phone_number',
        ]}
        components={{
          SignUp: {
            FormFields() {
              const { validationErrors } = useAuthenticator();

              return (
                <>
                  {/* Re-use default `Authenticator.SignUp.FormFields` */}
                  <Authenticator.SignUp.FormFields />

                  <SelectField name="gender" label ="Sex">
                    <option value ="Male">Male</option>
                    <option value ="Female">Female</option>
                  </SelectField>

                  <TextField name="address" label="Address" type="text" />

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
  </React.StrictMode>
);
