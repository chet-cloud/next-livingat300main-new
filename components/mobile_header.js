import style from '../styles/mobile_header.module.css'

export default ()=>{
    const toggleSearch = ()=>{

    }
    const toggleMenu = ()=>{
  
    }
    
    return <div> 
        <div className={[style.main]}>
                <div className={style.main_container}>
                <div onClick={toggleSearch}>
                    <i>[S]</i>
                </div>
                <div className={style.logo}>
                    <img src="logo-small.jpg" />
                </div>
                <div onClick={toggleMenu}> 
                    <i>[T]</i>
                </div>
                </div>
            </div>

        </div>
}