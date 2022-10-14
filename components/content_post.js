import style from '../styles/content_post.module.css'

import social_buttons from './social_buttons.js'
import author from './author.js'
import related from './related.js'
import pagination_post from './pagination_post.js'
import right_side_info from './right_side_info.js'

export default ({content})=>{
    return <div className={style.list}>

    <div className={style.leftList}>
        <div className={style.post}>
            <article dangerouslySetInnerHTML={{ __html: content}}></article>
        </div>
  
        <div className={style.post}>
          <social_buttons></social_buttons>
        </div>
  
        <div className={style.post}>
          <author></author>
        </div>
  
        <div className={style.post}>
          <related></related>
        </div>
  
        <div className={style.post}>
        <pagination_post></pagination_post>
        </div>
    </div>
  
    <right_side_info></right_side_info>
  
  </div>
}