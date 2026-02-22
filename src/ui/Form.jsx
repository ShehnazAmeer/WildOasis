const style = {
  modal: '',
  regular:'mx-8 py-8'
}

function Form({ children, onSubmit, styles = '', categoary }) {
  return (
    <form onSubmit={onSubmit} className={`${style[categoary]} ${styles}`} >
      {children}
    </form>
  )
}

export default Form;
