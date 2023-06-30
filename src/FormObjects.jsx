import { useState } from "react";

const FormObject = () => {
    const [remember, setRemember] = useState(false)
  const [formValues, setFormVaules] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
  });

  const handleForm = (e) => {
    setFormVaules({ ...formValues, [e.target.id]: e.target.value});
  };

  const handleRemember = (e)=> {
    setRemember(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `
        name:${formValues.name},
        email:${formValues.email},
        password: ${formValues.password},
        country: ${formValues.country},
        remember: ${formValues.remember}`
    );
  };

  return (
    <div className="text-center p-3 m-2 bg-dark rounded-4">
      <form className="text-bg-warning rounded-pill m-auto" onSubmit={handleSubmit} action="" method="post">
        <div>
          <p>Username:{formValues.name}</p>
          <label htmlFor="name">
            <strong>Username:</strong>
          </label>
          <input
            placeholder="username"
            onChange={handleForm}
            value={formValues.name}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <p>E-mail:{formValues.email}</p>
          <label htmlFor="email">
            <strong>E-mail:</strong>
          </label>
          <input
            onChange={handleForm}
            value={formValues.email}
            type="email"
            name="email"
            id="email"
            placeholder="   example@gmail.com"
            required
          />
        </div>
        <div>
          <p>Password:{formValues.password}</p>
          <label htmlFor="password">
            <strong>Password:</strong>
          </label>
          <input
            onChange={handleForm}
            value={formValues.password}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div>
          <p>Country:{formValues.country}</p>
          <label htmlFor="country">
            <strong>Country:</strong>
          </label>
          <select
            onChange={handleForm}
            value={formValues.country}
            name=""
            id="country"
          >
            <optgroup label="Europe">
              <option value="Germany">Germany</option>
              <option value="Netherlands">Netherlands</option>
              <option value="France">France</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="China">China</option>
              <option value="Tailand">Tailand</option>
              <option value="Japan">Japan</option>
            </optgroup>
          </select>
        </div>
        <div>
          <p>Remember me:{remember ? "Yes" : "No"}</p>
          <label htmlFor="remember">
            <strong>Remember me:</strong>
          </label>
          <input
            onChange={handleRemember}
            value={remember}
            type="checkbox"
            name="remember"
            id="remember"
          />
        </div>
        <div>
          <button className="border border-0 btn btn-danger fw-bolder" type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default FormObject;
