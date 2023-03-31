import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTask, GetTask, GetTotalTask } from "../Redux/task/task.action";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import UpdateModal from "../components/UpdateModal";
import TaskItem from "../components/TaskItem";

const Task = () => {
  const { task } = useSelector((s) => s.task);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(GetTask(page));
    dispatch(GetTotalTask());
  }, [page]);
  return (
    <Box width={"80%"} m={"auto"}>
      {task?.map((el) => (
        <TaskItem {...el} />
      ))}
      <Button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        {" "}
        Prev{" "}
      </Button>
      <Button> {page} </Button>
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {" "}
        Next{" "}
      </Button>
    </Box>
  );
};

export default Task;
