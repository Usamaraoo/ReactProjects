import SideBarHome from './SideBarHome';
import SideBar from './SideBar';
import Modal from './Modal';
import { BarProvider } from './context';
function SideBarMain() {
  return (
    <>
      <BarProvider>
        <SideBar />
        <Modal />
        <SideBarHome />
      </BarProvider>
    </>
  );
}

export default SideBarMain;
