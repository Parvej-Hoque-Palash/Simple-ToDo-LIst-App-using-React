import "./List.css";
function List({ list, handleCompleteItem, handleDeleteItem }) {
  return (
    <div className="List">
      {list.map(function (item, index) {
        return (
          <tr
            className="added__list"
            key={index}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            <td className="item__name">{item.text}</td>
            <div className="buttons">
              <td>
                <button
                  className="complete__button"
                  onClick={() => handleCompleteItem(index)}
                >
                  &#10003;
                </button>
              </td>
              <td>
                <button
                  className="delete__button"
                  onClick={() => handleDeleteItem(index)}
                >
                  X
                </button>
              </td>
            </div>
          </tr>
        );
      })}
    </div>
  );
}
export default List;
