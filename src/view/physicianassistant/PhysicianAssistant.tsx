import { Button, View, useAuthenticator } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";
import '../../styles/Navigation.css';

function PhysicianAssistant({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);

  console.log(user);

    console.log(user)
  
  
    return (
      <AwsUI.AppLayout
      navigation={<>
        <View className ="Account">
          Account: {user.attributes.email}
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

export default PhysicianAssistant;


