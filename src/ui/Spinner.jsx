// import styled, { keyframes } from "styled-components";

// const rotate = keyframe`
// //   to {
// //     transform: rotate(1turn)
// //   }
// // `;

// const Spinner = styled.div`
//   margin: 4.8rem auto;

//   width: 6.4rem;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
//       top/10px 10px no-repeat,
//     conic-gradient(#0000 30%, var(--color-brand-600));
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
//   animation: ${rotate} 1.5s infinite linear;
// `;

export default function Spinner() {
  return (
    <div
      className="h-full flex justify-center items-center "
    >
      <div
        className="w-64 h-64 rounded-full animate-spin bg-[conic-gradient(blue_0deg,transparent_40deg,blue_360deg)]
        [-webkit-mask:radial-gradient(farthest-side,#0000_calc(100%-8px),#000_0)]
        [mask:radial-gradient(farthest-side,#0000_calc(100%-8px),#000_0)]"
      >
      </div>
    </div>
  )
}
