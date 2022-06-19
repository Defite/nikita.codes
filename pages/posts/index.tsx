import PostHeader from '../../components/PostHeader /PostHeader'
import PostList from '../../components/PostList/PostList'
import Head from 'next/dist/shared/lib/head'
import { api } from '../../lib/ghost'

const BlogIndex: React.FunctionComponent<any> = ({ posts }) => {
  return (
    <main>
      <Head>
        <title>Blog – Nikita Codes</title>
        <meta name="description" content="List of all my posts" />

        <meta property="og:image" content="https://nikita.codes/share.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://nikita.codes/share.png"
        />
      </Head>
      <PostHeader title="Blog" theme="simple" align="center" />
      <div className="container mx-auto px-4 sm:px-16">
        <PostList items={posts} />
      </div>
    </main>
  )
}

export async function getStaticProps(context: any) {
  const postsData = await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err: any) => console.error(err))

  const posts = postsData.filter((item: any) => !item.pagination)

  return {
    props: {
      posts,
    },
  }
}

export default BlogIndex
