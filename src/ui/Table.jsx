import { createContext, useContext } from "react";

const TableContext=createContext();
export default function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{columns}}>
      <div
        role='table'
        className="text-2xl rounded-md overflow-hidden">
        {children}
     </div>
    </TableContext.Provider>
  )
}
function Empty({ children }) {
  return (
     <p className="font-bold text-2xl text-center m-10"> {children} </p>
  )
}
function Header({ children }) { 
const {columns} = useContext(TableContext);
  return (
    <header className={`bg-stone-100 rounded-sm grid grid-cols-[${columns}]  uppercase tracking-wider font-semibold text-stone-800 py-3 border border-stone-300 space-y-3  max-md:w-auto max-md:text-lg max-sm:text-xs px-2`} >
      {children}
    </header>
  )
}

function Body({ data, render }) { 
  if(!data.length) return <Empty>No data to show at the moment</Empty>
  return (
    <>
      {data.map(render)}
    </>
  )
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <section
      className= {`grid grid-cols-[${columns}] grid-flow-row gap-x-5 items-center p-3 border-b capitalize border-stone-300 space-y-3  max-md:w-auto bg-stone-100 max-md:text-lg max-sm:text-xs border`} 
    >
      {children}
    </section>
  )
 }

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
