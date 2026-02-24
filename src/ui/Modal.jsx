import { createPortal } from "react-dom";
import { Children, cloneElement, createContext, isValidElement, useContext,  useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();

export default function Modal({children}) {
  const [openName, setOpenName] = useState('');

  function handleOpen(name) { 
    setOpenName(name)
  }
  function handleClose() {
    setOpenName("")
  }

  return (
    <ModalContext.Provider value={{
      openName,
      onOpenWindowName: handleOpen,
      onClose:handleClose,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

function Window({ children,name }) {
  const { openName, onClose: onClick } = useContext(ModalContext);
  const ref = useOutsideClick(onClick);

  if (openName !== name) return null;

  return ( createPortal(
    <div className="fixed top-0 left-0 w-1/1 h-screen backdrop-blur-[3px] bg-stone-200/10 z-1 transition-all my-8">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-100 rounded-lg shadow-lg px-12 py-16 transition-all overflow-y-scroll" ref={ref}>
        {
          Children.map(children, child => {
            if (!isValidElement(child)) return child;
            return cloneElement(child,{onClick})
          })
        }
      </div>
    </div>,document.body)
  )
}

function Open({ children,opens }) {
  const { onOpenWindowName} = useContext(ModalContext);
  
  return (
    <>
       {cloneElement(children,{onClick:()=>onOpenWindowName(opens)})} 
    </>
  )
}

Modal.Window = Window;
Modal.Open = Open;