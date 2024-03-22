"use client"
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { NavBox } from "./style";
import Link from "next/link";



export default function Navbar() {
  return (

    <NavBox>
      <div>
        <h1>
          Exclusive
        </h1>
      </div>
      <div className="divLi">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li>Contact</li>
          <li>About</li>
          <li><Link href="/signup"> Sign Up</Link></li>
        </ul>
      </div>
      <div>
        <input placeholder="What are you looking for?" type="text" />
        <CiSearch className="search" />
        <CiHeart />
        <IoCartOutline />
      </div>
    </NavBox>
  );
}
