import {FC} from "react";
import {Project} from "../projects/project";

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

type ProjectCardProps = {
    project: Project,
    onEdit: (project: Project) => void,
}

const ProjectCard:FC<ProjectCardProps> = ({project, onEdit}) => {

    const handleEditCard = (projectBeingEdited: Project) => {
        onEdit(projectBeingEdited)
    }

    return(
        <div className="card">
            <img className="card-img-top" src={project.imageUrl} alt={project.name} />
            <div className="card-body">
                <h5 className="card-title">
                    <strong>{project.name}</strong>
                </h5>
                <p className="card-text">{formatDescription(project.description)}</p>
                <p className="card-text">Budget : {project.budget.toLocaleString()}</p>
                <button onClick={ () => handleEditCard(project)} className="bordered">
                    <span className="icon-edit "></span>
                    Edit
                </button>
            </div>
        </div>
    )
}

export default ProjectCard