import style from '../styles/testimonial_board.module.css'

export default ()=>{
    return   <div className={style.testimonial-board}>
    <div class="testimonials-container">

      <div className={style.testimonials}>
        <a href="https://livingat300main.ca/space-ideas-for-small-gardens/" className={style.mask-img}>
          <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/09/garden3-100x100.jpg" />
        </a>
        <p>
          <a href="https://livingat300main.ca/space-ideas-for-small-gardens/"> Space Ideas for Small Gardens</a>
        </p>
      </div>

      <div className={style.testimonials}>
        <a href="https://livingat300main.ca/space-ideas-for-small-gardens/" className={style.mask-img}>
          <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/09/pup-6317bb23b019c-100x100.jpg" />
        </a>
        <p>
          <a href="https://livingat300main.ca/300-main-pup-patio-at-manyfest/">300 Main Pup Patio at Manyfest</a>
        </p>
      </div>

      <div className={style.testimonials}>
        <a href="https://livingat300main.ca/space-ideas-for-small-gardens/" className={style.mask-img}>
          <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/08/blog3-100x100.png" />
        </a>
        <p>
          <a href="https://livingat300main.ca/summer-smoothies/">Summer Smoothies</a>
        </p>
      </div>

      <div className={style.testimonials}>
        <a href="https://livingat300main.ca/space-ideas-for-small-gardens/" className={style.mask-img}>
          <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/275864305_497564391750898_2848710138243712305_n-100x100.jpg" />
        </a>
        <p>
          <a href="https://livingat300main.ca/top-5-food-drink-spots-in-winnipeg-this-summer/">Top 5 Food &amp; Drink Spots in Winnipeg this Summer</a>
        </p>
      </div>

    </div>
  </div>
}