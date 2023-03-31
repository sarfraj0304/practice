import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Task from "../Pages/Task";
import PrivateRoutes from "../components/PrivateRoutes";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/task"
          element={
            <PrivateRoutes>
              <Task />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
