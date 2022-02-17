import React from "react";
import Profile from "./Profile";

// function Label() {
//   return (
//     <div className="boxLabel">
//       <span className="grayText">스토리</span>
//       <span>모두 보기</span>
//     </div>
//   );
// }

function Box({ name, userId, isFollow }) {
  return (
    <div className="boxContainer">
      <div className="boxLabel">
        <span className="grayText">스토리</span>
        <span>모두 보기</span>
      </div>
      <Profile name={name} userId={userId} isFollow={isFollow} />
      <Profile name={name} userId={userId} isFollow={isFollow} />
      <Profile name={name} userId={userId} isFollow={isFollow} />
      <Profile name={name} userId={userId} isFollow={isFollow} />
    </div>
  );
}

export default Box;
