import { useAuthenticator } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import { AppointmentPicker } from 'react-appointment-picker';
import { days } from './mockData';
import { AppointmentAttributesType } from 'react-appointment-picker';



function Physician({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);

  const addAppointment = (appointment: {
    id: number | string;
    number: number | string;
    isSelected: boolean;
    isReserved: boolean;
    period: number;
  }) => {
    
  };

  return (
    <AwsUI.AppLayout
      navigation={<></>}
      content={
        <>
        <button onClick={signOut}>Sign Out</button>
          <AppointmentPicker

            days={days as AppointmentAttributesType[][]}
            initialDay={new Date('February 20, 2023 9:00:00')}
            unitTime={1_800_000}
            selectedByDefault={true}
            local="en-US"
          />
        </>
      }
    />
  );
}

export default Physician;
