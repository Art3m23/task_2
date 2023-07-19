import styles from './style.module.css';

export const Contacts = ({tag}) => {
  return (
    <div className={tag==='footer'?styles.contacts_footer:styles.contacts_header}>
      <div className={styles.phonenumber}>
        +7 555 555-55-55
      </div>
      <div className={styles.messengers}>
        <ul className={styles.list}>
          <li className={styles.list_item}><img src="./img/telegram.svg" alt="telegram" /></li>
          <li className={styles.list_item}><img src="./img/viber.svg" alt="viber" /></li>
          <li className={styles.list_item}><img src="./img/whatsapp.svg" alt="whatsapp" /></li>
        </ul>
      </div>
    </div>
  )
}