import React from "react";
import {Link} from 'react-router-dom';

 
function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  return (
    <div className="bg-orange-600 py-3">
      <nav className="flex flex-row ">
        <div className="w-1/3 flex  justify-center">
            <p className="w-1/5 uppercase">
             Save The Book
            </p>
        </div>
          <ul className="flex flex-row justify-around	 w-2/3" >
            <li><Link to="/" className="text-blue-50 uppercase p-2 text-lg hover:font-bold focus:ring focus:ring-white" >Home</Link></li>
            <li><Link to="/Author" className="text-blue-50 uppercase p-2 text-lg hover:font-bold focus:ring focus:ring-white"  >Author</Link></li>
            <li><Link to="/NewBook" className="text-blue-50 uppercase p-2 text-lg hover:font-bold focus:ring focus:ring-white"  >NewBook</Link></li>
            <li><Link to="/Book"  className="text-blue-50 uppercase p-2 text-lg hover:font-bold focus:ring focus:ring-white" >Book</Link></li>
            <li><Link to="/NewAuthor" className="text-blue-50 uppercase p-2 text-lg hover:font-bold focus:ring focus:ring-white"  >NewAuthor</Link></li>

          </ul>
      </nav>
    </div>
  );
}

export default Navbar;