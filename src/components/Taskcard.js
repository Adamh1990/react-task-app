import "./Taskcard.css";

const Taskcard = ({ task, handleDelete}) => {
  return (
    <div className="taskcard">
        <li 
             className={ task.complete ? "complete" : "incomplete" }>
                <span>
                    {task.id} - {task.name}
                </span>
                <button 
                    className="delete" 
                    onClick={() => 
                    handleDelete(task.id)
                    }>
                        Delete
                </button>
        </li>
    </div>
  )
}

export default Taskcard