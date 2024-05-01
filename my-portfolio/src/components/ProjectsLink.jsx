import { Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ProjectsLink() {
  return (
    <>
      
        <Link to="projects">
        <Button size="lg" marginTop="30px" bg="purple" color="white" >My Projects</Button>
        </Link>
      
    </>
  );
}

export default ProjectsLink;
