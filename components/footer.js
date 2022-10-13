import styles from '../styles/footer.module.css'

export default ()=>{
    return <div className={styles.footer-container}>
        <div className={styles.footer}>
        <div className={styles.copyright}>2021 Artis REIT. All rights reserved.</div>
        <div className={styles.footer_info}>
            <a href="https://livingat300main.ca/about/" aria-current="page">About this Site</a>
            <a href="https://livingat300main.ca/be-a-contributor/">Be a Contributor</a>
            <a href="http://300main.ca">300 Main Apartments</a>
            <a href="#">go up</a>
        </div>
    </div>
  </div>
}