import style from '../styles/content_post.module.css'

import Social_buttons from './social_buttons.js'
import Author from './author.js'
import Related from './related.js'
import Pagination_post from './pagination_post.js'
import Right_side_info from './right_side_info.js'

export default ({content})=>{
    return <div className={style.list}>

    <div className={style.leftList}>
        <div className={style.post}>
            <article dangerouslySetInnerHTML={{ __html: content}}></article>
        </div>
  
        <div className={style.post}>
          <Social_buttons />
        </div>
  
        <div className={style.post}>
          <Author />
        </div>
  
        <div className={style.post}>
          <Related />
        </div>
  
        <div className={style.post}>
        <Pagination_post />
        </div>
    </div>
  
    <Right_side_info />
  
  </div>
}