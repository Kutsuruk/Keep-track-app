import {FC, useState} from "react";
import {Project} from "../projects/project";
import 'bootstrap';
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

type ProjectListProps = {
    projects: Project[],
    onSave: (project: Project) => void,
}

const ProjectList:FC<ProjectListProps> = ({projects, onSave}) => {
    const [projectBeingEdited, setProjectBeingEdited] = useState({})

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project)
    }

    const cancelEditing = () => {
        setProjectBeingEdited({})
    }

    return(
        <div className='card-group'>
            {projects.map((project) => (
                <div key={project.id}>
                    {
                        project === projectBeingEdited ? (
                            <ProjectForm project={project} onSave={onSave} onCancel={cancelEditing} />
                        ) : (
                            <ProjectCard onEdit={handleEdit} project={project} />
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default ProjectList