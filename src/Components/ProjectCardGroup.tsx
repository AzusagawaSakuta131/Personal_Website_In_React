import { ProjectCard } from "./ProjectCard"

const ProjectCardGroup = () => {
    const project=[
        {
            title:"My Personal Website",
            url:"https://azusagawasakuta131.github.io/My-Personal-Website/",
            height:"20rem",
            description:"Fantastic effects when hover on the title of welcome."
        },
        {
            title:"Ave Mujica Mumbers",
            url:"https://azusagawasakuta131.github.io/Ave-Mujica-Members/",
            height:"109rem",
            description:"Comfortable click interaction, simple video embed and  great color palette."
        }
    ]
  return (
    <div>
        {project.map(({title,url,height,description})=>(
            <ProjectCard
            title={title}
            url={url}
            height={height}
            description={description}
            />
        ))}
    </div>
  )
}

export default ProjectCardGroup