import React from "react";

const Footer = () => {
    return (
        <footer className="bg-green-700 h-72">
        <div className="w-100 justify-between flex items-center text-white mx-auto h-full">
        <img src={require('./logo.png')} className="h-36" />
            <div>
                <h1 className="text-lg font-black mb-2">Social Media Links</h1>
                <ul className="flex gap-10 text-3xl">
                    <li><i class="fa-brands fa-facebook"></i><a href="https://www.facebook.com/" target="_"></a></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                    <li><i class="fa-brands fa-github"></i></li>
                </ul>
            </div>
            <div>
                <p>© 2024 Tahsin, Redowan, Nahin, Labib, Sajjad <br/> All rights reserved.</p>
            </div>
        </div>
        </footer>
    )
}

export default Footer;