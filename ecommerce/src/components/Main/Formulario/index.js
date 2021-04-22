// import React from 'react';
import "./index.css";

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    console.log({ name, email });
    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then(console.log);
  }
  return (
    <section className="data">
      <div>
        <h2>¡Únete a nuestras novedades y promociones!</h2>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu mail"
          required
        />
        <button type="submit">Suscribirse</button>
      </form>
    </section>
  );
}

export default Form;
