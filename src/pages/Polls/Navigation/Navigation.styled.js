import styled from 'styled-components';

export default {
  FormNav: styled.div`
    font-size: 18px;
    width: 100%;
  `,
  FormNavUl: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  FormNavItem: styled.li`
    padding: 20px 35px;
    position: relative;
    cursor: pointer;
    
    &.active::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: greenyellow;
      bottom: 0;
      left: 0;
    }
  `,
};