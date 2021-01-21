import React from 'react';
import * as S from './styles';

import Burger from './Burger';

import Logo from '../../assets/logo.svg';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <S.Container>
      <S.Nav>
        <div className="logo">
          <div className="flex">
            <img src={Logo} alt="Corebiz" />
          </div>
        </div>
      </S.Nav>
      <Burger />
      {props.children}
    </S.Container>
  )
}