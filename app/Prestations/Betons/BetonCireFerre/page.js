import React from "react";
import "./page.scss";
import BetonCireFerre from "./index";

export default function BetonCireFerrePage() {
  return (
    <div className="page-produit">
      <BetonCireFerre isLink={false} orientation="horizontal" />
    </div>
  );
}
