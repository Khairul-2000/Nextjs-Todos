"use client";

import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`border border-black/25 m-2 cursor-pointer ${
        todo.completed ? "line-through text-green-200" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
