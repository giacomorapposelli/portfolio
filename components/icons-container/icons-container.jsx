import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import iconsData from '../../data/icons-data'
import styles from '../../styles/home.module.css'

const IconsContainer = () => (
    <div className={styles.iconsContainer}>
        <Fade
            cascade
            duration={600}
            delay={800}
            direction={'down'}
            rel='noreferrer'
        >
            {iconsData.map((icon, index) => (
                <a
                    key={index}
                    target='_blank'
                    href={icon.link}
                    rel='noreferrer'
                >
                    <Image src={icon.src} alt={icon.alt} />
                </a>
            ))}
        </Fade>
    </div>
)

export default IconsContainer
