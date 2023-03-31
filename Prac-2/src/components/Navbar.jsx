import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      width={"100%"}
      p={5}
      border={"1px solid"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Link to={"/"}>
        <Text>LOGIN</Text>
      </Link>
      <Link to={"/task"}>
        <Text>TASK</Text>
      </Link>
    </Box>
  );
};

export default Navbar;
