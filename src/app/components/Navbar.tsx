import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">MAS Car Rental</h1>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
        </div>
      </div>
    </nav>
  );
}
