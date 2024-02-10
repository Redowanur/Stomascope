import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = ()=>{
    return(
        <div className="bg-green-700">
        <div className="w-100 mx-auto flex justify-between items-center">
            <div className="w-24 my-1"><img src={require('../images/logo.png')} alt=""/></div>
            <nav>
                <ul className="flex gap-16">
                    <li><NavLink to="" className="text-white">Home</NavLink></li>
                    <li><NavLink to="/about" className="text-white">About</NavLink></li>
                    <li><NavLink to="/contact" className="text-white">Contact</NavLink></li>
                    <li><NavLink to="" className="text-white">List</NavLink></li>
                    <li><NavLink to="" className="text-white">List</NavLink></li>
                </ul>
            </nav>
            <div>
                <button className="bg-green-500 py-2 px-4 rounded-full">Login</button>
                <button className="bg-white py-2 px-4 rounded-full ml-2">Signup</button>
            </div>
        </div>
    </div>
    )
}

export default Topbar;