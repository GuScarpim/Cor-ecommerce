import React from 'react';
import * as S from './styles';

import Burger from './Burger';

import Logo from '../../assets/logo.svg';
import Lupa from '../../assets/lupa.svg';
import User from '../../assets/user.svg';
import Shopping from '../../assets/shopping.svg';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <S.Container>
      <S.Nav>
        <div className="logo">
          <div className="flex">
            <img className="imgLogo" src={Logo} alt="Corebiz" />

            <div className="contentInput">
              <input type="text" placeholder="O que está procurando?" />
              <img src={Lupa} alt="Lupa" />
            </div>

            <div className="contentUser">
              <img src={User} alt="Usuario" />
              <span>Minha Conta</span>
            </div>

            <S.Notification>
              <img className="shopping" src={Shopping} alt="Carrinho de compras" />
              <span>1</span>
            </S.Notification>

          </div>
        </div>
      </S.Nav>
      <Burger />
      {props.children}
    </S.Container>
  )
}