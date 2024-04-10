

"use client"

import { FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";



import { HeaderBox } from './style';

const Header = () => {

    return (
        <HeaderBox>
            <div className="img">
                <Image src="/e9357c97e3e5b089e2697e0822c08d46.png"
                    alt=""
                    layout="fill"
                    objectFit="contain" />
            </div>
            <div>
            <p> Lorem ipsum dolor</p>
            </div>
            <div className="icons">
                <p><FaUser /></p>
                <p><IoIosMenu /></p>
            </div>

        </HeaderBox>
    );
};

export default Header;
