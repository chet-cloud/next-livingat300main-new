import styles from '../styles/home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Myfooter from '../components/footer.js'
import Image_post_board from '../components/image_post_board.js'
import Testimonial_board from '../components/testimonial_board.js'
import Post_board from '../components/post_board.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple HTML5 Template for new projects." />
        <meta property="og:title" content="Living at 300main" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sitepoint.com/a-basic-html5-template/" />
        <meta property="og:description" content="A simple HTML5 Template for new projects." />
        <meta property="og:image" content="image.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>Living at 300main</title>
      </Head>

      <div className={styles.body}>
         <Image_post_board />
         <Testimonial_board />
         <Post_board />
      </div>

      <Myfooter />

    </div>
  )
}
