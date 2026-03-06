const style = {
  modal: 'dark:bg-gray-800 dark:text-gray-200 ',
  regular: 'mx-8 py-8 dark:bg-gray-800 dark:text-gray-200 ',
  internal:'mx-8 py-8 bg-stone-100 px-12 dark:bg-gray-800 dark:text-gray-200 '
}

function Form({ children, onSubmit, styles = '', category }) {
  return (
    <form onSubmit={onSubmit} className={`${style[category]} ${styles}`} >
      {children}
    </form>
  )
}

export default Form;
