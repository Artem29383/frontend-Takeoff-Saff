import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default {
  Header: styled.div`
    margin-right: 30px;
  `,
  Hul: styled.ul`
    width: 100%;
    height: 100%;
    font-size: 16px;
  `,
  HulItem: styled(NavLink)`
    width: 100%;
    background-color: white;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color .2s linear, color .2s linear, border .2s linear;
    border-radius: 5px;
    display: block;
    text-decoration: none;
    color: #000;
    border: 2px solid transparent;
    
    & svg {
      transition: fill .2s linear;
    }
    
    &:first-child {
      margin: 0 0 10px 0;
    }
    
    &.active {
      background-color: lightgray!important;
      color: #000!important;
      border: 2px solid transparent!important;
      
      & svg {
        fill: #000!important;
      }
     
    }
    
    &:hover {
      border: 2px solid greenyellow;
      color: greenyellow;
      background-color: #fff;
      
      & svg {
        fill: greenyellow;
      }
    }
  `,
  HulItemIcon: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px 0 10px 0;
  `,
  HulItemTitle: styled.div`
    text-align: center;
    padding-bottom: 10px;
  `,
}