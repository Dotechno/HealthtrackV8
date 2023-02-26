import React from 'react';
import ReactDOM from 'react-dom/client';
import awsExports from './aws-exports';
import './styles/index.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import customSignUpFields from './components/authenticator/FormFields';
import type { AmplifyUser } from '@aws-amplify/ui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthEventData } from '@aws-amplify/ui';
import { Router } from './pages/Router';
import Nurse from './pages/Nurse';
import Physician from './pages/Physician';
import Admin from './pages/Admin';
import PhysicianAssistant from './pages/PhysicianAssistant';
import Pharmacist from './pages/Pharmacist';


Amplify.configure(awsExports);

// const components = {
//     SignUp: { FormFields: customSignUpFields },
// };

interface HealthtrackUser {
    user?: AmplifyUser;
    signOut?: (event?: AuthEventData) => void;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Router />,
        children: [
          {
            path: '/nurse',
            element: <Nurse  />,
          },
          {
            path:'/physician',
            element: <Physician user={undefined}  />,
          },
          {
            path:'/technician',
            element: <Physician user={undefined}  />,
          },
          {
            path:'/physicianassistant',
            element: <PhysicianAssistant/>,
          },
          {
            path:'/pharmacist',
            element: <Pharmacist/>,
          },
          {
            path:'/admin',
            element: <Admin/>,
          }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// // Get the custom role attribute
// switch (user?.attributes?.['custom:role'] as string) {
//   case 'admin':
//     return <Admin user={user} />;
//   case 'Nurse':
//     return <Nurse user={user} />;
//   case 'LabTechnician':
//     return <Technician user={user} />;
//   case 'Pharmacist':
//     return <Pharmacist user={user} />;
//   case 'Physician':
//     return <Physician user={user as AmplifyUser} />;
//   case 'PhysicianAssistant':
//     return <PhysicianAssistant user={user} />;
// }
