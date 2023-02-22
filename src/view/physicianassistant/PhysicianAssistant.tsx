<<<<<<< Updated upstream
import { Button, useAuthenticator, View } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";
=======
import { useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import { Button } from '@awsui/components-react';
>>>>>>> Stashed changes

function PhysicianAssistant({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);

  console.log(user);

<<<<<<< Updated upstream
    console.log(user)
  
  
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
            <>Physician Assistant View</>
        }
      />
    );
  }
=======
  return (
    <AwsUI.AppLayout
      navigation={
        <>
          <View className="Account_Profile">
            Accout: {user.attributes.email}
            <br />
            Role: {user.attributes['custom:role']}
          </View>
>>>>>>> Stashed changes

          <Button className="Signout" onClick={signOut}>
            {' '}
            Sign out{' '}
          </Button>
        </>
      }
      content={<>Physician Assistant View</>}
    />
  );
}

export default PhysicianAssistant;
