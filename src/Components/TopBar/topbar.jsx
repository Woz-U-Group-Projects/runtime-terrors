import "./topbar.css"

export default function TopBar() {
    return (
    <nav className="navbar navbar-light navbar-expand-lg">
        <a href="/"
        class="navbar-brand mb-0 h1">
            <i className="pencilIcon fas fa-pencil-alt"></i>
            WriteHereWriteNow
        </a>
        <div className="container">
        <button type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        class="navbar-toggler"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
        id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item active">
                    <a href="/write" className="nav-link">Write</a>
                </li>
                <li className="nav-item active">
                    <a href="/profile" className="nav-link">Profile</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>    )
}