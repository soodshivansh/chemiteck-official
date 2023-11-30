import React from "react";

const Location = () => {

    return(
        <div className="h-[70%] p-10 flex items-center justify-center overflow-hidden md:flex-row flex-col text-white" id="contact-us">
            <div className="p-10 md:w-[50%] h-[45vh] bg-[#212e56] text-left w-[100%]">
                <h1 className="font-Arvo lg:text-4xl md:text-4xl sm:text-3xl text-2xl mb-5">Location<hr style={{ height: "0.5vh", backgroundColor: "white" }}/></h1>
                <p className="font-Signika sm:text-xl"><strong>Address:</strong> RTG-82, Shipra Royal Tower market, Indirapuram, Ghaziabad, UP - 201014</p>
                <p className="font-Signika sm:text-xl"><strong>Phone:</strong><br/><i class="fa-solid fa-square-phone"></i> +91 9560391635<br/> <i class="fa-solid fa-square-phone"></i> +91 9289381979</p>
            </div>
            <div className="md:w-[50%] h-[45vh] w-[100%] overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3501.6981011265298!2d77.37510877544746!3d28.638808975661362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRTB-151%2C%20Shipra%20Royal%20Tower%20market%2C%20Indirapuram%2C%20Ghaziabad%2C%20UP%20-%20201014!5e0!3m2!1sen!2sin!4v1695825519661!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> 
        </div>

    )
}

export default Location
