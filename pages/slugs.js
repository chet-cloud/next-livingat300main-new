import Head from 'next/head'
import Image from 'next/image'

import {posts} from '../lib/data.js'

export async function getStaticProps(context) {
  return {
    props: { slugs: [...posts.map(p=>{return  p.slug })] },
  }
}
export default function Home({slugs}) {
  return (
    <div>
      <main>
        {slugs.map(s=><a key={s} href={"/"+s}>{s}</a>)}
      </main>
    </div>
  )
}
