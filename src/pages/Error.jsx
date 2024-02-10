import React from "react";
import errorImg from '../images/errorimg.svg';

export default function Error() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <img src={errorImg} alt="Error Image" className="w-1/2"/>
        </div>
    );
}
