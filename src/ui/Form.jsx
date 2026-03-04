const style = {
  modal: '',
  regular: 'mx-8 py-8',
  internal:'mx-8 py-8 bg-stone-100 px-12'
}

function Form({ children, onSubmit, styles = '', category }) {
  return (
    <form onSubmit={onSubmit} className={`${style[category]} ${styles}`} >
      {children}
    </form>
  )
}

export default Form;
