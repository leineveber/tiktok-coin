import React from 'react';
import { Icon24Users, Icon24Podcast } from '@vkontakte/icons';

export const moreLinksData = [
  {
    name: 'Канал проекта',
    description: 'Новости',
    path: 'https://t.me/tiktok_coins',
    Icon: <Icon24Users width={16} height={16} />,
    background: 'icon',
  },
  {
    name: 'Инструкция',
    description: 'Как пользоваться приложением',
    path: 'https://teletype.in/@tiktokcoin/TikTokCoin_info',
    Icon: <Icon24Podcast width={16} height={16} />,
    background: 'iconRed',
  },
  {
    name: 'FAQ',
    description: 'Часто задаваемые вопросы',
    path: 'https://teletype.in/@tiktokcoin/FAQ',
    Icon: <Icon24Podcast width={16} height={16} />,
    background: 'iconRed',
  },
  {
    name: 'Техническая поддержка',
    description: 'По любым вопросам',
    path: '#',
    Icon: <Icon24Podcast width={16} height={16} />,
    background: 'iconRed',
  },
];
