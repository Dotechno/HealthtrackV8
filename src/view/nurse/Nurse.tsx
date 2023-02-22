import {
  Autocomplete,
  Button,
  Heading,
  
  useAuthenticator,

  View,
} from '@aws-amplify/ui-react';
import React, { useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import '../../styles/Navigation.css';




function Nurse({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = useState(false);
    console.log(user);

    return (
      <>
      <AwsUI.AppLayout
        navigation={
          <>
            <View className="Account">
              Account: {user.attributes.email}
              <br />
              Role: {user.attributes['custom:role']}
            </View>

            <Button className="Signout" onClick={signOut}>
              {' '}
              Sign out{' '}
            </Button>
          </>
        }
        content={
          <>
            <Heading className="Title">Patient Recorder</Heading>

            <Autocomplete
              className="Search"
              hasSearchIcon={true}
              label="Search"
              placeholder="Search for Patient, Patient ID, and Physcian Name"
              hasSearchButton={false}
              color="black"
              options={[]}
              />

            <View></View>
          </>
        }
        />
        </>
    );
  }


}


export default Nurse;


