import { useEffect, useRef } from "react";

export default function useOutsideClick(onClick, listenCapturningType = true) {
  const ref = useRef();

  useEffect(function () {
    function handleClick(e) {
      if(ref.current && !ref.current.contains(e.target)) onClick()
     }

    document.addEventListener('click', handleClick,listenCapturningType);
    
    return ()=>document.removeEventListener('click', handleClick,listenCapturningType);  
  }, [onClick,listenCapturningType])
    
    return ref;
}