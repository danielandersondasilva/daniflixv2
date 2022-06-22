import React from "react";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Menu.css";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DaniFlix logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
