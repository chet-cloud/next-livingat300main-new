import style from '../styles/home.module.css'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Myfooter from '../components/footer.js'
import Image_post_board from '../components/image_post_board.js'
import Testimonial_board from '../components/testimonial_board.js'
import Post_board from '../components/post_board.js'

export default function Home() {
  return <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple HTML5 Template for new projects." />
        <meta property="og:title" content="Living at 300main" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/" />
        <meta property="og:description" content="A simple HTML5 Template for new projects." />
        <meta property="og:image" content="image.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Living at 300main</title>
      </Head>
      <Script src="home.js" strategy="afterInteractive" />

      <div className={style.left_search}>
        <div className={style.left_search_container}>
          <input className={style.search_input} type="text" placeholder="Search" />
          <div className={style.search_hint}>
            <div className={style.keywords}>
              <a>Downtown Winnipeg</a>
              <a>Winnipeg Apartments</a>
              <a>Apartment Living</a>
              <a>Apartment Building in Downtown Winnipeg</a>
              <a>Downtown Apartments</a>
            </div>
            <div>
              Start typing to see results or hit ESC to close
            </div>
          </div>
          <div className={style.search_count}>
            104 results for what
          </div>
          <div className={style.search_result}>
            <article>
              <div className={style.mask}>
                <a href="https://livingat300main.ca/wp-event/the-dark-eighties-halloween-party-in-winnipeg/"
                  className={style.maskImg}>
                  <img width="100" height="100"
                    src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-100x100.jpg"
                    srcSet="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-100x100.jpg 100w, https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-293x293.jpg 293w, https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-390x390.jpg 390w"
                    sizes="(max-width: 100px) 100vw, 100px"  />
                </a>
              </div>
              <div className={style.body}>
                <div className={style.tags}>
                  <a href="https://livingat300main.ca/category/300-main/" className={style.cat}>300 Main</a>
                  <a href="https://livingat300main.ca/category/adventure/" className={style.cat}>Adventure</a>
                  <a href="https://livingat300main.ca/category/culture/" className={style.cat}>Culture</a>
                  <a href="https://livingat300main.ca/category/downtown-events/" className={style.cat}>Downtown Events</a>
                  <a href="https://livingat300main.ca/category/lifestyle/" className={style.cat}>Lifestyle</a>
                </div>
                <span>
                  <time dateTime="2022-08-23T20:47:43+00:00">August 23, 2022</time>
                </span>
                <div className={style.title}>
                  <a href="https://livingat300main.ca/whats-on-the-docket-for-downtown-winnipeg-in-2019/">
                    What’s on the Docket for Downtown Winnipeg in 2019?
                  </a>
                </div>
              </div>
            </article>

            <article>
              <div className={style.mask}>
                <a href="https://livingat300main.ca/wp-event/the-dark-eighties-halloween-party-in-winnipeg/"
                  className={style.maskImg}>
                  <img width="100" height="100"
                    src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-100x100.jpg"
                    srcSet="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-100x100.jpg 100w, https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-293x293.jpg 293w, https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-390x390.jpg 390w"
                    sizes="(max-width: 100px) 100vw, 100px" />
                </a>
              </div>
              <div className={style.body}>
                <div className={style.tags}>
                  <a href="https://livingat300main.ca/category/300-main/" className={style.cat}>300 Main</a>
                  <a href="https://livingat300main.ca/category/adventure/" className={style.cat}>Adventure</a>
                  <a href="https://livingat300main.ca/category/culture/" className={style.cat}>Culture</a>
                  <a href="https://livingat300main.ca/category/downtown-events/" className={style.cat}>Downtown Events</a>
                  <a href="https://livingat300main.ca/category/lifestyle/" className={style.cat}>Lifestyle</a>
                  <span>
                    <time dateTime="2022-08-23T20:47:43+00:00">August 23,
                      2022</time>
                  </span>
                </div>
                <div className={style.title}>
                  <a href="https://livingat300main.ca/whats-on-the-docket-for-downtown-winnipeg-in-2019/">
                    What’s on the Docket for Downtown Winnipeg in 2019?
                  </a>
                </div>
              </div>
            </article>

            <article>
              <div className={style.mask}>
                <a href="https://livingat300main.ca/wp-event/the-dark-eighties-halloween-party-in-winnipeg/"
                  className={style.maskImg}>
                  <img width="100" height="100"
                    src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-100x100.jpg"
                    srcSet="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-100x100.jpg 100w, https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-293x293.jpg 293w, https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/10252_image_289430694_3271102523171404_8792148485379595860_n-390x390.jpg 390w"
                    sizes="(max-width: 100px) 100vw, 100px" />
                </a>
              </div>
              <div className={style.body}>
                <div className={style.tags}>
                  <a href="https://livingat300main.ca/category/300-main/" className={style.cat}>300 Main</a>
                  <a href="https://livingat300main.ca/category/adventure/" className={style.cat}>Adventure</a>
                  <a href="https://livingat300main.ca/category/culture/" className={style.cat}>Culture</a>
                  <a href="https://livingat300main.ca/category/downtown-events/" className={style.cat}>Downtown Events</a>
                  <a href="https://livingat300main.ca/category/lifestyle/" className={style.cat}>Lifestyle</a>
                  <span >
                    <time dateTime="2022-08-23T20:47:43+00:00">August 23,
                      2022</time>
                  </span>
                </div>
                <div className={style.title}>
                  <a href="https://livingat300main.ca/whats-on-the-docket-for-downtown-winnipeg-in-2019/">
                    What’s on the Docket for Downtown Winnipeg in 2019?
                  </a>
                </div>
              </div>
            </article>

          </div>
          <div className={style.search_more}>
            SEE ALL RESULTS
          </div>
        </div>
      </div>
      
      <div className={style.right_menu}>
        <div className={style.right_menu_container}>
          <a href="#">Home</a>
          <a href="#">Lifestyle</a>
          <a href="#">Culture</a>
          <a href="#">Art & Photography</a>
          <a href="#">Environment</a>
          <a href="#">Shopping</a>
          <a href="#">Events</a>
        </div>
      </div> 

      <div className={style.main}>
        <div className={style.main_container}>
          <div onClick="toggleSearch()">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={style.logo}>
            <img src="logo-small.jpg" />
          </div>
          <div onClick="toggleNav()">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      <div className={style.mainDesktop}>
        <img src="logo-small.jpg" />
      </div>

      <div className={style.desktop_menu}>
        <div className={style.desktop_menu_container}>
          <img src="logo-small.jpg" />
          <a href="#">Home</a>
          <a href="#">Lifestyle</a>
          <a href="#">Culture</a>
          <a href="#">Art & Photography</a>
          <a href="#">Environment</a>
          <a href="#">Shopping</a>
          <a href="#">Events</a>
        </div>
        <div className={style.desktop_menu_detail_list}>
          <div className={style.desktop_menu_detail_list_head}>
            <div className={style.title}>Art & Photography</div>
            <div className={style.buttons}>
              <i className="fa-regular fa-arrow-left"></i>
              <i className="fa-regular fa-arrow-right"></i>
            </div>
          </div>
          <div className={style.desktop_menu_detail_list_body}>
            <div>
              <a href="https://livingat300main.ca/white-night-a-tale-of-nuit-blanche/" className={style.maskImg}>
                  <img width="370" height="247" src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2019/09/beautiful-beauty-blond-hair-2669601-370x247.jpg" />
              </a>
              <p>
                <a href="https://livingat300main.ca/white-night-a-tale-of-nuit-blanche/">White Night: A Tale of Nuit Blanche</a>
              </p>
            </div>
            <div>
              <a href="https://livingat300main.ca/white-night-a-tale-of-nuit-blanche/" className={style.maskImg}>
                <img width="370" height="247" src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2019/04/DSC01357-370x247.jpg" />
              </a>
              <p>
                <a href="https://livingat300main.ca/white-night-a-tale-of-nuit-blanche/">Public Arts of Winnipeg: Living Living Room</a>
              </p>
            </div>
            <div>
              <a href="https://livingat300main.ca/white-night-a-tale-of-nuit-blanche/" className={style.maskImg}>
                <img width="370" height="247" src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2019/03/IMG_02662.jpg" />
              </a>
              <p>
                <a href="https://livingat300main.ca/white-night-a-tale-of-nuit-blanche/">Downtown Dining: Curb Your Cravings with These Unique Spots</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.body}>
         {/* <Image_post_board />
         <Testimonial_board />
         <Post_board /> */}
      </div>

      {/* <Myfooter /> */}

    </div>
 
}
