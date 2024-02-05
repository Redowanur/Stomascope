import React from "react";

const Footer = () => {
    return (
        <footer className="bg-green-700 h-56">
            <div className="w-100 justify-between flex items-center text-white mx-auto h-full">
                <img src={require('./logo.png')} className="h-36" />
                <div>
                    <h1 className="text-lg font-black mb-2">Social Media Links</h1>
                    <ul className="flex gap-10 text-3xl">
                        <li><a href="https://www.facebook.com/" target="_"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/" target="_"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/" target="_"><i class="fab fa-github"></i></a></li>
                    </ul>

                </div>
                <div>
                    <p>© 2024 Tahsin, Redowan, Nahin, Labib, Sajjad <br /> All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;