import { HiXMark } from "react-icons/hi2";
import Button from "./Button";
import { createPortal } from "react-dom";
import { createContext, useState } from "react";

const ModalContext=createContext();
function GlobalModal({children}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
    function handleCloseModal() {
        setIsOpenModal(false);
    }
  return (
    <ModalContext.Provider value={{
      isOpenModal,
      onCloseModal:handleCloseModal,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export default function Modal({children,onCloseModal}) {
  return ( createPortal(
    <div className="fixed top-0 left-0 w-1/1 h-screen backdrop-blur-[3px] bg-stone-200/10 z-1 transition-all my-8">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-100 rounded-lg shadow-lg px-12 py-16 transition-all overflow-y-scroll">
        <Button category="close" styles="absolute right-9"onClick={onCloseModal} >
          <HiXMark/>
        </Button>
        {children}
      </div>
    </div>,document.body)

  )
}