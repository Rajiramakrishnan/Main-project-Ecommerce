import React from 'react'
import "../../Assets/style/Footer.css"
import img from "../../Assets/Images/logo.png"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='container-fluid footer_wrapper'>
        <div className='row gx-5 footer_row'>
            <div className='col-md-4 col-12 footer_col_1'>
                <img src={img} className="img-fluid img-thumbnail" alt="..."/>SPARKLE  <span>CART</span>
                <div className='footer_col1_contact'>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
</svg>+91 1234567890</p>
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>sparklecart@example.com
</p>
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>121 Abc Street, India, 123456
</p>

</div>
            </div>
            <div className='col-md-4 col-6'>
                <p className='footer_col_heading'>Company</p>
                <div className='footer_col2_aboutus'>
                    <div><Link to="/aboutus">About Us</Link></div>
                    <div><Link to="/contactus">Contact Us</Link></div>
                    <div><Link to="/">Privacy Policy</Link></div>
                    <div><Link to="/">Terms &amp; Conditions</Link></div>

                </div>
            </div>
            <div className='col-md-4 col-6'>
                <p className='footer_col_heading'>Information</p>
                <div className='footer_col3_info'>
                    <div><Link to="/buyer/profile">My Account</Link></div>
                    <div><Link to="/">Login</Link></div>
                    <div><Link to="/cart/:buyerId/">My Cart</Link></div>
                    <div><Link to="/buyer/wishlist">My Wishlist</Link></div>
                    <div><Link to="/buyer/orders/">Orders</Link></div>
                </div>
            </div>

        </div>
        </div>
  )
}

export default Footer