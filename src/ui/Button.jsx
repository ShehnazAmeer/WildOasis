export default function Button({category, children, type='button',onClick,disabled=false,styles='' }) {
  const base = ' p-6 text-2xl text-stone-100 rounded-lg cursor-pointer focus:outline-none focus:ring  focus:ring-offset-2  tracking-wide inline-block mx-1  ';

  const style = {
    primary: base + 'bg-blue-600 focus:ring-blue-600 hover:bg-blue-400',
    secondary: base + 'bg-stone-600 focus:ring-stone-600 hover:bg-stone-400',
    close: 'bg-none text-4xl translate-x-3 transition-all cursor-pointer',
    delete:base+'bg-red-500 text-red-50 text-4xl translate-x-3 transition-all foucs:ring-outline-red-500'
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