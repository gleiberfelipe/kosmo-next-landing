import { Button } from "@/components/ui/button"
import { LoginBox } from "./style"
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export function SignupComponent() {

    return(
        <LoginBox>
        <div className="imageBox"><img src="/a1c7dc5b68a42239311e510f54d8cd59.jpg" alt="" /></div>
        <div className="FormBox">
            <form action="">
                <h1>Creat an account</h1>
                <p>Enter your details below</p>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email or Phone Number" />
                <input type="text" placeholder="Password" />
            </form>
            <Button className="bt1">Creat Account</Button>
            <Button className="bt2"><FcGoogle /> Sign up with Google</Button>

            <p>Already have accont? <Link href="/login">Log in!</Link></p>
        </div>
        </LoginBox>
    )
}