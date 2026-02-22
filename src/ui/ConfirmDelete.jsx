// import styled from "styled-components";
// import Button from "./Button";
// import Heading from "./Heading";

import Button from "./Button";

// const StyledConfirmDelete = styled.div`
//   width: 40rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;

//   & p {
//     color: var(--color-grey-500);
//     margin-bottom: 1.2rem;
//   }

//   & div {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// function ConfirmDelete({ resourceName, onConfirm, disabled }) {
//   return (
//     <StyledConfirmDelete>
//       <Heading as="h3">Delete {resourceName}</Heading>
//       <p>
//         Are you sure you want to delete this {resourceName} permanently? This
//         action cannot be undone.
//       </p>

//       <div>
//         <Button variation="secondary" disabled={disabled}>
//           Cancel
//         </Button>
//         <Button variation="danger" disabled={disabled}>
//           Delete
//         </Button>
//       </div>
//     </StyledConfirmDelete>
//   );
// }

function ConfirmDelete({resourceName,disabled,onConfirm,onClick}) {
  return (
    <div className="flex flex-col w-160 gap-4">
      <h1 className="font-bold text-3xl">Delete {resourceName} </h1>
      <p className="text-stone-500 mb-6">
        Are you sure you want to delete this {resourceName} Permanently? After Click this Action cannot be undonne.
      </p>
      <div className="flex justify-end gap-4">
        <Button onClick={onClick} category='secondary'>Cancel</Button>
        <Button disabled={disabled} onClick={onConfirm} category='delete'>Delete</Button>
      </div>
    </div>
  )
}

export default ConfirmDelete;
