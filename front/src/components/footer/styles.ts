import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px ;

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "localizacao contato patriocinio";
  }

  .localizacao {
    grid-area: localizacao;
    display: flex;
    flex-direction: column;
    margin-left: 115px;

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
    grid-area: contato;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px 0 20px;
    margin-left: 150px;

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
    grid-area: patriocinio;
    display: flex;
    align-items: center;
    margin: 0 0 0 130px;

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