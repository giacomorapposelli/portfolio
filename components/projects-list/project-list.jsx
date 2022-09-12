import styles from '../../styles/projects.module.css'
import { Fade } from 'react-awesome-reveal'
import projectsData from '../../data/projects-data'
import ProjectCard from '../project-card/project-card'

const ProjectList = () => (
    <div className={styles.projectsContainer}>
        <Fade cascade direction='down' duration={600}>
            {projectsData.map((project, index) => (
                <ProjectCard
                    key={index}
                    id={project.id}
                    src={project.prevImg}
                    name={project.name}
                />
            ))}
        </Fade>
    </div>
)
export default ProjectList
