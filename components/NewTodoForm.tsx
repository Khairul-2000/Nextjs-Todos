import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button
          type="submit"
          className="border-none rounded-md font-bold  bg-green-200 mx-1 p-1"
        >
          new Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
