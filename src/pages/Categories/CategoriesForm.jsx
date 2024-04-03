import React from "react";
import Item from "../../components/Item";
import { useNavigate } from "react-router-dom";

export default function CategoriesForm() {
  const navigate = useNavigate();
  const saveCategory = () => {
    navigate("/category/team/create");
  };

  return (
    <>
      <div className="m-10 p-5 bg-blue-800 rounded-lg border-x-amber-500 ">
        <h1 className="uppercase font-bold">Ingreso de Categorias:</h1>
        <div className="grid grid-cols-2 gap-3">
          <Item
            htmlFor={"maxima"}
            type={"text"}
            placeholder={"Maxima"}
            name={"maxima"}
            label={"Nombre de la categoria"}
          />

          <Item
            htmlFor={"descripcion"}
            type={"text"}
            placeholder={"Descripcion"}
            name={"descripcion"}
            label={"Descricpion de la categoria"}
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            className="mt-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => {
              saveCategory();
            }}
          >
            Guardar y Registrar equipos
          </button>
        </div>
      </div>
    </>
  );
}
