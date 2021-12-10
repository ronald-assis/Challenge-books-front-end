import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="email">
          <span>Email</span>
          <input type="email" name="email" id="email" />
        </label>
        <label className="password-label" htmlFor="password">
          <div className="pass">
            <span>Senha</span>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Enviar</button>
        </label>
      </form>
    </div>
  );
};

export default Form;
