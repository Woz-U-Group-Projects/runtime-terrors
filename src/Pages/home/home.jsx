import "./home.css"
import Header from "../../Components/header/header"
import Posts from "../../Components/Posts/posts"
import Sidebar from "../../Components/Sidebar/sidebar"

export default function Home(){
    return (
        <>
        <Header />
        <div className="home">
        <Posts />
        {/* <Sidebar /> */}
        </div>
        </>
    )
}