export default function Button({category, children, type='button',onClick,disabled }) {
  const base = ' p-6 text-2xl text-stone-100 rounded-lg cursor-pointer focus:outline-none focus:ring  focus:ring-offset-2  tracking-wide inline-block mx-7 my-5 ';

  const style = {
    primary: base + 'bg-blue-600 focus:ring-blue-600 hover:bg-blue-400',
    secondary:base+'bg-stone-600 focus:ring-stone-600 hover:bg-stone-400'
  }

  
  return (
    <button
      className={style[category]}
      onClick={onClick}
      disabled={disabled}
      type={type}
      
    >
      {children}
    </button>
  )
}