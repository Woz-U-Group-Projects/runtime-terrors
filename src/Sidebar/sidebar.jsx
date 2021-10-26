import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">SEARCH</span>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Politics</li>
                    <li className="sidebarListItem">Art</li>
                    <li className="sidebarListItem">Psychology</li>
                    <li className="sidebarListItem">Science</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Nature</li>
                    <li className="sidebarListItem">Food</li>
                    <li className="sidebarListItem">DIY</li>
                    <li className="sidebarListItem">Comedy</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>

                </div>
            </div>
        </div>
    )
}