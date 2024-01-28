import React from 'react'
import ImageHero from '../../assets/Crear-un-arbol-genealogico.jpg'
import style from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className={style.container}>
      <h1>Arma tu propio árbol genealógico</h1>
      <img src={ImageHero} alt="" />
    </div>
  )
}

export default HeroSection