<<<<<<< Updated upstream
import { Button, useAuthenticator, View } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";
import { AppointmentPicker } from "react-appointment-picker";
=======
import { Button, useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import { AppointmentPicker } from 'react-appointment-picker';
import "../Navigation.css";
>>>>>>> Stashed changes

function Technician({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
<<<<<<< Updated upstream

  return (
    <AwsUI.AppLayout
      navigation={<>
        <View className ="One">
          Accout: {user.attributes.email}
        <br/>
          Role: {user.attributes['custom:role']}
        </View>
    

        <Button className = "Signout" onClick = {signOut}> Sign out </Button>
      
      </>}
      content={
              <>

              </>
      }
      tools={
          <>Tools panel</>
=======
  console.log(user);
  return (
    <AwsUI.AppLayout
      navigation={
        <>
          <View className="Account_Profile">
            Accout: {user.attributes.email}
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
          <button onClick={signOut}>Sign Out</button>
        </>
>>>>>>> Stashed changes
      }
      tools={<>Tools panel</>}
      navigationOpen={navigationOpen}
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      toolsOpen={toolsOpen}
    />
  );
}

export default Technician;
