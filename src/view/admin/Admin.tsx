import {
  Divider,
  Link,
  Menu,
  MenuItem,
  Tabs,
  useAuthenticator,
} from '@aws-amplify/ui-react';
import React, { useEffect, useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';

import Nurse from '../nurse/Nurse';
import Technician from '../technician/Technician';
import Pharmacist from '../pharmacist/Pharmacist';
import Physician from '../physician/Physician';
import PhysicianAssistant from '../physicianassistant/PhysicianAssistant';

function Admin({ user }: { user: any }) {
  // manages signout
  const { signOut } = useAuthenticator((context) => [context.user]);

  // manages navigation
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  // allows navigation to switch view based on clicked
  const [page, setPage] = useState<string>('nurse');

  // @debug - prints user object to console
  console.log(user);

  // useEffect(() => { console.log(page) }, [page])


  // function for switching views
  function switchView() {
    switch (page) {
      case 'nurse':
        return <Nurse user={user} />;
      case 'technician':
        return <Technician user={user} />;
      case 'pharmacist':
        return <Pharmacist user={user} />;
      case 'physician':
        return <Physician user={user} />;
      case 'physicianassistant':
        return <PhysicianAssistant user={user} />;
    }
  }

  return (
    <AwsUI.AppLayout
      navigation={
        <>
          <Link onClick={() => setPage('nurse')}>Nurse View</Link>
          <br />
          <Link onClick={() => setPage('technician')}>Technician View</Link>
          <br />
          <Link onClick={() => setPage('pharmacist')}>Pharmacist View</Link>
          <br />
          <Link onClick={() => setPage('physician')}>Physician View</Link>
          <br />
          <Link onClick={() => setPage('physicianassistant')}>
            Physician Assistant View
          </Link>
          <Divider />
          <Link isDisabled onClick={() => alert('Delete')}>
            Delete
          </Link>
          <Link onClick={() => alert('Attend a workshop')}>
            Attend a workshop
          </Link>
        </>
      }
      content={
        <>


          {/* // logic for switching views */}
          {switchView()}
          {/* // Main page rendering */}

        </>
      }
      tools={<>Tools panel</>}
      navigationOpen={navigationOpen}
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      toolsOpen={toolsOpen}
    />
  );
}
export default Admin;
