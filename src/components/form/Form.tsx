import React, { useState } from 'react';
import * as S from './styles';

import Axios from 'axios';
import Globals from '../../Globals.json';

export default function Form() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [success, setSuccess] = useState(false)

  const clearState = () => {
    setEmail('')
    setName('')
  }

  const postData = () => {
    if (email === '') {
      setErrorEmail(true)
    } if (name === '') {
      setErrorName(true)
    }

    Axios.post(Globals.api.newsletter, {
      "email": email,
      "name": name
    }).then(response => {
      console.log(response.data)
      setErrorEmail(false)
      setErrorName(false)
      setSuccess(true)
      clearState()
    }).catch(err => {
      setErrorEmail(true)
      setErrorName(true)
      console.log(err)
    })
  }

  return (
    <S.Container>
      {success === false ?
        <h1>Participe de nossas news com promoções e novidades!</h1> :
        <div className="success">
          <h1>Seu e-mail foi cadastrado com sucesso!</h1>
          <span>A partir de agora você receberá as novidade e ofertas exclusivas.</span>
        </div>
      }
      <S.Content errorEmail={errorEmail} errorName={errorName}>
        {success === false ?
          <>
            <div className="form_input">
              <input className="inputName" type="text" placeholder="Digite seu nome" value={name}
                onChange={(e: any) => setName(e.target.value)} />
              <small className="smallName">Preencha com seu nome completo</small>
            </div>

            <div className="form_input">
              <input className="inputEmail" type="email" placeholder="Digite seu email" value={email}
                onChange={(e: any) => setEmail(e.target.value)} />
              <small className="smallEmail">Preencha com um email válido</small>
            </div>

            <S.Button type="button" colorButton={name === '' || email === '' ? true : false} onClick={postData}>Eu quero!</S.Button>
          </> :
          <S.ButtonSuccess type="button" onClick={() => setSuccess(false)}>Cadastrar novo e-mail</S.ButtonSuccess>
        }
      </S.Content>
    </S.Container>
  )
}