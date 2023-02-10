import React, { useState } from "react";
import ListInput from "./ListInput";
import List from "./List";
import "./ListBuilder.css";

function ListBuilder() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  function handleOnChange(event) {
    setNewItem(event.target.value);
  }

  function handleAddItem() {
    if (!newItem) {
      return;
    }

    if (list.some((item) => item.text === newItem)) {
      //alert("Item already exists in the list");
      return;
    }
    setList([...list, { text: newItem, completed: false }]);
  }

  function handleDeleteItem(index) {
    setList(list.filter((_, i) => i !== index));
  }

  function handleCompleteItem(index) {
    setList(
      list.map((item, i) => {
        if (i === index) {
          return { ...item, completed: true };
        }
        return item;
      })
    );
  }

  return (
    <div className="ListBuilder">
      <h3>Todo List App</h3>
      <ListInput
        handleAddItem={handleAddItem}
        handleOnChange={handleOnChange}
      />
      <List
        list={list}
        handleCompleteItem={handleCompleteItem}
        handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}
export default ListBuilder;
