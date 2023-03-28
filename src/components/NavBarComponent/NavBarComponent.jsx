import React from "react";
import NavItem from "./NavItem";
import styles from "./NavComponent.module.css";

import { CartComponent } from "../CartComponent/CartComponent";

export const NavBarComponent = () => {

 

  return (
    <nav className={styles.nav}>
      <header>
        <a href="/">
          <img src="https://media.gettyimages.com/vectors/film-reel-on-black-vector-id165767406?s=612x612" alt="" width="60" height="60"/>
        </a>
      </header>
      <div className={styles.navItems}>
        <NavItem label="Inicio" src="/" />
        <NavItem label="Proximos estrenos" src="/estrenos" />
        <NavItem label="Peliculas" src="/peliculas" /> 
        <CartComponent />
      </div>
    </nav>
  );
};
