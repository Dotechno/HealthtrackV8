import { Button, useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';
import { AppointmentPicker } from 'react-appointment-picker';
import { days } from './mockData';
import { AppointmentAttributesType } from 'react-appointment-picker';



function Physician({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);

<<<<<<< Updated upstream
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
      navigation={<>
        <View className ="One">
        Accout: {user.attributes.email}
        <br/>
        Role: {user.attributes['custom:role']}
        </View>
    

        <Button className = "Signout" onClick = {signOut}> Sign out </Button>
      
      </>}
=======
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
      onNavigationChange={() => setNavigationOpen(!navigationOpen)}
      navigation={
        <>
          <AwsUI.View className="Account_Profile">
            Accout: {user.attributes.email}
            <br />
            Role: {user.attributes['custom:role']}
          </AwsUI.View>

          <Button className="Signout" onClick={signOut}>
            {' '}
            Sign out{' '}
          </Button>
        </>
      }
>>>>>>> Stashed changes
      content={
        <>
        
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
