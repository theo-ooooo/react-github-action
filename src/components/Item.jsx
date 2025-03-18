import React, { useState } from "react";

function Item({
  provided,
  snapshot,
  setTodoData,
  title,
  todoData,
  completed,
  id,
  handleClick,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        return { ...data, completed: !data.completed };
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = () => {
    const newTodoData = todoData.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: editedTitle };
      }
      return todo;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center justify-between w-full px-4 bg-gray-100">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
            type="text"
            value={editedTitle}
            autoFocus
            onChange={handleEditChange}
          />
        </form>
        <div className="items-center">
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(false)}
          >
            X
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 float-right"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
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
      <div className="flex items-center">
        <button onClick={() => setIsEditing(true)}>Edit</button>
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
