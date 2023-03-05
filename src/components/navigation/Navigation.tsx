import { AuthEventData } from '@aws-amplify/ui';
import { Button } from '@aws-amplify/ui-react';
import SideNavigation from "@cloudscape-design/components/side-navigation";
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { AmplifyUser } from '@aws-amplify/ui';
import { Badge, SpaceBetween } from '@cloudscape-design/components';

export interface NavigationProps {
    signOut: (event: AuthEventData) => void;
    user?: AmplifyUser;
}
export function Navigation({ signOut, user }: NavigationProps) {
    const [activeHref,setActiveHref] = React.useState("#/page1");
    return (
        <SideNavigation
        
        header={{ href: "#", text: "Service name" }}
        onFollow={event => {
            setActiveHref(event.detail.href);
        }}
        items={[
          { type: "link", text: "Admin", href: "../admin" },
          { type: "link", text: "Patient Recorder", href: "./nurse/patient" },
          { type: "link", text: "Page 3", href: "#/page3" },
          { type: "link", text: "Page 4", href: "#/page4" },
          { type: "divider" },
          {
            type: "link",
            text: "Notifications",
            href: "#/notifications",
            info: <Badge color="red">23</Badge>
          },
          {
            type: "link",
            text: "Documentation",
            href: "https://example.com",
            external: true
          }
        ]}
      />
    );
    }
    
