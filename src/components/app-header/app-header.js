import React from 'react';
import style from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <nav>
          <ul className={style.navigation}>
            <li className={style.navigationItem}>
              <BurgerIcon type="primary" />
              <span className={style.activeText}>Конструктор</span>
            </li>
            <li className={style.navigationItem}>
              <ListIcon type="secondary" />
              <span className={style.inactiveText}>Лента заказов</span>
            </li>
          </ul>
        </nav>
        <Logo />
        <div className={style.ownCabinet}>
          <ProfileIcon type="secondary" />
          <span className={style.inactiveText}>Личный кабинет</span>
        </div>
      </div>
    </header>
  );
}
