import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-center items-center px-5 py-4">
      <ul className="flex w-[50%] justify-around">
        <li className="hover:text-amber-300 cursor-pointer">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-amber-300 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="hover:text-amber-300 cursor-pointer">
          <Link to="/about">Over ons</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;