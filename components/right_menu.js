import style from '../styles/right_menu.module.css'

export default ()=>{
  
    const toggleMenu = ()=>{
      if(right_menu.length==1){
        setRight_menu([style.right_menu,style.right_menu_open])
      }else{
        setRight_menu([style.right_menu])
      }
    }

    return  <div className={style.right_menu}>
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
}