// import styled from "styled-components";

// const StyledCheckbox = styled.div`
//   display: flex;
//   gap: 1.6rem;

//   & input[type="checkbox"] {
//     height: 2.4rem;
//     width: 2.4rem;
//     outline-offset: 2px;
//     transform-origin: 0;
//     accent-color: var(--color-brand-600);
//   }

//   & input[type="checkbox"]:disabled {
//     accent-color: var(--color-brand-600);
//   }

//   & label {
//     flex: 1;

//     display: flex;
//     align-items: center;
//     gap: 0.8rem;
//   }
// `;

export default function Checkbox({type,children,confirmPaid,setConfirmPaid,disabled=false,id}) {
  return (
    <div className="flex gap-7" >
      <input
        className= {` ${type==='checkbox'? 'h-9 w-9 outline-2 origin-0 accent-blue-600 text-blue-50 ':''}`}
        type={type}
        value={confirmPaid}
        onChange={(e) => setConfirmPaid(e.target.value)}
        disabled={disabled}
      />
      <label
        className="flex-1 flex items-center gap-3"
        htmlFor={!disabled ? id : ''} > {children} </label>
    </div>
  )
}