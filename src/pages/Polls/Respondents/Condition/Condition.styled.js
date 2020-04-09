import styled from 'styled-components';

export default {
  Condition: styled.div`
    position:relative;
    padding: 30px 30px 20px 55px;
    background-color: ${({ index }) => index % 2 === 0 ? '#fff' : 'floralwhite'};
    
    &::before {
      content: 'И';
      display: ${({ index }) => index > 1 ? 'block' : 'none'};
      position: absolute;
      top: -20px;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      background-color: #737373;
    }
  `,
  DivCond: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 80px;
    margin-bottom: 70px;
`,
  CondText: styled.div`
    font-size: 16px;
    font-weight:bold;
    display: flex;
    align-items: center;
  `,
  CondOptions: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
   `,
  RemovePos: styled.div`
    position:absolute;
    bottom: 20px;
    right: 30px;
  `,
}