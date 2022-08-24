import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import { StripeProvider } from '../stripeContext';
function Main() {
  return (
    <div >
      <StripeProvider>
        <NavBar />
        <SideBar />
        <Hero />
        {/* <SubMenu /> */}
      </StripeProvider>
    </div>
  );
}

export default Main;
