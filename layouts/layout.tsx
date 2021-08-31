import Head from 'next/head'
// import SocialFooter from '../components/SocialFooter/SocialFooter'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Nikita Codes</title>
        <meta
          name="description"
          content="Place where Nikita Makhov writes about front-end web development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      {/* <SocialFooter /> */}
      <Footer />
    </div>
  )
}

export default Layout
