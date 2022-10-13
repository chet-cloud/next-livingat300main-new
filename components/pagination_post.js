import style from '../styles/pagination_post.module.css'

export default ()=>{
    return <div className={style.pagination_post}>

    <a className={style.previous_img}>
        <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/07/ergd-100x100.jpg" />     
    </a>

    <a className={style.previous}>
        <div>
            <p>Previous</p>
            <p>Top 10 Summer Cocktails</p>
        </div>
    </a>

    <a className={style.next_img}>
        <img src="https://arwebstore.blob.core.windows.net/livingat300main-ca/2022/08/blog3-100x100.png" />
    </a>

    <a className={style.next}>
        <div>
            <p>Next</p>
            <p>Summer Smoothies</p>
        </div>
    </a>

</div>
}