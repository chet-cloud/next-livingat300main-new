import style from '../styles/title_post_board.module.css'

export default ()=>{
    return <div className={style.title_post_board}>
    <div className={style.title_post_board_img_container}>
        <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/275864305_497564391750898_2848710138243712305_n.jpg" />
    </div>
    <div className={style.title_post_board_container}>
            <div className={style.title_post_board_tags}>
                <a>Culture</a>
                <a>Food & Restaurants March 11, 2022</a>
                <span>·</span>
                <time>March 11, 2022</time>
            </div>
            <p className={style.title_post_board_content}>
                St Patricks Day Celebration Ideas – Winnipeg Edition
            </p>
    </div>
</div>
}