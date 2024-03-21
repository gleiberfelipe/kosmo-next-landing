"use client"
import { Button } from "@/components/ui/button"
import { FooterBox } from "./style"

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export function Footer() {

    return (
        <FooterBox>
            <div className="FooterMaster">
                <div className="FooterChildren">
                    <h1>Exclusive</h1>
                    <h2>Subscribe</h2>
                    <p>Get 10% off your first order</p>
                    
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="FooterChildren">
                    <h1>Support</h1>
                    <p>111 bijou sarani, Dhaka,</p>
                    <p>Dh 1515, Bangladesh</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="FooterChildren">
                    <h1>Account</h1>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p> Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="FooterChildren">
                    <h1>Quick Link</h1>
                    <p>Privacy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="FooterChildren">
                    <h1>Download App</h1>
                    <p>save $3 with App New user Only</p>
                    <div className="FooterChildrenImg">
                        <div className="FooterChildrenImgV">
                            <img src="/5dd6d44594e01b675513068803e2426d.jpg" alt="" />
                        </div>
                        <div className="FooterChildrenImgH">
                            <img src="/10b18ab55a1e1a07ebf54a46ebb07284.png" alt="" />
                            <img src="/ccb54c528f9bcf326ca48ea29bd6d890.png" alt="" />
                        </div>
                    </div>
                    <div className="FooterChildrenSvg">
                 


<p><FaFacebook /></p>
<p><FaInstagram /></p>
<p><FaTwitter /></p>
<p><FaLinkedin /></p>
                    </div>
                </div>
            </div>

            <div className="FooterFooter">
                <h2>C All Rights Reserved: Gleiber Coelho</h2>
            </div>
        </FooterBox>
    )
}