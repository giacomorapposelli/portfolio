import styles from '../styles/home.module.css'
import Intro from '../components/intro/intro'
import About from '../components/about/about'

const Home = () => (
    <section className={styles.container}>
        <Intro />
        {/* <About /> */}
    </section>
)

export default Home
