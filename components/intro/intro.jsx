import styles from '../../styles/home.module.css'
import { Fade } from 'react-awesome-reveal'
import IconsContainer from '../icons-container/icons-container'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <Fade cascade direction='down' duration={600}>
                <h1>
                    Giacomo Rapposelli
                    <hr />
                </h1>
                <h3>Personal Portfolio</h3>
            </Fade>
            <IconsContainer />
        </div>
    )
}

export default Intro
