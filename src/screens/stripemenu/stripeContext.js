import React, { useState, useContext } from 'react';
import sublinks from './data';

const StripeContext = React.createContext();

export const StripeProvider = ({ children }) => {
  const [isSideBarOpens, setIsSideBarOpens] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const openSideBar = () => {
    setIsSideBarOpens(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpens(false);
  };
  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <StripeContext.Provider
      value={{
        isSideBarOpens,
        isSubmenuOpen,
        openSideBar,
        closeSideBar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      { children }
    </StripeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(StripeContext);
};
