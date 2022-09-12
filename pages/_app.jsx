import Layout from '../components/layout/layout'
import Overlay from '../contexts/overlay-context'
import '../styles/globals.css'
import Head from 'next/head'
import Background from '../components/background/background'

const MyApp = ({ Component, pageProps }) => (
    <Overlay>
        <Layout>
            <Head>
                <title>Giacomo Rapposelli</title>
                <link rel='stylesheet' href='/fonts/style.css' />
            </Head>
            <Background />
            <Component {...pageProps} />
        </Layout>
    </Overlay>
)

export default MyApp
