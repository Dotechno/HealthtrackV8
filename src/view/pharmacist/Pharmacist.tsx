import { Button, useAuthenticator, View } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";

function Pharmacist({ user }: { user: any }) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    


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
            <>Pharmacist View</>
        }
      />
    );
  }

export default Pharmacist;