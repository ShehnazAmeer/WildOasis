import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import Button from "./Button";

const MenusContext = createContext();

export default function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [toggleBtnPosition, setToggleBtnPosition] = useState();
  
  function close() {
    setOpenId("")
  }
  function open(id) {
    setOpenId(id);
  }
  
  return (
    <MenusContext.Provider value={{
      openId,
      toggleBtnPosition,
      close,
      open,
      setToggleBtnPosition,
    }} >
      {children}
    </MenusContext.Provider>
  )
}

function Toggle({ children, id }) {
  const { openId, open, close, setToggleBtnPosition } = useContext(MenusContext);
  
  function handleClick(e) {
    console.log('toggle clicked');
    const rect = e.target.closest('button').getBoundingClientRect();
    setToggleBtnPosition({
      x: window.innerWidth - rect.width - rect.x+40,
      y: rect.y + rect.height-100 ,
    })

    openId === '' || openId !== id ? open(id) : close();
  }
  return (
    <Button category='menu' styles="text-3xl" onClick={handleClick} >
      {children}
    </Button>
  )
}

function List({ children, id}) {
  const { openId, toggleBtnPosition,close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return ( createPortal(
      <ul className={`fixed bg-stone-100 shadow-md `} ref={ref} style={{right:toggleBtnPosition.x, top:toggleBtnPosition.y}} >
      {children }
    </ul>,document.body)
    
  )
 }
function MenuButton({ children, onClick}) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    console.log('clicked');
    onClick?.();
    close();
  }
  return (
    <li>
      <Button onClick={handleClick} category='custom' styles="flex items-center gap-2 hover:bg-stone-300  w-1/1 text-left bg-none px-2 py-4 transition-all" >
        {children}
      </Button>
    </li>
  )
 }
function Menu({children}) { 
  return (
    <div className="flex items-center py-5 justify-center w-1/1 ">
      {children}
    </div>
  )
}

Menus.List = List;
Menus.Toggle = Toggle;
Menus.MenuButton = MenuButton;
Menus.Menu = Menu;
