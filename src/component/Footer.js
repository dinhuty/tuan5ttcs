import React from "react";
import "../CSS/footer.css"

function Footer() {
   
    return(
       <>
        <div className="footer">
            <p className="footer-p">Thực tập cơ sở tuần 5</p>
            <p className="footer-p">Thực hành với ReactJS</p>
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            <div className="footer-icon" >    
            <a className="a-h" href="https://www.facebook.com/Dinhuty/">
                <i class="fa-brands fa-facebook icon"></i>
            </a>
            <a className="a-h" href="https://www.facebook.com/Dinhuty/">
            <i class="fa-brands fa-apple icon"></i>
            </a>
            <a  className="a-h"href="https://www.facebook.com/Dinhuty/">
            <i class="fa-brands fa-facebook-messenger icon"></i>
            </a>
            </div>
            <p className="footer-p"><i class="fa-regular fa-copyright"></i> 2022 Copyright: Trần Văn Dinh (B19DCCN115).</p>
        </div>
           
       </>
    )
}

export default Footer;