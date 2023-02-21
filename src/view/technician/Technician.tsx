import { useAuthenticator } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";
import { AppointmentPicker } from "react-appointment-picker";

function Technician({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <AwsUI.AppLayout
      navigation={<></>}
      content={
              <>

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