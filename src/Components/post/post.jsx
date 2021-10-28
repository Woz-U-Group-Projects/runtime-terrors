import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://www.theladders.com/wp-content/uploads/Boss_Babe_Office_Desk_052218.jpg"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Politics</span>
                    <span className="postCat">Psychology</span>
                </div>
                <span className="postTitle">
                    Title testing.
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in placeat quos optio tenetur harum similique accusantium nihil temporibus quod. Neque perferendis dolorum magnam odio? Consequuntur magnam quae suscipit accusamus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in placeat quos optio tenetur harum similique accusantium nihil temporibus quod. Neque perferendis dolorum magnam odio? Consequuntur magnam quae suscipit accusamus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam in placeat quos optio tenetur harum similique accusantium nihil temporibus quod. Neque perferendis dolorum magnam odio? Consequuntur magnam quae suscipit accusamus.</p>
        </div>
    )
    }