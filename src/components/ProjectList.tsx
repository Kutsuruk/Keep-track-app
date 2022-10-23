import {FC} from "react";
import {Project} from "../projects/project";
import 'bootstrap';
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
    projects: Project[]
}

const ProjectList:FC<ProjectListProps> = ({projects}) => {
    return(
        <div className='card-group'>
            {projects.map((project) => (
                <div key={project.id}>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}

export default ProjectList