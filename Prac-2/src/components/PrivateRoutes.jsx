import { useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const toast = useToast();
  const {
    user: { isAuth },
  } = useSelector((state) => state.auth);

  if (!isAuth) {
    toast({
      title: "User not Login",
      status: "error",
      isClosable: true,
      duration: 2000,
    });

    return <Navigate to={"/"} />;
  }
  return children;
};

export default PrivateRoutes;
