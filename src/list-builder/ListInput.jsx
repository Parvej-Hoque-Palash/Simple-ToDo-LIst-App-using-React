import './ListInput.css';
function ListInput({handleOnChange, handleAddItem}){
    return(
        <div className="Input">
          <input className='input__item' onChange={handleOnChange}/>
          <button className="add__button" onClick={handleAddItem}>Add</button>
        </div>
    );
}
export default ListInput;