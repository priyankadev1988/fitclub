import React  from "react";
import "./Join.css";

const Join = () => {
  
  return (
    <div className="join">
      <div className="left-j">
        <hr/>
        <div>
          <sapn className="stroke-text">READY TO </sapn>
          <span>LEVEL UP</span>
        </div>
        <div>
          <sapn>YOUR BODY </sapn>
          <sapn className="stroke-text">WITH US?</sapn>
        </div>
      </div>

      <div className="right-j">
        <form action="" className="email-container" >
            <input type="email" name="user_email" placeholder="Enter your Email address"/>
        <button className="btn btn-j">join now</button>
        </form>
      </div>

    </div>
  );
};

export default Join;
