import { Box } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box className="App">
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
