import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTask } from "../Redux/task/task.action";

const TaskItem = (el) => {
  const { task, loading } = useSelector((s) => s.task);
  const dispatch = useDispatch();
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    // console.log(loading);
    if (!loading) setIsloading(false);
  }, [loading]);
  return (
    <Box key={el.id} border={"1px solid"} mb={5} p={10}>
      <Heading>{el.title}</Heading>
      <Text>{el.status ? "Completed" : "Not Completed"}</Text>
      <UpdateModal {...el} />
      <Button
        colorScheme="red"
        onClick={() => {
          dispatch(DeleteTask(el.id));
          setIsloading(true);
        }}
        isLoading={isloading ? true : false}
      >
        DELETE
      </Button>
    </Box>
  );
};

export default TaskItem;
