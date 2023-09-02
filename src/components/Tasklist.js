import { useState } from 'react';
import Taskcard from './Taskcard';
import Card from './Card';

export const Tasklist  = () => {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Eat", complete: false},
        {id: 2, name: "Workout", complete: false},
        {id: 3, name: "Code", complete: false}
      ]);
    
      const [display, setDisplay] =useState(true);
    
      function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
      }
  return (
    <div className="tasklist">
    <h1>Task list</h1>
    <ul>
      <button 
        className="toggle" 
        onClick={() => 
            setDisplay(!display)}>
              { display ? "Hide" : "Display"}
        </button>
    { display && tasks.map((task) => (
        <Taskcard 
            key={task.id} 
            task={task} 
            handleDelete={handleDelete}
        />
    )) }
    </ul>
    {/* <Card 
        result="success">
        <p className="title">Title</p>
        <p className="description">Description</p>
    </Card>

    <Card result="warning">
        <p className="title">Title</p>
        <p className="description>">Description</p>
        <p>Detailed Description</p>
    </Card>

    <Card result="alert">
        <p className="title">Title</p>
        <p className="description">Description</p>
    </Card> */}

    </div>
  )
}
