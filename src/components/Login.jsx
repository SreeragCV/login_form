import { useState } from "react";
import Input from "./Input.jsx";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js";

export default function Login() {
  const [enterValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enterValues.email) &&
    isNotEmpty(enterValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enterValues.password, 6);

  const ifDisable =
    enterValues.email === "" ||
    enterValues.password === "" ||
    emailIsInvalid ||
    passwordIsInvalid;

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
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleChange("email", event.target.value)}
          value={enterValues.email}
          error={emailIsInvalid}
          message="please enter a valid email address"
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleChange("password", event.target.value)}
          value={enterValues.password}
          error={passwordIsInvalid}
          message="password must have 6 characters"
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button
          disabled={ifDisable}
          className={ifDisable ? "disabled" : "button"}
        >
          Login
        </button>
      </p>
    </form>
  );
}
