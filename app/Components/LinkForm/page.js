import React from "react";
import "./style.scss";
import Link from "next/link";

const LinkForm = () => {
    return (
        <div className="">
            <Link href="/Devis" className="link"><span className="button">Demande de devis</span> </Link>

        </div>
    );
};

export default LinkForm;
