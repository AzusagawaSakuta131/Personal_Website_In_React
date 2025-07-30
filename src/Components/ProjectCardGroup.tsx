import { ProjectCard } from "./ProjectCard"

const ProjectCardGroup = () => {
    const project=[
        {
            title:"A clean and elegant personal website.",
            url:"https://azusagawasakuta131.github.io/Fiverr_personal-landingpage/  ",
            height:"100rem",
        },
        {
            title:"Ave Mujica Mumbers",
            url:"https://azusagawasakuta131.github.io/Ave-Mujica-Members/",
            height:"109rem",
        },
        {
            title:"A landingpage for photographer",
            url:"https://fiverr-photographer-portfolio.vercel.app/",
            height:"109rem",
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