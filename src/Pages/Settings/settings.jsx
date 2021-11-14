import "./settings.css"
import Sidebar from "../../Components/Sidebar/sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteAccount">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png" 
                        alt=""/>

                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user-ninja"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                    <label>Email</label>
                    <input type="text" placeholder="Write@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
        </div>
    )
}