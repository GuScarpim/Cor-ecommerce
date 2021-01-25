import React, { useState, useEffect } from 'react';
import * as S from './styles';

import StarPositive from '../../assets/starPosit.svg'
import StarNegative from '../../assets/starNegat.svg';

import Axios from 'axios';
import Globals from '../../Globals.json';

interface IProducts {
  imageUrl: string;
  installments: Array<{ quantity: number, value: string }>;
  listPrice: any;
  price: any;
  productId: number;
  productName: string;
  stars: number;
}

export default function ItemsContent() {
  const [products, setProducts] = useState<IProducts[]>([])

  const getProducts = () => {
    Axios.get(Globals.api.getProducts)
      .then(response => {
        const resp = response.data
        console.log(response.data)
        setProducts(resp)
      }).catch(err => {
        console.log(err)
      })
  }

  const getPrice = (price: any) => {
    let priceFormat = price / 100;
    return priceFormat.toFixed(2).toLocaleString();

  }

  const starsRender = (stars: any) => {
    let list = []
    for (let i = 1; i <= 5; i++) {
      list.push(<img key={"index" + i} src={i <= stars ? StarPositive : StarNegative} alt={"Estrelinha"} />)
    }

    return list;

  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <S.Container>

      <S.Content>
        <h1>Mais Vendidos</h1>
        <S.ContentCard>
          {products.map(item => (
            <S.Card key={item.productId}>
              <img src={item.imageUrl} alt={item.productName} className="image_products" />
              {item.listPrice && <S.Flag ><strong>OFF</strong></S.Flag>}
              <section>
                <label>{item.productName}</label>
                <S.Stars>
                  {starsRender(item.stars)}
                </S.Stars>
                {item.listPrice !== null &&
                  <p>de R$ {getPrice(item.listPrice)}</p>
                }
                <h3>por R$ {getPrice(item.price)}</h3>

                {item.installments.map((item, index) => (
                  <small className='installments' key={index}>
                    ou em {item.quantity} de {getPrice(item.value)}
                  </small>
                ))}

                <button>Comprar</button>
              </section>
            </S.Card>
          ))}
        </S.ContentCard>
      </S.Content>
    </S.Container>
  )
}