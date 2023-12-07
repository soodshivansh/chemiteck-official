import React from "react";
import './catalogue.css'
import { NavLink } from "react-router-dom";

const Catalogue = () => {

    return(
        <div className="catalogue w-full h-[40vh]">
            <h1 className="font-Arvo lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold border-b pb-4">Catalogue</h1>
            <div className="btn-catalogue">
                <NavLink to="/catalogues" className="button-19" role="button"><div>View Catalogue</div></NavLink>
            </div>
            <hr style={{ height: "0.5vh", backgroundColor: "black" }} />
        </div>

    )
}

export default Catalogue