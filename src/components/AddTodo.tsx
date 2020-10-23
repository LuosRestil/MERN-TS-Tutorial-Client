import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  return(
    <form className="form" onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleForm}/>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" onChange={handleForm}/>
      </div>
      <button disabled={formData === undefined ? true : false}>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo;