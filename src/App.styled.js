import styled from 'styled-components';

export default {
  Content: styled.div`
    max-width: 900px;
    width: 100%;
    height: 700px;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 30px;
    position: relative;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    justify-content: space-between;
  `,
}