<<<<<<< Updated upstream
import { Autocomplete, Button, Heading, Link, SearchField, TabItem, Tabs, useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import '../Navigation.css';
import { Header } from '@awsui/components-react';
=======
import { Heading, useAuthenticator } from '@aws-amplify/ui-react';
import {
  Autocomplete,
  Button,
  View,
} from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';

import '../Navigation.css';
>>>>>>> Stashed changes
function Nurse({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = useState(false);
  function Nurse({ user }: { user: any }) {
    console.log(user);

    return (
      <AwsUI.AppLayout navigation={<></>} content={<>Technician View</>} />
    );
    return (
      <AwsUI.AppLayout
        navigation={
          <>
            <View className="Account_Profile">
              Accout: {user.attributes.email}
              <br />
              Role: {user.attributes['custom:role']}
            </View>

<<<<<<< Updated upstream
  return <AwsUI.AppLayout 
  
  
  navigation={<>
  <View className ="One">
    Accout: {user.attributes.email}
    <br/>
    Role: {user.attributes['custom:role']}
  </View>
    

  <Button className = "Signout" onClick = {signOut}> Sign out </Button>
  </>}
  
  content={<>
  <Heading className = "hello">
      Patient Recorder 
    
  </Heading>
  
  <Autocomplete
      className="Search"
      hasSearchIcon={true}
      label="Search"
      placeholder='Search for Patient, Patient ID, and Physcian Name'
      hasSearchButton={false}
      color="black" options={[]}  />
  
  <View ></View>
  
  </>} />;
=======
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
    );
  }
>>>>>>> Stashed changes
}
export default Nurse;
