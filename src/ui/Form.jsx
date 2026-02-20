// import styled, { css } from "styled-components";

// const Form = styled.form`
//   ${(props) =>
//     props.type !== "modal" &&
//     css`
//       padding: 2.4rem 4rem;

//       /* Box */
//       background-color: var(--color-grey-0);
//       border: 1px solid var(--color-grey-100);
//       border-radius: var(--border-radius-md);
//     `}

//   ${(props) =>
//     props.type === "modal" &&
//     css`
//       width: 80rem;
//     `}
    
//   overflow: hidden;
//   font-size: 1.4rem;
// `;

const style = {
  modal: '',
  regular:'mx-8 py-8'
}

function Form({children, onSubmit,styles='',categoary}) {
  return (
    <form onSubmit={onSubmit} className={`${style[categoary]} ${styles}`} >
      {children}
    </form>
  )
}

export default Form;
