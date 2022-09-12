import projectsData from '../../data/projects-data'
import { useRouter } from 'next/router'
import Error from 'next/error'
import ProjectDetails from '../../components/project-details/project-details'

const ProjectDetail = () => {
    const router = useRouter()
    const projectId = router.query.project
    const project = projectsData.find((each) => each.id === projectId)

    if (!project) return <Error statusCode={404} title={'Project not found'} />
    const currentIndex = projectsData.indexOf(project)

    return (
        <ProjectDetails
            key={router.asPath}
            currentIndex={currentIndex}
            name={project.name}
            description={project.description}
            videoUrl={project.videoUrl}
            stack={project.stack}
            link={project.link}
            gitHub={project.gitHub}
        />
    )
}

export default ProjectDetail
