import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: -72px;

  .banner {
    position: absolute;
    width: 50%;
    height: 380px;
    left: 0;
  }

  .imageCarrosel {
    width: 60%;
    height: 380px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 48%;
    position: absolute;
    left: -60px;
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

  }

`
