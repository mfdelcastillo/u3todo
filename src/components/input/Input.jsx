import React from 'react';
import { useState } from 'react';

export default function Input({handleSubmit}) {
    const [toDo, setToDo] = useState("");
    const handleChange = (evt) => {
        setToDo(evt.target.value)
    };
    const handleForm = (evt) => {
        evt.preventDefault();
        handleSubmit(toDo);
        setToDo("");
    };

    return(
        <main>
            <form onSubmit={(handleForm)}>
                <label>
                    New To-Do Task
                </label>
                <input className="toDO" type="text" placeholder="add task" value={toDo} onChange={handleChange} />
            </form>
        </main>
    )
};