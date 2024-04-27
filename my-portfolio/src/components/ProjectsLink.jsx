import { Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ProjectsLink() {
  return (
    <>
      <Center paddingTop="20px">
        <Link to="projects">
        <Button bg="purple" color="white" >My Projects</Button>
        </Link>
      </Center>
    </>
  );
}

export default ProjectsLink;
