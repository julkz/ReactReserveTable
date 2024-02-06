import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/booking">Book with us</Link></li>
                <li><Link to="/">About us</Link></li>
            </ul>
        </nav>
    );
  };