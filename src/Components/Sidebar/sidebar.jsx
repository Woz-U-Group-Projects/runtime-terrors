import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">SEARCH</span>
                <input className="searchBox" type="text" placeholder="Search Posts" />
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
        </div>
    )
}
