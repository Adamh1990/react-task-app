import "../App.css";
import { useState } from "react";

export const NewTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }

    const handleClear = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 1000),
            name: taskValue,
            complete: Boolean(progress),
        }
        handleClear(task);
    }

  return (
    <section className="newTask">
        <form onSubmit={handleSubmit}>

            <label htmlFor="task">
                Add Task:
            </label>

            <input 
                onChange={handleChange} 
                type="text" 
                name="task" 
                id="task" 
                autoComplete="off" 
                value={taskValue} 
            />

            <select onChange={(event) => 
                setProgress(event.target.value)} 
                value={progress}>
                <option value="false">Waiting...</option>
                <option value="true">Complete</option>
            </select>

            <button type="submit">
                Add
            </button>

            <span
                onClick={handleClear}
                className="reset">
                    Clear
            </span>

        </form>
        <p>{taskValue}</p>
    </section>
  )
}
