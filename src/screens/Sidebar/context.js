import React, { useState, useContext } from 'react';

const BarContext = React.createContext();

const BarProvider = ({ children }) => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSideBar = () => {
    setisSideBarOpen(true);
  };
  const closeSideBar = () => {
    setisSideBarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <BarContext.Provider
      value={{
        isSideBarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </BarContext.Provider>
  );
};
// Custom hook

export const useGlobalBarContext = () => {
  return useContext(BarContext);
};

export { BarContext, BarProvider };
