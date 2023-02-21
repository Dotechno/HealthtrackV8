import { useAuthenticator } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import { AppointmentPicker } from 'react-appointment-picker';
import { days } from './mockData';
import { AppointmentAttributesType } from 'react-appointment-picker';
import type { AmplifyUser } from '@aws-amplify/ui';

// Create a function that gets the current Monday in the format February 20, 2023 9:00:00 If it is Saturday or Sunday get the next Monday
const getCurrentDate = () => {
  const currentDate = new Date();

  // get the day of the currentDate object
  const day = currentDate.getDay();

  // if it is sunday or saturday then get set the currentDate to the next monday otherwise get the monday of the current week
  if (day === 0 || day === 6) {
    currentDate.setDate(currentDate.getDate() + ((1 + 7 - day) % 7));
  } else {
    currentDate.setDate(currentDate.getDate() - day + 1);
  }

  // format this into the format "February 20, 2023 9:00:00"
  return `${currentDate.toLocaleString('default', {
    month: 'long',
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()} 9:00:00`;
};

function Physician({ user }: { user: AmplifyUser }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [week, setWeek] = useState(days);

  const handleCheckboxChange = ({ detail }: any) => {
    setIsDate(detail.checked);
  };

  async function addAppointmentCallback({
    addedAppointment: { day, number, time, id },
    addCb,
  }: any): Promise<any> {
    
    // addCb changes the color of the box to green
    addCb(day, number, time, id);


    let newWeek = [...week];
    for (let i = 0; i < newWeek.length; i++) {
      for (let j = 0; j < newWeek[i].length; j++) {
        if (newWeek[i][j].id === id) {
          newWeek[i][j].isSelected = true;
        }
      }
    }
    setWeek(newWeek);
  }

  async function removeAppointmentCallback(
    { day, number, time, id }: any,
    removeCb: (arg0: any, arg1: any) => void
  ): Promise<any> {
    //removeCb changes the color of the box
    removeCb(day, number);
    let newWeek = [...week];

    for (let i = 0; i < newWeek.length; i++) {
      for (let j = 0; j < newWeek[i].length; j++) {
        if (newWeek[i][j].id === id && newWeek[i][j].isSelected === true) {
          newWeek[i][j].isSelected = false;
        }
      }
    }
    setWeek(newWeek);
  }

  return (
    <AwsUI.AppLayout
      navigationOpen={navigationOpen}
      onNavigationChange={()=>setNavigationOpen(!navigationOpen)}
      navigation={<></>}
      content={
        <>
          <AwsUI.Button onClick={signOut}>Sign Out</AwsUI.Button>

          <AwsUI.Checkbox
            ariaLabel="Show Day"
            checked={isDate}
            onChange={handleCheckboxChange}
          >
            Show Day
          </AwsUI.Checkbox>

          <AppointmentPicker
            addAppointmentCallback={addAppointmentCallback}
            removeAppointmentCallback={removeAppointmentCallback}
            days={days as AppointmentAttributesType[][]}
            initialDay={new Date(getCurrentDate())}
            unitTime={1_800_000}
            selectedByDefault={true}
            maxReservableAppointments={100}
            local="en-US"
            alpha={isDate}
            visible={true}
            loading={false}
          />
        </>
      }
    />
  );
}

export default Physician;
