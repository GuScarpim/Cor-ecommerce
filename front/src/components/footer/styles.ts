import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 280px ;
  width: 100%;
  padding: 0 20px 0 20px;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    align-items: flex-start;

    .localizacao {
      h1 {
        font-size: 26px;

        &:after {
          width: 70px;
        }
      }
    }

    .contato {
      width: 100%;
      display: flex;
      margin-left: 0;
    }

    .patriocinio {
      justify-content: space-around;
      align-items: center;
      width: 100%;

      .content_patriocinio {
        margin: 0 0 30px 0 !important;
      }
    }
  }

  .localizacao {
    display: flex;
    flex-direction: column;

    h1 {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        border: 2px solid #FFF;
        bottom: -10px;
        left: 0;
        width: 80px;
      }
    }

    p {
      margin: 0 0 10px 0;
    }
  }

  .contato {
    display: flex;
    align-items: center;
    justify-content: center;

    section {
      margin-top: 40px;
      display: flex;
      flex-direction: column;

      button {
        border: none;
        border-radius: 5px;
        height: 40px;
        width: 195px;
        align-items: center;
        background: #FFF;
        font-size: 12px;
        padding: 0 10px 0 10px;
        font-weight: 800;
        margin-bottom: 20px;
        color: #000;
        display: flex;
        justify-content: space-around;
      }
    }
  }

  .patriocinio {
    display: flex;
    align-items: center;

    .content_patriocinio {
      margin: 0 0 0 30px;
      p {
        margin: 0;
        font-size: 12px;

        img {
          width: 100px;
        }
      }
    }
  }
`