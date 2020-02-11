import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './sider.module.css';

function Sider(props) {
  return (
    <nav className={styles.sider}>
      <ul>
        {props.menus.map((item, index) => {
          return (
            <li key={index} className={styles.menuItem}>
              <NavLink to={item.key} activeClassName={styles.active}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Sider);
