import { useAuthenticator } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";

function PhysicianAssistant({ user }: { user: any }) {
    const { signOut } = useAuthenticator((context) => [context.user]);
    const [navigationOpen, setNavigationOpen] = React.useState(false);
    const [isLoading, setLoading] = useState(false);
    


    console.log(user)
  
  
    return (
      <AwsUI.AppLayout
        navigation={<></>}
        content={
            <>Physician Assistant View</>
        }
      />
    );
  }

export default PhysicianAssistant;