import React from "react";

export function Addpost(props) {
  return (
    <form>
      <div>
        <h3>Title</h3>
        <textarea rows="1"></textarea>
      </div>
      <h3>Content</h3>
      <div>
        <textarea rows="10"></textarea>
      </div>
      <div>
        <div>
          <input type="file" accept="image/*" multiple />
        </div>
        <div>
          <button className="btn btn-sm btn-default float-right">
            Write now
          </button>
        </div>
      </div>
    </form>
  );
}
