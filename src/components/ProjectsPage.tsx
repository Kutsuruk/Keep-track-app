import {FC, useState} from "react";
import {MOCK_PROJECTS} from "../projects/mockprojects";
import ProjectList from "./ProjectList";
import {Project} from "../projects/project";

const ProjectsPage:FC = () => {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)

    const saveProject = (project: Project) => {
        console.log('Saving project: ', project)
    }

    let updatedProjects = projects.map((p: Project) => {
        return p.id === project.id ? project : p
    })
    setProjects(updatedProjects)

    return(
        <div>
            <h1>Projects Page</h1>
            <ProjectList onSave={saveProject} projects={projects} />
        </div>
    )
}

export default ProjectsPage