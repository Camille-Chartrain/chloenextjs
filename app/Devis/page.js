import React from "react";
import "./style.scss";
import DevisForm from "./components/DevisForm";

const Devis = () => {
  return (
    <>
      <div className="devis">
        <main className="main">
          <h2>DEMANDE DE DEVIS GRATUIT</h2>
          <DevisForm />
        </main>
      </div>
    </>
  );
};

export default Devis;
