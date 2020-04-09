import React, { memo } from 'react';
import S from './Header.styled';
import Svg from '../../assets/images/styled';
import form from '../../assets/images/form.svg';
import user from '../../assets/images/user.svg';
import nation from '../../assets/images/nation.svg';
import phone from '../../assets/images/phone.svg';
import routes from '../../constants/routes';

const Header = () => (
  <S.Header>
    <S.Hul>
      
      <S.HulItem to={routes.polls}>
        <S.HulItemIcon>
          <Svg.form>
            <use xlinkHref={`${form}#form`} />
          </Svg.form>
        </S.HulItemIcon>
        <S.HulItemTitle>Опросы</S.HulItemTitle>
      </S.HulItem>
      
      
      
      <S.HulItem to={routes.users}>
        <S.HulItemIcon>
          <Svg.user>
            <use xlinkHref={`${user}#user`} />
          </Svg.user>
        </S.HulItemIcon>
        <S.HulItemTitle>Пользователи</S.HulItemTitle>
      </S.HulItem>
      <S.HulItem to={routes.blackList}>
        <S.HulItemIcon>
          <Svg.nation>
            <use xlinkHref={`${nation}#nation`} />
          </Svg.nation>
        </S.HulItemIcon>
        <S.HulItemTitle>Черные списки</S.HulItemTitle>
      </S.HulItem>
      <S.HulItem to={routes.callCenter}>
        <S.HulItemIcon>
          <Svg.phone>
            <use xlinkHref={`${phone}#phone`} />
          </Svg.phone>
        </S.HulItemIcon>
        <S.HulItemTitle>Колл-центр</S.HulItemTitle>
      </S.HulItem>
    </S.Hul>
  </S.Header>
);

export default memo(Header);