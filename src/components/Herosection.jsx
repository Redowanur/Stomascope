import React from "react";

const Herosection = ()=>{
    return(
        <div className="relative py-12.5 px-5  bg-gray-100 h-96 flex justify-between items-center">
        <div className="absolute top-0 bottom-0 w-96 bg-contain bg-no-repeat left left-0"></div>
        <div className="z-10 text-center p-5 max-w-lg mx-auto">
            <h1 className="text-4xl mb-5 font-bold">StomaScope</h1>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis quidem incidunt atque saepe. Ipsam consectetur voluptatem adipisci illum assumenda dolor tempora reiciendis quia nisi hic, quos inventore minus ad!</p>
            <div className="start-btn">
                <button className="bg-green-600 mt-7 py-2.5 px-5 rounded-full text-base">Get Started<i className="fa-solid fa-arrow-right ml-2.5"></i></button>
            </div>
        </div>
        <div className="absolute top-0 bottom-0 w-96 bg-contain bg-no-repeat right right-0"></div>
    </div>
    )
}

export default Herosection;