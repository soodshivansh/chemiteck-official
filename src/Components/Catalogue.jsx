import React from "react";
import './catalogue.css'

const Catalogue = () => {

    return(
        <div className="catalogue w-full h-[40vh]">
            <h1 className="font-Arvo lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold border-b pb-4">Catalogue</h1>
            <div className="btn-catalogue">
                <div className="button-19" role="button">View Catalogue</div>
            </div>
            <hr style={{ height: "0.5vh", backgroundColor: "black" }} />
        </div>

    )
}

export default Catalogue