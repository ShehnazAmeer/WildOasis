// import styled from "styled-components";

import { HiXMark } from "react-icons/hi2";
import Button from "./Button";

// const StyledModal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-lg);
//   box-shadow: var(--shadow-lg);
//   padding: 3.2rem 4rem;
//   transition: all 0.5s;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;
//   &:hover {
//     background-color: var(--color-grey-100);
//   }
//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;
export default function Modal({children,onCloseModal}) {
  return (
    <div className="fixed top-0 left-0 w-1/1 h-screen backdrop-blur-[3px] bg-stone-200/10 z-1 transition-all my-8">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-100 rounded-lg shadow-lg px-12 py-16 transition-all overflow-y-scroll">
        <Button category="close" styles="absolute right-9"onClick={onCloseModal} >
          <HiXMark/>
        </Button>
        {children}
      </div>
    </div>

  )
}