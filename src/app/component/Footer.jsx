import React from "react";
import Logoimg from "../../../public/images/logo.png"
import Image from "next/image";

const Footer = () => {
    return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between align-items-center">
            <span className="relative bottom-3.5"><Image src={Logoimg} className="w-14" alt="" /></span>
            <p className="text-slate-600">All rigths reserved.</p>
        </div>
    </footer>
    )
}

export default Footer