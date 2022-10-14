import style from '../styles/pc_header.module.css'

export default ()=>{
    return <div>
    <div className={style.main_desktop}>
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
    </div>
}