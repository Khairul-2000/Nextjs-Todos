import TodoList from "@/components/TodoList";
import db from "@/utils/db";

const getData = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const todos = await db.todo.findMany({});
  console.log(todos);
  return todos;
};

const TodoPage = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoPage;
