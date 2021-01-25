import React, { useEffect, useContext, useState } from 'react'

import * as S from './styles';

import Logo from '../../assets/logo.svg';


type Props = {
  open: boolean;
}

function RightNav(props: Props) {
  return (
    <S.Ul open={props.open}>
      <img className="imgLogo" src={Logo} alt="Corebiz" />
    </S.Ul>
  )
}

export default RightNav
