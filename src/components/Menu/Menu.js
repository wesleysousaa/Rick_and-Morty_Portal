import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

// Assets
import imageMenu from '../../assets/iconmenu.png'
import imageMenu2 from '../../assets/iconmenu2.png'

const Menu = () => {

  return (
    <nav>
      <div className={styles.imagesMenu}>
        <img src={imageMenu} alt="image_menu" className={styles.imageMenu} />
        <img src={imageMenu2} alt="image_menu2" className={styles.imageMenuName} />
      </div>

      <ul className={styles.menuDesktop}>
        <li>
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/persons'>Personagens</NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Menu