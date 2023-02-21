import { useAuthenticator } from "@aws-amplify/ui-react";
import React, { useRef, useState } from "react";
import * as AwsUI from "@awsui/components-react";

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
                <><button onClick={()=>setToolsOpen(!toolsOpen)}>
                    <AwsUI.Icon name="share" />
                </button>
                    <AwsUI.Header variant="h2" description="Container description">
                                Container header
                            </AwsUI.Header></>
              }
              >
              {`Your email is ${user.attributes.email}`}
            </AwsUI.Container>
          </AwsUI.ContentLayout>
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