import React from "react";

function LoginInput(props) {
  return (
    <div className="loginInput">
      <span className="inputPlaceholder">{props.placeholder}</span>
      <input type={props.type} name={props.name} />
      {props.name === "password" ? (
        <button type="button" className="visiblePassword"></button>
      ) : null}
    </div>
  );
}

export default LoginInput;
