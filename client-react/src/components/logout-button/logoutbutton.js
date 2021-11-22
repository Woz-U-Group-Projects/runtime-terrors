import React, { useState } from "react";

export function Logoutbutton(props) {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div className="media-body ml-2 d-none d-lg-block">
      <img
        alt=""
        src="https://i.ibb.co/frczwh6/logout.png"
        className="logout"
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      />
      <img 
        alt=""
        src="https://i.ibb.co/Wt4m3hN/Logouthovered.jpg" 
        style={style}
        className="logout2"
        />
        
    </div>
  );
}
