import styles from './style.module.css';
import { Contacts } from '../contacts';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navbar}>
        <ul className={styles.nav_list}>
          <li className={`${styles.list_item} ${styles.compony}`}>
            <h3 className={styles.list_item_title}>О компании</h3>
            <ul className={styles.nav_list}>
              <li className={styles.list_item}>Партнёрская программа</li>
              <li className={styles.list_item}>Вакансии</li>
            </ul>
          </li>
          <li className={`${styles.list_item} ${styles.footer_menu}`}>
            <h3 className={styles.list_item_title}>Меню</h3>
            <div className={styles.menu}>
              <ul className={styles.nav_list}>
                <li className={styles.list_item}>Расчёт стоимости</li>
                <li className={styles.list_item}>Услуги</li>
                <li className={styles.list_item}>Виджеты</li>
                <li className={styles.list_item}>Интеграции</li>
                <li className={styles.list_item}>Наши клиенты</li>
              </ul>
              <ul className={styles.nav_list}>
                <li className={styles.list_item}>Благодарность клиентов</li>
                <li className={styles.list_item}>Кейсы</li>
                <li className={styles.list_item}>Благодарственные письма</li>
                <li className={styles.list_item}>Сертификаты</li>
                <li className={styles.list_item}>Блог на Youtube</li>
                <li className={styles.list_item}>Вопрос / Ответ</li>
              </ul>
            </div>
          </li>
          <li className={`${styles.list_item} ${styles.contacts}`}>
            <h3 className={styles.list_item_title}>Контакты</h3>
            <Contacts tag='footer' />
            <ul className={styles.nav_list}>
              <li className={styles.list_item}>Москва, Путевой проезд 3с1, к 902</li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className={styles.copyright_container}>
        <p className={styles.copyright}>©WELBEX 2022. Все права защищены.</p>
        <p className={styles.privacy_policy}>Политика конфиденциальности</p>
      </div>
    </footer>
  )
}