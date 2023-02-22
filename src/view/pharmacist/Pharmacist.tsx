import { Button, useAuthenticator, View } from '@aws-amplify/ui-react';
import React, { useRef, useState } from 'react';
import * as AwsUI from '@awsui/components-react';

function Pharmacist({ user }: { user: any }) {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoading, setLoading] = useState(false);


  return (
    <AwsUI.AppLayout
      navigation={
        <>
          <View className="Account">
            Account: {user.attributes.email}
            <br />
            Role: {user.attributes['custom:role']}
          </View>

          <Button className="Signout" onClick={signOut}>
            {' '}
            Sign out{' '}
          </Button>
        </>
      }
      content={<></>}
    />
  );
}
export default Pharmacist;
