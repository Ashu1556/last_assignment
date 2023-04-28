import React, { useState, useRef, useEffect } from "react";

const Use_ref = () => {
  const [state, setState] = useState();
  let changetext = useRef(null);
  let inputcomponent = useRef(null);
  console.log(changetext.current);

  useEffect(() => {
    changetext.current.style.color = "red";
    changetext.current.style.fontSize = "50px";
    inputcomponent.current.focus = true;
  }, []);

  return (
    <div style={{ textAlign: "Center", margin: "100px 100px" }}>
      <h1>Use_Ref Component</h1> <br></br>
      <input
        type="text"
        ref={inputcomponent}
        onChange={(e) => setState(e.target.value)}
      />
      <h2 ref={changetext}>{state}</h2>
    </div>
  );
};

export default Use_ref;
