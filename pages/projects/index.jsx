import { Fade } from 'react-awesome-reveal'
import ProjectList from '../../components/projects-list/project-list'

const ProjectsPage = () => (
    <section>
        <Fade duration={2000}>
            <h2>
                Projects
                <hr />
            </h2>
        </Fade>
        <ProjectList />
    </section>
)

export default ProjectsPage
