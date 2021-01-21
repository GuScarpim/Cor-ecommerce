import React, { useEffect, useContext, useState } from 'react'

import * as S from './styles';

type Props = {
  open: boolean;
}

function RightNav(props: Props) {
  return (
      <S.Ul open={props.open}>
        <li>Home</li>
        <li>Projetos</li>
      </S.Ul>
  )
}

export default RightNav
