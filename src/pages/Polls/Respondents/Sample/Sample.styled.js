import styled from 'styled-components';
import theme from '../../../../styles/theme';

export default {
  NewSampleWrap: styled.div`
    width: 100%;
    background-color: #fff;
    padding: 50px 50px;
`,
  NewSample: styled.div`
    width: 100%;
    font-size: 16px;
    color: gray;
    border: 1px solid gray;
    cursor: pointer;
    padding: 20px 30px;
    border-radius: ${theme.radius.google}
  `,
  NewSampleIcon: styled.div`
    width: 100%;
    text-align: center;
  `,
  NewSampleText: styled.div`
    max-width: 400px;
    width: 100%;
    margin: 10px auto;
    text-align: center;
  `,
}