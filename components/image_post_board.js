import styles from '../styles/image_post_board.module.css'

export default ()=>{
    return <div className={styles.imgBoard}>
    <div className={styles.a}> 

      <div className={styles.textOnImage}>
        <a href="https://livingat300main.ca/space-ideas-for-small-gardens/">
          <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/09/garden3-900x900.jpg" />
        </a>
        <div className={styles.textContent}>
          <p>
            <a href="https://livingat300main.ca/category/apartment-hacks/" className={styles.cat}>Apartment Hacks</a>
            <span className={styles.separator}>·</span>
            <span className={styles.date}><time dateTime="2022-09-09T19:22:44+00:00">September 9, 2022</time></span>
          </p>
          <p>
            <a href="https://livingat300main.ca/space-ideas-for-small-gardens/">Space Ideas for Small Gardens</a>
          </p>
        </div>
      </div>
      

    </div>
    <div className={styles.b}>
      <div className={styles.c}>

        <div className={styles.textOnImage}>
          <a href="https://livingat300main.ca/300-main-pup-patio-at-manyfest/">
            <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/09/pup-6317bb23b019c-585x293.jpg" />
          </a>
          <div className={styles.textContent}>
            <p>
              <a href="https://livingat300main.ca/category/300-main/" className={styles.cat}>300 Main</a>
              <span className={styles.separator}>·</span>
              <span className={styles.date}><div className={styles.time} dateTime="2022-09-06T21:27:30+00:00">September 6, 2022</div></span>
            </p>
            <p>
              <a href="https://livingat300main.ca/300-main-pup-patio-at-manyfest/">300 Main Pup Patio at Manyfest</a>
            </p>
          </div>
        </div>

      </div>
      <div className={styles.d}>
        <div>

          <div className={styles.textOnImage}>
            <a href="https://livingat300main.ca/summer-smoothies/">
              <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/08/blog3-390x390.png" />
            </a>
            <div className={styles.textContent}>
              <p>
                <a href="https://livingat300main.ca/category/food-restaurants/" className={styles.cat}>Food &amp; Restaurants</a>
                <span className={styles.separator}>·</span>
                <span className={styles.date}><time className={styles.time} dateTime="2022-09-06T21:27:30+00:00">September 6, 2022</time></span>
              </p>
              <p>
                <a href="https://livingat300main.ca/300-main-pup-patio-at-manyfest/">300 Main Pup Patio at Manyfest</a>
              </p>
            </div>
          </div>

        </div>
        <div>

          <div className={styles.textOnImage}>
            <a href="https://livingat300main.ca/top-5-food-drink-spots-in-winnipeg-this-summer/">
              <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/275864305_497564391750898_2848710138243712305_n-390x390.jpg" />
            </a>
            <div className={styles.textContent}>
              <p>
                <a href="https://livingat300main.ca/category/food-restaurants/" className={styles.cat}>Food &amp; Restaurants</a>
                <a href="https://livingat300main.ca/category/lifestyle/" className={styles.cat}>Lifestyle</a>
                <span className={styles.separator}>·</span>
                <span className={styles.date}><time className={styles.time} dateTime="2022-09-06T21:27:30+00:00">September 6, 2022</time></span>
              </p>
              <p>
                <a href="https://livingat300main.ca/top-5-food-drink-spots-in-winnipeg-this-summer/">Top 5 Food &amp; Drink Spots in Winnipeg this Summer</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>



}