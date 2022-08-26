import React, { useState, useContext } from 'react';
import sublinks from './data';

const StripeContext = React.createContext();

export const StripeProvider = ({ children }) => {
  const [isSideBarOpens, setIsSideBarOpens] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({});
  const [navSubLinks, setNavSubLinks] = useState([]);
  const openSideBar = () => {
    setIsSideBarOpens(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpens(false);
  };
  const openSubmenu = (page, navLinkPosition) => {
    // on hover what link name we have on that base finding the child sublinks on setting them to show in sublinks
    const newLinks = sublinks.find((li) => li.page === page);
    setNavSubLinks(newLinks.links);
    // setting submenu positioning
    setSubmenuPosition(navLinkPosition);
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
        submenuPosition,
        navSubLinks
      }}
    >
      {children}
    </StripeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(StripeContext);
};
