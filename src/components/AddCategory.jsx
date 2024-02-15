import { useState } from "react";

// Componente para agregar categorias nuevas
export const AddCategory = ({ setCategories }) => {
  // Estado para el valor del input
  const [inputValue, setInputValue] = useState();

  // Funcion para manejar el cambio del input
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  // Funcion para manejar el submit del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    // Validamos que el input no este vacio
    if (inputValue.trim().length === 0) return;
    // Agregamos la nueva categoria al estado
    setCategories((cats) => [inputValue, ...cats]);
    // Limpiamos el input
    setInputValue("");
  };

  // Renderizamos el formulario
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
