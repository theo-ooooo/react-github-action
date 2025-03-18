import React from "react";

function Item({
  provided,
  snapshot,
  setTodoData,
  title,
  todoData,
  completed,
  id,
}) {
  console.log("Item is Rendering");
  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        return { ...data, completed: !data.completed };
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    const newTodoData = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodoData);
  };
  return (
    <div
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-300"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
    >
      <div className="items-center">
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => handleCompleteChange(id)}
        />
        <span className={completed ? "line-through" : ""}> {title}</span>
      </div>
      <div className="items-center">
        <button
          className="px-4 py-2 float-right"
          onClick={() => handleClick(id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default React.memo(Item);
