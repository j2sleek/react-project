import React, { useState } from "react";
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
   // return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
   const [projectBeingEdited, setProjectBeingEdited] = useState({});
   const handleEdit = (project: Project) => {
    //console.log(project);
    setProjectBeingEdited(project);
   }
//    return (
//    // <ul className="row">
//    //<div className="row">
//         {projects.map((project) => (
//             //<li key={project.id}>{project.name}</li>
//             <div key={project.id} className="cols-sm">
//                 {/* <div className="card">
//                     <img src={project.imageUrl} alt={project.name} />
//                     <section className="section dark">
//                         <h5 className="strong">
//                             <strong>{project.name}</strong>
//                         </h5>
//                         <p>{project.description}</p>
//                         <p>Budget : {project.budget.toLocaleString()}</p>
//                     </section>
//                 </div> */}
//                 <ProjectCard project={project}></ProjectCard>
//                 <ProjectForm />
//             {/*</div> */}
//         ))}
//     </div>
//    )
    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            {/* <ProjectCard
                project={project}
                onEdit={handleEdit}
            ></ProjectCard>
            <ProjectForm></ProjectForm> */}
            {project === projectBeingEdited ? (
                <ProjectForm />
            ) : (
                <ProjectCard project={project} onEdit={handleEdit} />
            )}
        </div>
    ));
    return <div className="row">{items}</div>
}

export default ProjectList;