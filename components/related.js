import style from '../styles/related.module.css'

export default ()=>{
    return <div className={style.related_posts}>

    <div className={style.related_posts_head}>
        <div className={style.title}>Related</div>
        <div className={style.buttons}>
            <i className="fa-regular fa-arrow-left"></i>
            <i className="fa-regular fa-arrow-right"></i>
        </div>
    </div>

    <div className={style.related_posts_body}>

        <div>
            <a href="https://livingat300main.ca/summer-smoothies/" className={style.related_mask_img}>
                <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/08/blog3-293x293.png" />
            </a>
            <div className={style.related_mask_img_tags}>
                <a href="https://livingat300main.ca/category/food-restaurants/" className={style.cat}>Food &amp; Restaurants</a>
                <span className={style.separator}>·</span>
                <time dateTime="2022-08-17T20:56:50+00:00">August 17, 2022</time>
            </div>
            <p>
                <a href="https://livingat300main.ca/summer-smoothies/">Summer Smoothies</a>
            </p>
        </div>

        <div>
            <a href="https://livingat300main.ca/top-10-summer-cocktails/" className={style.related_mask_img}>
                <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/ergd-293x293.jpg" />
            </a>
            <div className={style.related_mask_img_tags}>
                <a href="https://livingat300main.ca/category/food-restaurants/">Food &amp; Restaurants</a>
                <a href="https://livingat300main.ca/category/lifestyle/">Lifestyle</a>
                <span className={style.separator}>·</span>
                <time dateTime="2022-07-13T20:44:24+00:00">July 13, 2022</time>
            </div>
            <p>
                <a href="https://livingat300main.ca/top-10-summer-cocktails/">Top 10 Summer Cocktails</a>
            </p>
        </div>

        <div>
            <a href="https://livingat300main.ca/weekend-getaways-manitoba-spring-edition/" className={style.related_mask_img}>
                <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/05/Post1-1-293x293.png" />
            </a>
            <div className={style.related_mask_img_tags}>
                <a href="https://livingat300main.ca/category/adventure/">Adventure</a>
                <a href="https://livingat300main.ca/category/lifestyle/">Lifestyle</a>
                <span className={style.separator}>·</span>
                <time dateTime="2022-05-06T18:51:12+00:00">May 6, 2022</time>
            </div>
            <p>
                <a href="https://livingat300main.ca/weekend-getaways-manitoba-spring-edition/">Spring Getaways in
                    Manitoba</a>
            </p>
        </div>

        <div>
            <a href="https://livingat300main.ca/spring-cleaning-your-life/" className={style.related_mask_img}>
                <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/03/spr1-293x293.png" />
            </a>
            <div className={style.related_mask_img_tags}>
                <a href="https://livingat300main.ca/category/lifestyle/">Lifestyle</a>
                <span className={style.separator}>·</span>
                <time dateTime="2022-03-31T15:00:02+00:00">March 31, 2022</time>
            </div>
            <p>
                <a href="https://livingat300main.ca/spring-cleaning-your-life/">Spring Cleaning Your Life</a>
            </p>
        </div>

    </div>
</div>
}