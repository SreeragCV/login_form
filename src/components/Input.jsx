import React from "react";

function Input({ label, id, error, message,...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">
        {error && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Input;
