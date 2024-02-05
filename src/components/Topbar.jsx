import React from "react";

const Topbar = ()=>{
    return(
        <div className="bg-green-700">
        <div className="w-100 mx-auto flex justify-between items-center">
            <div className="w-24 my-1"><img src={require('./logo.png')} alt=""/></div>
            <nav>
                <ul className="flex gap-16">
                    <li><a href="temp.html" className="text-white">Home</a></li>
                    <li><a href="" className="text-white">List</a></li>
                    <li><a href="" className="text-white">List</a></li>
                    <li><a href="" className="text-white">List</a></li>
                    <li><a href="" className="text-white">List</a></li>
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