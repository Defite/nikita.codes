import styles from './layout.module.css';
import Head from 'next/head'
import SocialFooter from '../components/SocialFooter/SocialFooter';
import Header from '../components/Header/Header';

const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Nikita Makhov personal page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <SocialFooter />
        </div>
    )
}

export default Layout;
