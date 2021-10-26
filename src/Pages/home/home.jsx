import "./home.css"
import Header from "../../header/header"
import Posts from "../../Posts/posts"
import Sidebar from "../../Sidebar/sidebar"

export default function Home(){
    return (
        <>
        <Header />
        <div className="home">
        <Posts />
        <Sidebar />
        </div>
        </>
    )
}