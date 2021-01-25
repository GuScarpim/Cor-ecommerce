import React, { useContext, useEffect } from 'react';
import * as S from './styles';

import Burger from './Burger';
import ShoppingContext from '../../context/shopping/index';

import Logo from '../../assets/logo.svg';
import Lupa from '../../assets/lupa.svg';
import User from '../../assets/user.svg';
import Shopping from '../../assets/shopping.svg';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  const { setState, state } = useContext(ShoppingContext);
  const { setState: setGlobalState } = useContext(ShoppingContext)

  useEffect(() => {
    let valueCounter = localStorage.getItem('counter')
    setGlobalState({ counter: Number(valueCounter) })
  }, [])

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
              <span>{state.counter}</span>
            </S.Notification>

          </div>
        </div>
      </S.Nav>
      <Burger />
      {props.children}
    </S.Container>
  )
}
