import React, { useState } from 'react';
import * as S from './styles';

import IBanner from '../../assets/banner.png';
import ImageCarrosel from '../../assets/imageCarrosel.png';

export default function Banner() {
  return (
    <S.Banner>
      <img src={IBanner} alt="Banner" className="banner" />
      <img src={ImageCarrosel} alt="Image cartão" className="imageCarrosel" />

      <section>
        <label>Olá, o que você está buscando?</label>
        <h1>Criar ou migrar seu e-commerce?</h1>
      </section>

      <div className="content_circle">
        <div className="circle_orange" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </S.Banner>
  )
}