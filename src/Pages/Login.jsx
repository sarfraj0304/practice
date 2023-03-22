import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../Redux/auth/auth.action";
import { useNavigate } from "react-router-dom";
import { RESET_AUTH } from "../Redux/auth/auth.type";
const Login = () => {
  const Navigate = useNavigate();
  const {
    user: { token, isAuth },
    loading,
    success,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const obj = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(obj);

  useEffect(() => {
    console.log(success);
    if (success) {
      Navigate("/task");
      dispatch({ type: RESET_AUTH });
    }
  }, [success]);
  return (
    <Box>
      <Box
        width={"50%"}
        m={"auto"}
        border={"1px solid"}
        p={2}
        mt={"20px"}
        display={"grid"}
        gap={5}
      >
        <Input
          type="text"
          name="email"
          value={loginData.email}
          onChange={(e) => {
            setLoginData({ ...loginData, [e.target.name]: e.target.value });
          }}
          placeholder="Email"
        ></Input>
        <Input
          value={loginData.password}
          type="text"
          name="password"
          onChange={(e) => {
            setLoginData({ ...loginData, [e.target.name]: e.target.value });
          }}
          placeholder="Password"
        ></Input>
        <Button
          colorScheme="green"
          onClick={() => {
            dispatch(loginUser(loginData));
            setLoginData(obj);
          }}
          isLoading={loading ? true : false}
        >
          LOGIN
        </Button>
        <Button
          colorScheme="red"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          LOGOUT
        </Button>
      </Box>

      <Heading>{token}</Heading>
      <Heading>
        {" "}
        User is : {isAuth ? "Authenticated" : "Not Authenicated"}
      </Heading>
    </Box>
  );
};

export default Login;
