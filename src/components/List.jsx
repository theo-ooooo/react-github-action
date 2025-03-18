import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Item from "./Item";

function List({ todoData, setTodoData }) {
  console.log("List is Rendering");
  const handleEnd = (result) => {
    if (!result.destination) return;

    const newTodoData = todoData;

    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable
        droppableId="todo"
        isDropDisabled={false}
        isCombineEnabled={true}
        ignoreContainerClipping={true}
      >
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data, index) => (
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <Item
                    key={data.id}
                    provided={provided}
                    snapshot={snapshot}
                    todoData={todoData}
                    setTodoData={setTodoData}
                    id={data.id}
                    title={data.title}
                    completed={data.completed}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default React.memo(List);
