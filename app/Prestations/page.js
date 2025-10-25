import React from "react";
import "./style.scss";
import Link from "next/link";
import LinkForm from "../Components/LinkForm/page";

const prestations = () => {
  return (
    <>
      <h2>PRESTATIONS</h2>
      <aside className="note">
        {/* TOUS NOS MATIERES SONT DISPONIBLES DANS DE NOMBREUSES TEINTES. */}
        Toutes nos matières sont disponibles dans de  nombreuses teintes.
      </aside>

      <div className="both_sections">
        <Link href="/Prestations/Betons/">
          <div className="duo_img">
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de béton ciré"}
              className="image"
            />
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de béton ciré"}
              className="image"
            />
          </div>
          <h3>LES BETONS CIRES</h3>
        </Link>

        <Link href="/Prestations/EnduitsDecoratifs/">
          <div className="duo_img">
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de revêtement muraux"}
              className="image"
            />
            <img
              src={"/IMG_3684.jpg"}
              alt={"illustration de revêtement muraux"}
              className="image"
            />
          </div>
          <h3>LES ENDUITS DECORATIFS</h3>
        </Link>
      </div>



      <section className="durabilite">
        <p className="title">DURABILITE</p>
        <p className="text">
          Le béton ciré est reconnu pour sa grande résistance et son élégance
          intemporelle. Il fait parti avec les enduits décoratifs des revêtements minces qui suivent
          fidèlement le support sur lequel ils sont appliqués.
        </p>
        <p className="text">
          Nos maisons vivent : les structures se dilatent, la terre bouge et de
          légères microfissures peuvent apparaître. Ce phénomène n’est pas un
          défaut des matières mais le résultat naturel des mouvements du
          bâtiment et des supports. Envisager la
          possibilité de fissuration fait partie d’une approche réaliste et
          responsable.
        </p>
        <p className="text">
          La prévention passe par une préparation rigoureuse et
          l’utilisation de produits de qualité.
          Un béton ciré bien posé et bien entretenu est un
          revêtement durable, esthétique et unique qui évolue avec votre
          habitat.
        </p>
      </section>
      <LinkForm />
    </>
  );
};

export default prestations;
