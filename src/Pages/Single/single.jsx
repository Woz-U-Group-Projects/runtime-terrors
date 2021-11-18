import "./single.css"
import Sidebar from "../../Components/Sidebar/sidebar"
import SinglePost from "../../Components/SinglePost/singlePost";
export default function Single() {
    return ( 
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}