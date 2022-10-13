import {posts,getPostBySlug} from '../lib/data.js'

export async function getStaticPaths() {
    return {
      paths: [
            // { params: { slug: 'bbb' } }
            ...posts.map(p=>{return { params: { slug: p.slug } }})
        ],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  export async function getStaticProps(context) {
    return {
      props: { post: getPostBySlug(context.params.slug) },
    }
  }
  
  export default function Post({ post }) {
    return <div>
        <h3>{post[0].title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html: post[0].content.rendered}}></div>
    </div>
  }