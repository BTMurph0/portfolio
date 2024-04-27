import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
