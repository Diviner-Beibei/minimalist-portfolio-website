import ProjectBlock from "../ui/ProjectBlock";
import ContactBlock from "../ui/ContactBlock";
import { useProject } from "../contexts/ProjectContext";

function Portfolio() {
  const { projects } = useProject();

  return (
    <>
      {projects.map((e) => (
        <ProjectBlock info={e} key={e.title} />
      ))}
      <ContactBlock />
    </>
  );
}

export default Portfolio;
