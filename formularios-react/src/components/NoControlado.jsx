import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // capturar datos
    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);

    // validar los datos
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("Llena todos los campos");

    // enviar los datos
    console.log(title, description, state);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingresa Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="todo 01"
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        defaultValue="descripcion 01"
      />
      <select
        className="form-select mb-2"
        name="state"
        defaultValue="completado"
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error !== "" && error}
    </form>
  );
};
export default NoControlado;
