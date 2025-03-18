import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  console.log("App is Rendering");
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
  };

  const handleClick = useCallback(
    (id) => {
      const newTodoData = todoData.filter((todo) => todo.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleRemoveClick = () => {
    setTodoData([]);
  };

  useEffect(() => {
    const initialTodoData = localStorage.getItem("todoData");

    try {
      setTodoData(initialTodoData ? JSON.parse(initialTodoData) : []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <List
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
