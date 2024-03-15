import './TaskList.css'

export function TaskList({ tasks }) {
  return (
    <div>
      <h3>Tasks:</h3>
      <div className='task-container'>
      <ul> 
        {tasks.map((task, index) => (
          <div key={index} className='task-main-container'>
            <div className='checkbox-title'>
              <input className="checkbox" type="checkbox"/>
              <li className='task-list' key={index}>{task.title}</li>
            </div>
              <button className='delete-button'>Delete</button>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}