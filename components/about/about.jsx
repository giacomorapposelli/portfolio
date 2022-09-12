import styles from '../../styles/home.module.css'
import { Fade } from 'react-awesome-reveal'

const About = () => {
    return (
        <div className={styles.about}>
            <Fade duration={3000}>
                <h3>About Me</h3>
                <p>
                    {/* Hello! Im Giacomo - a web developer based in Berlin,
                    Germany. */}
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr,
                </p>
            </Fade>
        </div>
    )
}

export default About
