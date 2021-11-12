import "./topbar.css"
import "bootstrap/dist/js/bootstrap.bundle"

export default function TopBar() {
    return (
    <nav className="navbar fixed-top navbar-light navbar-expand-lg">
        <a href="/"
        class="navbar-brand">
            <i className="pencilIcon fas fa-pencil-alt"></i>
            WriteHereWriteNow
        </a>
        <button type="button"
        className="navbar-toggler right"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        class="navbar-toggler"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navList collapse navbar-collapse justify-content-center"
        id="navbarNav">
            <ul className="navbar-nav navbar-light">
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
                <ul class="categories navbar-nav dropdown">
                    <button class="dropdown-toggle btn btn-secondary" 
                    type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
                    <li class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                        <li> <a href="#" 
                        class="dropdown-item">Politics</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Psychology</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Music</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Nature</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">DIY</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Art</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Science</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Sports</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Food</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Comedy</a>
                        </li>
                        <li> <a href="#" 
                        class="dropdown-item">Politics</a>
                        </li>
                    </li>
                </ul>
        </div>
        <form action="" className="searchBox d-flex">
            <input type="text" className="form-control me-2"/>
            <button className="searchButton btn btn-secondary">Search</button>
        </form>
    </nav>    )
}