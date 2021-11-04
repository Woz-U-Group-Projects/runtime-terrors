import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
             <div className="singlePostWrapper">
                 <img 
                 src="https://media.cntraveler.com/photos/5b43c49098650440f2835b91/master/w_3776,h_2832,c_limit/Arashiyama-Bamboo-Grove-GettyImages-915795558.jpg" 
                 alt="" 
                 className="singlePostImg"/>

                 <h1 className="singlePostTitle">
                     Lorem ipsum dolor sit amet.
                     <div className="singlePostEdit">
                     <i className="singlePostIcon fas fa-edit"></i>
                     <i className="singlePostIcon fa fa-trash"></i>
                     </div>
                     </h1>
                     <div className="singlePostInfo">
                         <span className="singlePostAuthor">Author: <b>Tristan</b></span>
                         <span className="singlePostDate"><b>1 Hour Ago</b></span>
                     </div>
                     <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla nisi, nam placeat perferendis voluptas exercitationem ipsum odit veritatis maiores, eum ullam quo aliquid adipisci ipsa. Consequuntur iusto amet praesentium!
                     </p>
             </div>
        </div>
    )
}