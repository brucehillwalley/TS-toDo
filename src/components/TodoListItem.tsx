import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import React from "react";

interface ITodoListItem {
  todo: ITodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoListItem: React.FC<ITodoListItem> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <ListItem
      disableGutters
      sx={{ cursor: "pointer", padding: "0.5rem" }}
      secondaryAction={
        <IconButton onClick={() => deleteTodo(todo.id)} sx={{ "&:hover": { color: "red" } }} aria-label="delete">
          <DeleteIcon  />
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => toggleTodo(todo)}
        primary={todo.task || todo.todo}
        sx={{wordWrap:"break-word"}}
        />
    </ListItem>
  );
};

export default TodoListItem;
