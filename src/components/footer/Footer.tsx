import React, { useState } from 'react';
import * as S from './styles';

import Email from '../../assets/email.png';
import Audio from '../../assets/audio.svg';
import LogoWhite from '../../assets/logo_white.svg';
import Vtex from '../../assets/vtex.svg';

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <div className="localizacao">
          <h1>Localização</h1>

          <article>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>
          </article>
        </div>

        <div className="contato">
          <section>
            <button type="button">
              <img src={Email} alt="Email" />
               ENTRE EM CONTATO
            </button>
            <button type="button">
              <img src={Audio} alt="Audio" />
               FALE COM O NOSSO CONSULTOR ONLINE
            </button>
          </section>
        </div>

        <div className="patriocinio">
          <div className="content_patriocinio">
            <p>Created by</p>
            <img src={LogoWhite} alt="Logo" />
          </div>

          <div className="content_patriocinio">
            <p>Powered by</p>
            <img src={Vtex} alt="Vtex" />
          </div>
        </div>
      </S.Content>
    </S.Container>
  )
}