import { NavLink } from "react-router-dom";
import { HiOutlineHome,HiOutlineCalendarDays,HiOutlineHomeModern,HiOutlineUsers,HiOutlineCog6Tooth } from "react-icons/hi2";


export default function MainNav() {
  return (
    <nav className="w-full" >
       <ul className=" w-full " >
        <li className="p-5 w-full" >
          <NavLink
            to='/dashboard'
            className={({isActive})=>`flex gap-3 py-5 px-3 items-center font-bold  ${isActive?"  bg-stone-200 ":""}`}
          >
             <HiOutlineHome className={({isActive})=>`${isActive?"active:text-blue-700":"group-active:text-blue-800"}`} />
            
            <span > Home</span>
            
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink
            className={({ isActive }) => `flex gap-3 py-5 px-3 items-center font-bold transition-all ${isActive ? "  bg-stone-200" : ''}`}
            to='/bookings'
          >
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink
            className={({ isActive }) => ` flex gap-3 py-5 px-3 items-center font-bold transition-all ${isActive ? "bg-stone-200" : ""}`}
            to='/cabins'
          >
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink
            className={({ isActive }) => ` flex gap-3 py-5 px-3 items-center font-bold transition-all ${isActive ? "bg-stone-200" : ""}`}
            to='/users'
          >
            <HiOutlineUsers />
            <span>Users</span>
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink
            className={({ isActive }) => ` flex gap-3 py-5 px-3 items-center font-bold transition-all ${isActive ? "bg-stone-200" : ""}`}
            to='/settings'
          >
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
    </ul>
    </nav>
   
  )
}
