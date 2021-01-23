import styled from 'styled-components';

interface Iclass {
  colorButton?: boolean;
  errorName?: boolean;
  errorEmail?: boolean;
}


export const Container = styled.div`
  background: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 160px;
  padding: 20px;
  margin-top: 40px;

  h1 {
    margin-top: -10px;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
  }

  .success {
   h1 {
     margin-bottom: 0px;
     font-size: 20px;
   }

   span {
     font-size: 15px;
   }
  }
`

export const Content = styled.div<Iclass>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;

  .form_input {
    display: flex;
    flex-direction: column;
    width: 300px;

    .inputName {
      margin-left: 0px;
      border: ${(props) => props.errorName ? '1px solid #D7182A' : 'none'};
    }

    .inputEmail {
      margin-left: 30px;
      border: ${(props) => props.errorEmail ? '1px solid #D7182A' : 'none'};
    }

    .smallEmail {
      transition: all 0.6s;
      margin-left: 35px;
      color: #D7182A;
      opacity: ${(props) => props.errorEmail ? '1' : '0'};
    }

    .smallName {
      transition: all 0.6s;
      margin-left: 5px;
      color: #D7182A;
      opacity: ${(props) => props.errorEmail ? '1' : '0'};
    }
  }

  input {
    height: 48px;
    max-width: 280px;
    width: 100%;
    margin: 0 -20px 5px 0px;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    padding: 0 10px 0 10px;
    border: none;
  }
`

export const Button = styled.button<Iclass>`
  color: #FFF;
  background: ${(props) => props.colorButton ? '#333' : '#000'};
  margin: -16px 0 0 40px;
  font-size: 18px;
  font-weight: 800;
  border-radius: 5px;
  outline: none;
  text-align: center;
  height: 48px;
  width: 140px;
  cursor: pointer;

`

export const ButtonSuccess = styled.button`
  color: #FFF;
  background: #000;
  margin: 10px 0 0 0;
  font-size: 18px;
  font-weight: 800;
  border-radius: 5px;
  outline: none;
  text-align: center;
  height: 48px;
  width: 328px;
  cursor: pointer;
`