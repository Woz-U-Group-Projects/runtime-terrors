import React, { useState } from "react";
import { Datetime } from "../datetime/datetime";

export function Addpost(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  function onCreatePost(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onCreatePost}>
      <div>
        <h3>Title</h3>
        <textarea
          rows="1"
          placeholder="Name your masterpiece"
          onChange={(e) => setTitle(e.target.value)}
          value={Title}
        ></textarea>
      </div>
      <h3>Content</h3>
      <div>
        <textarea
          rows="10"
          placeholder="Write to your heart's content"
          onChange={(e) => setContent(e.target.value)}
          value={Content}
        ></textarea>
      </div>
      <div>
        <div>
          <input type="file" accept="image/*" />
        </div>
        <button className="btn btn-sm btn-default" type="submit">
          Write now
        </button>
        <div>
          <div class="card">
            <h2>{Title}</h2>
            <div>
              <Datetime />
            </div>
            <div class="fakeimg">Image</div>
            <p>{Content}</p>
          </div>
        </div>
      </div>
    </form>
  );
}
