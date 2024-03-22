import { Button } from "@/components/ui/button"
import { LoginBox } from "./style"
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export function LoginComponent() {

    return(
        <LoginBox>
        <div className="imageBox"><img src="/a1c7dc5b68a42239311e510f54d8cd59.jpg" alt="" /></div>
        <div className="FormBox">
            <form action="">
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>
               
                <input type="text" placeholder="Email or Phone Number" />
                <input type="text" placeholder="Password" />
            </form>
            <Button className="bt1">Log In</Button>
     

            <Link  href="/signup">Forgot Password?</Link>
        </div>
        </LoginBox>
    )
}