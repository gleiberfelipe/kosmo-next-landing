
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { NavBox } from "./style";



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
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
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
