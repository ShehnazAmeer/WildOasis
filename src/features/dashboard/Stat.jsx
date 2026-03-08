export default function Stat({children,title,value,color=''}) {
  return (
    <div
      className="bg-stone-100 dark:bg-gray-700  rounded-xl  p-5 "
    >
      <div className="flex items-center justify-center row-span-full aspect-1 b">
        <div className={`${color} p-5 rounded-full`} >
          {children}
        </div>
        
        <div className="px-4">
          <h5 className="self-end text-lg uppercase tracking-wider font-bold text-stone-600 dark:text-gray-200 ">{title} </h5>
          <p className="font-bold text-4xl leading-relaxed">{value} </p>
        </div>
      </div>


      
    </div>
  )
}