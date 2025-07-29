import { ProjectCard } from "./ProjectCard"

const ProjectCardGroup = () => {
    const project=[
        {
            title:"My Personal Website",
            url:"https://azusagawasakuta131.github.io/My-Personal-Website/",
            height:"20rem"
        },
        {
            title:"Ave Mujica Mumbers",
            url:"https://azusagawasakuta131.github.io/Ave-Mujica-Members/",
            height:"109rem"
        }
    ]
  return (
    <div>
        {project.map(({title,url,height})=>(
            <ProjectCard
            title={title}
            url={url}
            height={height}
            />
        ))}
    </div>
  )
}

export default ProjectCardGroup