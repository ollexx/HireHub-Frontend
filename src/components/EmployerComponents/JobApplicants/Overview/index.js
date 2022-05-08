import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Applicants } from "./Constants";
import _ from "lodash";

function Overview() {
  const [state, setState] = useState(Applicants);
  return (
    <DragDropContext onDragEnd={(e) => console.log(e)}>
      {_.map(state, (data, key) => {
        return key;
      })}
    </DragDropContext>
  );
}

export default Overview;
