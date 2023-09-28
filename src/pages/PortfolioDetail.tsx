import { useParams } from "react-router-dom";
import ProjectBlock from "../ui/ProjectBlock";
import { useProject } from "../contexts/ProjectContext";

function PortfolioDetail() {
  const { getProjectByTitle } = useProject();
  const { title } = useParams();
  console.log(title);

  const project = getProjectByTitle(title ? title : "");

  return <>{<ProjectBlock info={project} isDetail={true} />}</>;
}

export default PortfolioDetail;
