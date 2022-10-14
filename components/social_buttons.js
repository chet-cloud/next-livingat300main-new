import style from '../styles/social_buttons.module.css'

export default ()=>{
    return <>
        <div className={style.tags-follow-post} >
            <a href="https://livingat300main.ca/tag/downtown-winnipeg/" rel="tag">Downtown Winnipeg</a>
            <a href="https://livingat300main.ca/tag/downtown-winnipeg-restaurants/" rel="tag">Downtown Winnipeg Restaurants</a>
            <a href="https://livingat300main.ca/tag/winnipeg-restaurants/" rel="tag">Winnipeg Restaurants</a>
        </div>
        <div className={style.social-buttons-follow-post}>
            <a href="https://www.facebook.com/300MainWinnipeg/" dataTitle="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/300MainWinnipeg" dataTitle="Twitter">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/300MainWinnipeg/" dataTitle="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCDVIykFuhGW9gDVBRFpIBjg" dataTitle="Whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    </>
}