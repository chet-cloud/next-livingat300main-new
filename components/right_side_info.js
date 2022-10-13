import style from '../styles/right_side_info.module.css'

export default ()=>{
    return   <div className={style.right-list}>
    <div className={style.search}>
      <p>Search</p>
      <input placeholder="Search" />
    </div>
    <div className={style.about}>
      <p>About</p>
      <p><img src="https://livingat300main.ca/wp-content/uploads/2018/09/Living-at-300-Main-Logo.png" /></p>
      <p>
        Living at 300 Main is a community lifestyle blog celebrating the dynamic culture and spirit of downtown Winnipeg. With articles about simple living, design, the arts, events, and great food, Living at 300 Main is your partner in experiencing everything that luxury downtown apartment living has to offer. Free your time, simplify your life, and embrace your passions with Living at 300 Main.
      </p>
    </div>
    <div className={style.social-media}> 
      <p>300 Main on Social Media</p>
      <div className={style.social-widget-icons}>
            <a href="https://www.facebook.com/300MainWinnipeg/" class="" data-title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/300MainWinnipeg" class="" data-title="Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/300MainWinnipeg/" class="" data-title="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCDVIykFuhGW9gDVBRFpIBjg" class="" data-title="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://pin.it/19ZfT8d" class="" data-title="Pinterest"><i class="fa-brands fa-pinterest"></i></a>
      </div>
    </div>
    <div className={style.link}>
      <a href="https://300main.ca" target="_blank" rel="noopener">
        <img src="https://livingat300main.ca/wp-content/uploads/2018/11/Side-Bar-Ad.png" alt="300 Main" />
      </a>
    </div>
  </div>
}