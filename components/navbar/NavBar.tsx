import Link from "next/link";
import "./nav-style.scss";
const NavBar = () => {
  return (
    <header className="nav-header">
      <div className="logo">
        <span>RYATM</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          |
          <li>
            <Link href="/course">Courses</Link>
          </li>
          |
          <li>
            <Link href="/carrier">Carrier</Link>
          </li>
          |
          <li>
            <Link href="/event">Events</Link>
          </li>
        </ul>
      </nav>
      <div className="cta_btns">
        <button>
          <Link href="/contacts">Connect Us</Link>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
