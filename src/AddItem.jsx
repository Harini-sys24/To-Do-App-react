import React from 'react'
import {useRef} from 'react'
import {FaPlus} from  "react-icons/fa";
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef(null);
  return (
    <form className="addForm" onSubmit = {handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            type="text"
            id="addItem"
            placeholder='Add tasks'
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)}
            required />
        <button
            onClick = {() => inputRef.current.focus()} 
            type="submit"
            aria-label = 'add item'>
           
            <FaPlus />
        </button>

    </form>
  )
}

export default AddItem