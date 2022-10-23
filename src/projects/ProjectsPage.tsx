import {FC} from "react";
import {MOCK_PROJECTS} from "./mockprojects";

const ProjectsPage:FC = () => {
    return(
        <div>
            <h1>Projects Page</h1>
            <pre>
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
            </pre>
        </div>
    )
}

export default ProjectsPage