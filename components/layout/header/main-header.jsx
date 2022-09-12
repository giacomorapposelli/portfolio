import Link from 'next/link'
import { useState, useContext } from 'react'
import styles from '../../../styles/main-header.module.css'
import links from './data'
import { OverlayContext } from '../../../contexts/overlay-context'
import { Fade } from 'react-awesome-reveal'

const MainHeader = () => {
    const [navActive, setNavActive] = useState(false)
    const { overlay, setOverlay } = useContext(OverlayContext)

    const toggleSidebar = () => {
        setNavActive(!navActive)
        setOverlay(!overlay)
    }

    const resetSidebar = () => {
        setNavActive(false)
        setOverlay(false)
    }

    return (
        <header className={styles.header}>
            <nav>
                <Fade cascade direction='right' duration={600}>
                    <ul
                        className={
                            navActive ? styles.navActive : styles.navHidden
                        }
                    >
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className={styles.link}
                                onClick={resetSidebar}
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </Fade>
                <div className={styles.hamburger} onClick={toggleSidebar}>
                    <div className={navActive ? styles.toggle : ''}></div>
                    <div className={navActive ? styles.toggle : ''}></div>
                    <div className={navActive ? styles.toggle : ''}></div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader
