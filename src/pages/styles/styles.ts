import styled from 'styled-components';

export const Container = styled.div`
  .wave {
    position: relative;
    height: 70px;
    width: 100px;
    background: #e0efe3;
    transform: rotate(270deg);
  }

  .wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 50px;
    height: 80px;
    background-color: white;
    right: -5px;
    top: 40px;
  }

  .wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 50px;
    height: 70px;
    background-color: #e0efe3;
    left: 0;
    top: 27px;
  }

`
