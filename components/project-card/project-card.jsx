import styles from '../../styles/projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ key, name, src, id }) => {
    return (
        <Link href={`/projects/${id}`}>
            <div key={key} className={styles.card}>
                <div className={styles.imgFrame}>
                    <Image
                        src={src}
                        alt={name}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <div className={styles.workContent}>
                    <p>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
