// import styled from "styled-components";

// const StyledDataItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.6rem;
//   padding: 0.8rem 0;
// `;

// const Label = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;
//   font-weight: 500;

//   & svg {
//     width: 2rem;
//     height: 2rem;
//     color: var(--color-brand-600);
//   }
// `;

// function DataItem({ icon, label, children }) {
//   return (
//     <StyledDataItem>
//       <Label>
//         {icon}
//         <span>{label}</span>
//       </Label>
//       {children}
//     </StyledDataItem>
//   );
// }

// export default DataItem;

export default function DataItem({icon,label,children}) {
  return (
    <div className="flex items-center gap-4 px-3">
      <span className="flex items-center gap-2">
        <span className="w-8 h-8"> {icon} </span>
        <span> {label} </span>
      </span>
      {children}
    </div>
  )
}
