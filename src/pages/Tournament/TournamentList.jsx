import React from "react";
import Card from "../../components/Card";

export default function TournamentList() {
  return (
    <>
      <div className=" m-10 bg-black rounded-lg">
        <h1 className=" uppercase font-semibold whitespace-nowrap p-5 text-white">
          Torneos:
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-5 px-5">
          <Card
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt="cpm"
            title={"Copa Miguel Asimbaya"}
          />
          <Card
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt="cpm"
            title={"Copa Libertadores"}
          />
        </div>
      </div>
    </>
  );
}
