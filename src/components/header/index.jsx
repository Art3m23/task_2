import styles from './style.module.css';
import { Contacts } from '../contacts';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.purple_circle}/>
      <div className={styles.purple_ball}/>
      <div className={styles.red_ball}/>
      <div className={styles.logo}>
        <div className={styles.logo_icon} />
        <p className={styles.logo_text}>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.nav_list}>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </nav>
      <Contacts tag='header'/>
    </header>
  )
}