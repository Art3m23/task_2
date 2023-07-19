import styles from './style.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.red_circle} />
      <div className={styles.red_ball} />
      <section className={styles.tagline_section}>
        <p className={styles.caption}>
          Зарабатывайте больше
        </p>
        <p className={styles.gradient_text}>с WELBEX</p>
        <p className={styles.tagline}>
          Развиваем и контролируем продажи за вас
        </p>
      </section>
      <section className={styles.presents_section}>
        <p className={styles.title}>
          Вместе с <span className={styles.gradient_text}>бесплатной консультацией</span> мы дарим:
        </p>
        <div className={styles.presents_container}>
          <ul className={styles.list_presents}>
            <li className={styles.list_presents_item}>
              <h3 className={styles.presents_title}>Виджеты</h3>
              <p className={styles.presents_subtitle}>30 готовых решений</p>
            </li>
            <li className={styles.list_presents_item}>
              <h3 className={styles.presents_title}>Dashboard</h3>
              <p className={styles.presents_subtitle}>с показателями
                вашего бизнеса</p>
            </li>
          </ul>
          <ul className={styles.list_presents}>
            <li className={styles.list_presents_item}>
              <h3 className={styles.presents_title}>Skype Аудит</h3>
              <p className={styles.presents_subtitle}>отдела продаж и CRM системы</p>
            </li>
            <li className={styles.list_presents_item}>
              <h3 className={styles.presents_title}>35 дней</h3>
              <p className={styles.presents_subtitle}>использования CRM</p>
            </li>
          </ul>
          <ul className={styles.list_presents_320}>
            <li className={styles.list_presents_320_item}>
              <h3 className={styles.presents_320_title}>Skype Аудит</h3>
            </li>
            <li className={styles.list_presents_320_item}>
              <h3 className={styles.presents_320_title}>30 виджетов</h3>
            </li>
          </ul>
          <ul className={styles.list_presents_320}>
            <li className={styles.list_presents_320_item}>
              <h3 className={styles.presents_320_title}>Dashboard</h3>
            </li>
            <li className={styles.list_presents_320_item}>
              <h3 className={styles.presents_320_title}>Месяц аmoCRM</h3>
            </li>
          </ul>
        </div>
        <button className={styles.consultation_btn}>Получить консультацию</button>
      </section>
    </main>
  )
}