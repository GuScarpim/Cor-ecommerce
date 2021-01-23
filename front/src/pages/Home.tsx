import React, { useState } from 'react';
import * as S from './styles/styles';

import NavBar from '../components/menu/Navbar';
import Banner from '../components/banner/Banner';
import ItemsContent from '../components/itemsContent/ItemsContent';
import Form from '../components/form/Form';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <NavBar>
      <S.Container>
        <Banner />
        <ItemsContent />
        <Form />
        <Footer />
      </S.Container>
    </NavBar>
  )
}