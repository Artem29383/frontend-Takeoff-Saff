import styled from 'styled-components';

export default {
  Button: styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    max-width: 200px;
    background-color: #fff;
    color: ${({ type }) => type === 'plus' ?  'yellowgreen' : 'red'};
    border-radius: 5px;
    border: ${({ type }) => type === 'plus' ? '1px solid yellowgreen' : '1px solid gray'};
  `,
}