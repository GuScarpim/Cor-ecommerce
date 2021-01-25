import styled from 'styled-components';

interface INav {
  open: boolean;
  href?: string;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#000' : '#2E2E2E'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px;
    height: 100px;
    align-items: baseline;
  }

  .logo {
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .flex {
    max-width: 1700px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .imgLogo {
    width: 170px;
    height: 41px;

    @media (max-width: 768px) {
      width: 135px;
      height: 41px;
    }
  }

  img {
    margin-right: 60px;
    width: 25px;
    height: 25px;

    @media (max-width: 768px) {
      margin-right: 0px;
      width: 18px;
      height: 18px;
    }
  }

  .contentInput {
    position: relative;

    input {
      font-size: 18px;
      outline: none;
      width: 40vw;
      margin: 20px -30px 0 0;
      border: none;
      border-bottom: 2px solid #7A7A7A;
    }

    @media (max-width: 768px) {
      position: absolute;
      top: 50px;

      input {
        width: 80vw;
        right: 0;
        font-size: 14px;
      }
    }
  }

  .contentUser {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin: 0px 30px 0px -55px;
      color: #7A7A7A;
      font-size: 18px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  font-size: 18px;
  height: 67px;
  margin-left: 20px;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #7A7A7A;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(-20%)' : 'translateX(-130%)'};
    top: -16px;
    left: 0;
    height: 100%;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    li {
      color: #fff;
    }
    img {
      margin-left: 20px;
      width: 150px;
    }
  }
`

export const Container = styled.div`

`

export const Notification = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;

  @media (max-width: 768px) {
    position: absolute;
    right: 30px;
  }

  span {
    width: 20px;
    height: 20px;
    font-size: 12px;
    border-radius: 100%;
    background-color: #F8475F;
    font-weight: 700;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }

`