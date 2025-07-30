import "./ProjectCard.css"
interface ProjectProps{
  title:string;
  url:string;
  height:string;
}

export const ProjectCard = ({title,url,height}:ProjectProps) => {
  return (
    <div className="projectcard">
        <div>
            <h2 className="projecttitle">-{title}</h2>
        </div>
        <div className="projectcontainer">
            <iframe 
            src={url}
            loading="lazy"
            className="project"
            style={{height}}>
            </iframe>
        </div>
    </div>
  )
}
