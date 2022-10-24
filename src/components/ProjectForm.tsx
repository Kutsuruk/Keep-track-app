import {FC, SyntheticEvent, useState} from "react";
import {Project} from "../projects/project";

type ProjectFormProps = {
    onCancel: () => void,
    onSave: (project: Project) => void,
    project: Project,
}


const ProjectForm:FC<ProjectFormProps> = ({onCancel, onSave, project: initialProject}) => {
    const [project, setProject] = useState(initialProject)
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        budget: '',
    })

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault()
        if (!isValid()) return
        onSave(project)
    };

    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target
        let updatedValue = type === 'checkbox' ? checked : value
        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }
        const change = {
            [name]: updatedValue,
    }
        let updatedProject: Project

        setProject((p) => {
            updatedProject = new Project({ ...p, ...change })
            return updatedProject
        })
        setErrors(() => validate(updatedProject))
    }

    function validate(project: Project) {
        let errors: any = { name: '', description: '', budget: '' };
        if (project.name.length === 0) {
            errors.name = 'Name is required';
        }
        if (project.name.length > 0 && project.name.length < 3) {
            errors.name = 'Name needs to be at least 3 characters.';
        }
        if (project.description.length === 0) {
            errors.description = 'Description is required.';
        }
        if (project.budget === 0) {
            errors.budget = 'Budget must be more than $0.';
        }
        return errors;
    }
        function isValid() {
            return (errors.name.length === 0 && errors.description.length === 0 && errors.budget.length === 0)
    }

    return(
        <form onSubmit={handleSubmit} className="input-group vertical">
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="enter name" value={project.name} onChange={handleChange}/>
            { errors.name.length > 0 && (
                <div className="card error">
                    <p>{errors.name}</p>
                </div>)}
            <label htmlFor="description">Project Description</label>

            <textarea name="description" placeholder="enter description" value={project.description} onChange={handleChange}></textarea>
            { errors.description.length > 0 && (
                <div className="card error">
                    <p>{errors.description}</p>
                </div>)}
            <label htmlFor="budget">Project Budget</label>

            <input value={project.budget} onChange={handleChange} type="number" name="budget" placeholder="enter budget"/>
            { errors.budget.length > 0 && (
                <div className="card error">
                    <p>{errors.budget}</p>
                </div>)}
            <label htmlFor="isActive">Active?</label>
            <input checked={project.isActive} onChange={handleChange} type="checkbox" name="isActive"/>

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span></span>
                <button onClick={onCancel} type="button" className="bordered medium">cancel</button>
            </div>
        </form>
    )
}

export default ProjectForm