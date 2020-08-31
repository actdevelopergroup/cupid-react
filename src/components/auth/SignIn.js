import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  const [display, setDisplay] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    props.signIn(data);
  };
  const closeModal = () => {
    setDisplay(false);
  };
  if (props.auth.uid) return <Redirect to="/" />;
  if (display) {
    return (
      <div className="backdrop">
        <div className="mini-wrapper">
          <div className="row justify-content-center relative">
            <div className="col form-section">
              <div className="close">
                <button
                  onClick={closeModal}
                  className="button button-secondary"
                >
                  Close
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <h4 style={{ fontSize: "1.5rem" }}>Login</h4>
                <div className="mtb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="userEmail"
                    id="email"
                    value={email}
                    placeholder="Email address"
                    className="form-input mt-2"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </div>
                <div className="mtb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="userPassword"
                    value={password}
                    className="form-input mt-2"
                    onChange={(event) => onChangeHandler(event)}
                  />
                </div>
                <div className="error-section">
                  {error !== null && <div className="error-text">{error}</div>}
                </div>
                <div className="mtb-3">
                  <input
                    type="submit"
                    value="Log in"
                    style={{ width: "100%", height: "40px" }}
                    className="button button-primary"
                  />
                </div>
                <div className="error-section">
                  {props.authError ? (
                    <p className="error-text">{props.authError}</p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="/" />;
};
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
