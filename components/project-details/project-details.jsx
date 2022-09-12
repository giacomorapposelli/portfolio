import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import gitHubIcon from '../../public/icons/github-sign.png'
import openIcon from '../../public/icons/open.png'
import arrow from '../../public/icons/arrow.png'
import { Fade } from 'react-awesome-reveal'
import { useRouter } from 'next/router'
import projectsData from '../../data/projects-data'

const ProjectDetails = ({
    name,
    currentIndex,
    description,
    videoUrl,
    stack,
    link,
    gitHub
}) => {
    const router = useRouter()

    const nextProject = () => {
        let targetIndex = 0
        if (currentIndex < projectsData.length - 1) {
            targetIndex = currentIndex + 1
        }
        router.push(`/projects/${projectsData[targetIndex].id}`)
    }

    const prevProject = () => {
        let targetIndex = projectsData.length - 1
        if (currentIndex > 0) {
            targetIndex = currentIndex - 1
        }
        router.push(`/projects/${projectsData[targetIndex].id}`)
    }

    return (
        <section>
            <Fade duration={2000}>
                <h1>
                    {name}
                    <hr />
                </h1>
            </Fade>
            <div className={styles.projectDetails}>
                <video autoPlay loop src={videoUrl}></video>
                <p>{description}</p>
                <div className={styles.tags}>
                    <Fade cascade duration={600} direction={'down'}>
                        {stack.map((name, index) => (
                            <span key={index} className={styles.tag}>
                                {name}
                            </span>
                        ))}
                    </Fade>
                </div>
                <div className={styles.links}>
                    <Fade
                        cascade
                        duration={600}
                        delay={300 * stack.length}
                        direction={'down'}
                    >
                        {link && (
                            <a
                                href={link}
                                target={'_blank'}
                                className={styles.navLink}
                                rel='noreferrer'
                            >
                                Link
                                <div className={styles.icon}>
                                    <Image src={openIcon} alt={'open'} />
                                </div>
                            </a>
                        )}
                        {gitHub && (
                            <a
                                href={gitHub}
                                target={'_blank'}
                                className={styles.navLink}
                                rel='noreferrer'
                            >
                                GitHub
                                <div className={styles.icon}>
                                    <Image src={gitHubIcon} alt={'GitHub'} />
                                </div>
                            </a>
                        )}
                    </Fade>
                </div>
                <div className={styles.arrowRight} onClick={nextProject}>
                    <Image src={arrow} layout={'fill'} alt={'next'} />
                </div>
                <div className={styles.arrowLeft} onClick={prevProject}>
                    <Image src={arrow} layout={'fill'} alt={'prev'} />
                </div>
            </div>
        </section>
    )
}

export default ProjectDetails
