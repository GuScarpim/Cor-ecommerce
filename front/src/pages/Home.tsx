import React, { useState } from 'react';
import * as S from './styles/styles';

import NavBar from '../components/menu/Navbar';

export default function Home() {
  return (
    <NavBar>
      <S.Container>
      <div className='wave' />

      </S.Container>
    </NavBar>
  )
}