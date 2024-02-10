import React from "react";
import { Link } from "react-router-dom";

const Herosection = ()=>{
    return(
    <div className="relative py-12.5 px-5  bg-cream-300 h-hero flex justify-between items-center">
        <div className="absolute top-0 bottom-0 w-97 bg-contain bg-no-repeat left left-0"></div>
        <div className="z-10 text-center p-5 max-w-lg mx-auto">
            <h1 className="text-5xl font-bold mb-5 uppercase font-redowan">stomascope</h1>
            <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis quidem incidunt atque saepe. Ipsam consectetur voluptatem adipisci illum assumenda dolor tempora reiciendis quia nisi hic, quos inventore minus ad!</p>
            <div className="start-btn">
                <button className="bg-leaf-300 mt-7 py-3 px-5 rounded-full text-lg"><Link to='/model'>Get Started<i className="fa-solid fa-arrow-right ml-2.5"></i></Link></button>
            </div>
        </div>
        <div className="absolute top-0 bottom-0 w-97 bg-contain bg-no-repeat right right-0"></div>
    </div>
    )
}

export default Herosection;