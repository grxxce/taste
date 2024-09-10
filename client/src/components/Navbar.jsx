import { NavLink } from "react-router-dom";
import tasteLogo from '../assets/taste.png'

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-center items-center mb-6">
        <NavLink to="/">
          <img alt="Taste" src={tasteLogo} className="transform scale-75"></img>
        </NavLink>
      </nav>
    </div>
  );
}