import React from "react";
import { Link } from "react-router-dom";

export default function TeamList() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 m-10">
        <div className="flex flex-col items-center justify-center text-center border-solid border-2 border-sky-500 rounded-xl">
          <img
            src="https://serverlatam.deporstar.com/media/equipos/image_KN8iUjD.jpeg"
            alt=""
            className="size-16 rounded-full"
          />
          <h1 className="font-bold">C. Benito Balarezo</h1>
          <p>Clasificatoria por posicion tabla</p>
          <Link
            to={"/tournament/:idTorneo/category/:idCategory/teams/:id"}
            type="button"
            className="m-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Ver equipo
          </Link>
        </div>
      </div>
    </>
  );
}
