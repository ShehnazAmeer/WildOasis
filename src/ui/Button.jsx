export default function Button({ category, children, type = 'button', onClick, disabled = false, styles = '' }) {
  const base = 'text-2xl rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 tracking-wide';

  const style = {
    primary: base + 'inline-block p-6 text-blue-50 focus-ring-blue-600 bg-blue-600 focus:ring-blue-600 hover:bg-blue-300',
    secondary: base + 'bg-stone-600 focus:ring-stone-600 hover:bg-stone-400 p-6 mx-1',
    close: 'bg-none text-4xl translate-x-3 transition-all cursor-pointer',
    delete: base + 'bg-red-500 text-red-50 text-4xl translate-x-3 transition-all foucs:ring-outline-red-500',
    link:'text-blue-600 border',
    menu: 'bg-none border-none p-4 rounded-sm translateX-2 transition-all hover:bg-stone-400 cursor-pointer text-stone-400 ',
    custom:base,
  }
  return (
    <button   
      className={`${style[category]} ${styles}`}
      onClick={onClick}
      disabled={disabled}
      type={type}  
    >
      {children}
    </button>
  )
}