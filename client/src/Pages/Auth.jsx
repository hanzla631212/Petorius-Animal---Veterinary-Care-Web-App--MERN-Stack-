import React from 'react';
import PageHeader from '../Components/PageHeader/PageHeader';
import Auth_Component from '../Components/Auth/Auth_Component';

function Auth() {
  return (
    <div>
      <PageHeader title="LOGIN / SIGNUP" />
      <Auth_Component/>
      {/* The rest of your Auth page content */}
    </div>
  );
}

export default Auth;
