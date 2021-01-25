import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: -72px;

  @media (max-width: 768px) {
    margin-top: -20px;
  }

  .banner {
    position: absolute;
    width: 50%;
    height: 380px;
    left: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .imageCarrosel {
    width: 60%;
    height: 380px;

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    @media (max-width: 500px) {
      height: 200px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 48%;
    position: absolute;
    left: 0px;
    height: 401px;
    color: #FFF;

    h1 {
      font-size: 40px;
      width: 400px;
      margin-top: 0px;
    }

    label {
      font-size: 26px;
      width: 400px;
    }

    @media (max-width: 868px) {
      width: 58%;
    }

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
    }

    @media (max-width: 500px) {
      justify-content: flex-start;
      margin-top: 65px;
      width: 100%;
      text-align: center;

      h1 {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 20px;
      }

      label {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 16px;
      }
    }
  }

  .content_circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 10px;

  .circle_orange {
    width: 12px;
    height: 12px;
    background: #F8475F;
    border-radius: 100%;
    margin-right: 10px;
  }

  .circle {
    width: 12px;
    height: 12px;
    background: #FFF;
    border-radius: 100%;
    margin-right: 10px;
  }

    @media (max-width: 500px) {
      .circle_orange {
        width: 8px;
        height: 8px;
      }

      .circle {
        width: 8px;
        height: 8px;
      }
    }
  }

`
