import { useAuthenticator } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";
import { AppointmentPicker } from "react-appointment-picker";

function Technician({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  console.log(user)
  return (
    <AwsUI.AppLayout
      navigation={<></>}
      content={
              <>
              <button onClick={signOut}>Sign Out</button>
              </>
      }
      tools={
          <>Tools panel</>
      }
      navigationOpen={navigationOpen}
      onNavigationChange={()=>setNavigationOpen(!navigationOpen)}
      toolsOpen={toolsOpen}
    />
  );
}

export default Technician;