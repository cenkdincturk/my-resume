import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="#">
            Cenk Dinçtürk
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">Hakkımda</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/experience">
                <a className="nav-link">Yaptığım İşler</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/comments">
                <a className="nav-link">Yorumlar</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">İletişim</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
