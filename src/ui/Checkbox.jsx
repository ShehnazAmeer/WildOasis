

export default function Checkbox({type,children,value,onChange,disabled=false,id}) {
  return (
    <div className="flex gap-7" >
      <input
        className= {` ${type==='checkbox'? 'h-9 w-9 outline-2 origin-0 accent-blue-600 text-blue-50 ':''}`}
        type={type}
        checked={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <label
        className="flex-1 flex items-center gap-3"
        htmlFor={!disabled ? id : ''} > {children} </label>
    </div>
  )
}