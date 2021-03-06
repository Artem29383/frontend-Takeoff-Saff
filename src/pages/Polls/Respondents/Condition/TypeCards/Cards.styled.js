import styled from 'styled-components';

export default {
  Type: styled.div`
    width: 100%;
    display: grid;
    font-size: 16px;
    grid-template-columns: 20% 1fr;
    grid-gap: 50px;
  `,
  TypeFooter: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
}