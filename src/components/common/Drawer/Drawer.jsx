import React from 'react';
import { Swipeable, defineSwipe } from 'react-touch';
import * as S from './Drawer.styles';

export const Drawer = ({ setDrawerVisible, children, ...props }) => {
  const swipe = defineSwipe({ swipeDistance: 50 });

  return (
    <Swipeable config={swipe} onSwipeDown={() => setDrawerVisible(false)}>
      <S.Drawer height={450} placement="bottom" onClose={() => setDrawerVisible(false)} {...props}>
        {children}
      </S.Drawer>
    </Swipeable>
  );
};
