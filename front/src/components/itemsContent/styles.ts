import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: bold;
    font-size: 24px;
    position: relative;
    margin: 40px 0 0 50px;

    &:before {
      content: '';
      position: absolute;
      border: 2px solid #C0C0C0;
      background: #C0C0C0;
      bottom: -5px;
      width: 80px;
    }
  }
`

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  margin: 20px 0px 0px 40px;
  max-width: 600px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 0;
    width: 100%;
    height: 150px;

    &:hover {
      background: #E6E8EA;
      transition: all 0.6s;

      button {
        opacity: 1;
        transition: all 0.4s;
        color: #FFF;
        background: #000;
        border-radius: 5px;
        outline: none;
        text-align: center;
        height: 33px;
        width: 125px;
        position: absolute;
        bottom: 12px;
        cursor: pointer;
      }
    }

    img {
      width: 216px;
      height: 200px;
    }

    button {
      opacity: 0;
    }

    label {
      margin: 0 0 5px 0;
      font-size: 14px;
      font-weight: 400;
    }

    p {
      margin: 0 0 5px 0;
      text-decoration: line-through;
      font-size: 13px;
    }

    h3 {
      margin: 0px 0 0px 0;
    }


    small {
      margin: 0;
      color: #7A7A7A;
    }
  }
`

export const Flag = styled.div`
  strong {
    z-index: 99999;
    position: absolute;
    top: 16px;
    right: 5px;
    color: #FFF;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-left: 0;
    border-top: 75px solid #F8475F;
    border-left: 75px solid transparent;
    border-bottom: 75px solid transparent;
  }
`

export const Stars = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 12px !important;
    height: 12px !important;
  }
`