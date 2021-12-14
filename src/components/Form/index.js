import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import signInApi from "../../service/signInApi";
import errorMessage from "../../images/erro.svg";
import "./form.css";

const Form = () => {
  const initialState = { login: "", pass: "" };
  const [values, setValue] = useState(initialState);
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleInput = ({ target: { name, value } }) => {
    setValue({ ...values, [name]: value });
  };

  const getUser = async () => {
    const { login, pass } = values;
    const ERROR_MESSAGE = "Infelizmente, algo deu errado.";
    const userInfo = await signInApi(login, pass);
    if (!userInfo.email) return setError(true);
    if (!userInfo.email && userInfo.errors.message === ERROR_MESSAGE) {
      return history.push("*");
    }
    return history.push("/", { params: userInfo.name });
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    getUser();
  };

  return (
    <div className="form">
      <form action="">
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="email"
            value={values.login}
            name="login"
            id="email"
            onChange={handleInput}
          />
        </label>
        <label className="password-label" htmlFor="password">
          <div className="pass">
            <span>Senha</span>
            <input
              type="password"
              value={values.pass}
              name="pass"
              onChange={handleInput}
              id="password"
            />
          </div>
          <button type="submit" onClick={handleClick}>
            Enviar
          </button>
        </label>
        {error && (
          <img
            src={errorMessage}
            className="error-message"
            alt="Erro message by email or password"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
