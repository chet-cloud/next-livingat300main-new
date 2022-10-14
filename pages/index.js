import style from '../styles/home.module.css'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Myfooter from '../components/footer.js'
import Image_post_board from '../components/image_post_board.js'
import Testimonial_board from '../components/testimonial_board.js'
import Post_board from '../components/post_board.js'
import Left_search from '../components/left_search.js' 
import Right_menu from '../components/right_menu.js' 
import Mobile_header from '../components/mobile_header.js' 
import Pc_header from '../components/pc_header.js' 
import { useState } from 'react'

export default function Home() {

  return <div className={style.next_container}>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-small.jpg" />
        <title>Living at 300main</title>
      </Head>

      <Left_search />

      <Right_menu />
        
      <Mobile_header />

      <Pc_header />

      <div>
        <Image_post_board />
        <Testimonial_board />
        <Post_board />
      </div>

      <Myfooter />



    </div>
 
}
