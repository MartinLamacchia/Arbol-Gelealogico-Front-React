import React from "react";
import Logo from "../../assets/descarga.png";
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <img src={Logo} alt="Logo del Nav" />
        <p>Árbol Familiar</p>
      </div>
      <div className={style.containerButton}>
        <button>Registrarse</button>
        <button>Iniciar Sesión</button>
      </div>
    </div>
  );
};

export default NavBar;
