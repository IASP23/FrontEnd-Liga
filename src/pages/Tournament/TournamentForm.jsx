import React from "react";
import Item from "../../components/Item";
import { useNavigate } from "react-router-dom";
export default function TournamentForm() {
  const navigate = useNavigate();

  const saveTournament = () => {
    navigate("/tournaments");
  };
  return (
    <>
      <div className="m-10 p-5 bg-blue-800 rounded-lg border-x-amber-500 ">
        <h1 className="uppercase font-bold">Ingreso de Torneo:</h1>
        <div className="grid grid-cols-2 gap-3">
          <Item
            htmlFor={"nombre"}
            type={"text"}
            placeholder={"Real Madrid"}
            name={"nombre"}
            label={"Nombre del Equipo:"}
          />

          <Item
            htmlFor={"starDate"}
            type={"date"}
            name={"starDate"}
            label={"Fechad de inicio:"}
          />
          <Item
            htmlFor={"endDate"}
            type={"date"}
            name={"endDate"}
            label={"Fechad de Finalizacion:"}
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            className="mt-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => {
              saveTournament();
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}
