"use client";

import "./style.scss";
import Carousel from "@/app/Components/Caroussel";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PresentationProduit({
  images,
  title,
  text,
  link,
  orientation,
}) {
  const pathname = usePathname();

  const Description = (
    <div className="presentation-description">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );

  return (
    <>
      <div className="presentation-produit">
        <div className="presentation-carousel">
          <Carousel images={images} title={title} orientation={orientation} />
        </div>

        {link ? (
          <Link href={`${pathname}/${link}`}>{Description}</Link>
        ) : (
          Description
        )}
      </div>
    </>
  );
}
