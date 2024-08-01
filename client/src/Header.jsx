import { FaEarthAmericas, FaBars, FaCircleUser, } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    return (
<div>
    <header className='p-4 flex justify-between'>
        <a href='' className='flex items-center gap-1'> <FaEarthAmericas className='logo w-8 h-6'/> 
        <span className='font-bold text-xl'>Bookup</span>
        </a> 
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-400'>
          <div>Anywhere</div>
          <div className="border-l border-gray-300"></div>
          <div>Any week</div>
          <div className="border-l border-gray-300"></div>
          <div>Add guests</div>
          <button className='bg-primary text-white p-1.5 rounded-full'>
            <FaSearch />
          </button>
        </div>
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 items-center">
        <FaBars size={'18px'}/>
        {/* Code below links FaCircleUser to /login path. Meaning when clicked, will direct url to /login */}
        <Link to={'/login'}>
        <FaCircleUser size={'18px'}/>
        </Link>
      </div>
    </header>
</div>
    )
}