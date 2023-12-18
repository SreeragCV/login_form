import { useState } from "react";

export default function Login() {
  const [enterValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enterValues.email.includes("@");
  const passwordIsInvalid = didEdit.password && enterValues.password.length < 6;

  function handleChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enterValues);
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleChange("email", event.target.value)}
            value={enterValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) => handleChange("password", event.target.value)}
            value={enterValues.password}
          />
           <div className="control-error">
            {passwordIsInvalid && <p>password must have 6 characters</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button disabled={emailIsInvalid || passwordIsInvalid} className="button">Login</button>
      </p>
    </form>
  );
}
