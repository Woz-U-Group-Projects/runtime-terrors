import "./header.css"

export default function  Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">WriteHereWriteNow</span>
                <span className="headerTitleLarge">Your Journey Begins Write Here</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" 
            alt="" />
         </div>
    )
};