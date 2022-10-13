import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {posts} from '../lib/data.js'

export async function getStaticProps(context) {
  return {
    props: { slugs: [...posts.map(p=>{return  p.slug })] },
  }
}
export default function Home({slugs}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {slugs.map(s=>
          <a key={s} href={"/"+s}>{s}</a>)
        }
      </main>
    </div>
  )
}
