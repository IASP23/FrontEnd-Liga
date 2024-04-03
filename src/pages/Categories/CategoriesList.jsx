import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  return (
    <>
      <h1>Categorias</h1>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <div className="text-center items-center justify-center align-middle">
          <h1 className="font-bold">Titulo de la categoria</h1>
          <p>
            Descripcion de la categoria Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero, enim dicta sit, exercitationem, quas
            maiores quia dolores culpa quaerat vel eaque quibusdam officiis
            aperiam totam expedita itaque cumque quis? Tenetur.
          </p>
          <div className="flex flex-row justify-center gap-2">
            <Link
              to={"/teams"}
              type="button"
              className="mt-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Ver Equipos
            </Link>
            <button
              type="button"
              className="mt-2  focus:outline-none text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Registrar Equipos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
