import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Applicants } from "./Constants";
import _ from "lodash";
import "./style.css";

function Overview() {
  const [state, setState] = useState(Applicants);
  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const itemCopy = { ...state[source.droppableId].items[source.index] };
    setState((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);

      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd} className="d-flex">
      {_.map(state, (data, key) => {
        return (
          <div className={"column"} key="key">
            <h3>{data.title}</h3>
            <Droppable droppableId={key}>
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={"droppable-col"}
                  >
                    {data.items.map((el, index) => {
                      return (
                        <Draggable
                          key={el.username}
                          index={index}
                          draggableId={el.username}
                        >
                          {(provided) => {
                            return (
                              <div
                                className="itemDrop"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {el.full_name}
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      })}
    </DragDropContext>
  );
}

export default Overview;
