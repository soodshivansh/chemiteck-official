import '../Components/footer.css'
import img from '../Assets/photos/companyphoto.png'

export default function(){
    return(
        <footer className="footer">
            <div className="container px-10">
                <div className="row">
                    <div className="footer-col">
                        <img className='w-[100%]' src={img} alt='/' />
                        <ul>
                            <li><a href="#" style={{color:"white"}}><strong>Phone:</strong></a></li>
                            <li><a href="#"><i class="fa-solid fa-square-phone"></i> +91 9560391635</a></li>
                            <li><a href="#"><i class="fa-solid fa-square-phone"></i> +91 9289381979</a></li>
                            <li><a href="#" style={{color:"white"}}><strong>Mail:</strong></a></li>
                            <li><a href="#"><i class="fa-solid fa-envelope"></i> sales@chemiteck.in</a></li>
                            <li><a href="#"> chemiteck1675@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Quick links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#catalogue">Catalogue</a></li>
                            <li><a href="#articles">Articles</a></li>
                            <li><a href="#product-range">Products</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Partnership</h4>
                        <ul>
                            <li><a href="https://phbbvalves.com/" target="_blank">PHBB Valves Pvt. Limited</a></li>
                            <li><a href="#">Engineers Combine</a></li>
                            <li><a href="#" target="_blank">Flowmax Engineering</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            {/* <a href="#"><i className="fab fa-facebook-f"></i></a> */}
                            {/* <a href="#"><i className="fab fa-twitter"></i></a> */}
                            {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
                            <a href="https://www.linkedin.com/company/chemiteck1675/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
