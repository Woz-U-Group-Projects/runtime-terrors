import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">PROFILE</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topCenter">
            <i className="topIcon politics fas fa-landmark"></i>
            <i className="topIcon creative fas fa-paint-brush"></i>
            <i class="topIcon psych fas fa-brain"></i>
            <i class="topIcon science fas fa-flask"></i>
            <i class="topIcon music fas fa-music"></i>
            <i class="topIcon sports fas fa-football-ball"></i>
            <i class="topIcon nature fas fa-tree"></i>
            <i class="topIcon food fas fa-hamburger"></i>
            <i class="topIcon tool fas fa-tools"></i>
            <i class="topIcon comedy far fa-grin-squint-tears"></i>


        </div>
            <div className="topRight">
            <i className="topSearchIcon fas fa-search"></i>
                 <input className="searchBox" type="text" placeholder="Search Posts" />
            <i className="topImage fas fa-user-ninja"></i>
            </div>
        </div>
    )
};