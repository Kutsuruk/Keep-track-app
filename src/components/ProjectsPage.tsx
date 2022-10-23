import {FC} from "react";
import {MOCK_PROJECTS} from "../projects/mockprojects";
import ProjectList from "./ProjectList";

const ProjectsPage:FC = () => {
    return(
        <div>
            <h1>Projects Page</h1>
            <ProjectList projects={MOCK_PROJECTS} />
        </div>
    )
}

export default ProjectsPage