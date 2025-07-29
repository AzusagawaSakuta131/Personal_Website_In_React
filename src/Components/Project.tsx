import ProjectCardGroup from "./ProjectCardGroup"
import "./Project.css"
const Project = () => {
  return (
    <div>
        <div>
            <a id="my-projects" href="#my-projects" className="sectiontitle">MY PROJECTS<span className="hash">#</span></a>
        </div>
        <div>
            <ProjectCardGroup/>
        </div>
    </div>
  )
}

export default Project