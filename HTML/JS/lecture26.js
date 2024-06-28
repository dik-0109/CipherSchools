// import { useContext, useState } from "react";
// import TaskContext from "../context/TaskContext";
// import { useNavigate } from "react-router-dom";


// const AddTask = ({onSubmit}) => {
//         const {addnewTask} = useContext(TaskContext);
//     const navigate = useNavigate();
//     const [task, setTask] = useState({
//         title: "",
//         description: "",
//     });

//     const handleInputChange = (e) => {
//         setTask({
//             ...task, [e.target.name]: e.target.value,
//         });
//     }

//     const onFormSubmit = (e) => {
//         e.preventDefault();
//         console.log(task);
//         addnewTask(task);
//         setTask({});
//         navigate("/");
        
//     }
// //    const refresh = (e) =>{
// //     window.location.reload();
// //    }
//     return (
//         <>
//         <section className="screen">
//             <h3 className="ui heading center">Add New Task</h3>
//             <div className="ui form">
//                 <form onSubmit={onFormSubmit}>
//                     <div className="field">
//                         <label>Title</label>
//                         <input
//                             type="text"
//                             spellCheck={false}
//                             placeholder="Task Title"
//                             name="title"
//                             onChange={handleInputChange}
//                             value = {task.title}
//                         />
//                     </div>
//                     <div className="field">
//                         <label>Description</label>
//                         <textarea
//                             rows="2"
//                             spellCheck={false}
//                             placeholder="Description"
//                             name="description"
//                             onChange={handleInputChange}
//                             value = {task.description}
//                         ></textarea>
//                     </div>
//                     <button type="submit" className="ui primary button" >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//             </section>
//         </>
//     );
// }

// export default AddTask;

// import { formatDate } from "../utils/DateUtil";
// const Task = ({task: {title, description , createDate}}) =>{
//     // (props)
//     // return <h6>Task</h6>
//     // console.log(props);
//     return (
//         <div className="card">
//         <div className="content">
         
//           <div className="header">
//           {title}
//           </div>
//           <div className="meta">
//            {/* {createDate.toLocaleTimeString()} */ formatDate(createDate)}
//           </div>
          
//           <div className="description">
//                 {description}
//           </div>
//         </div>
//         <div className="extra content">
//           <div className="ui two buttons">
//             <div className="ui basic green button">Edit</div>
//             <div className="ui basic red button">Delete</div>
//           </div>
//         </div>
//       </div>
//     )
// };
// export default Task;

// import React, { useContext } from "react";
// import Task from "../Component/task";
// import AddTask from "../Component/AddTask";
// import TaskContext from "../context/TaskContext";
// import { useNavigate } from "react-router-dom";

// const TodoScreen = () => {
//     // Use context to get the task list
//     const { taskList } = useContext(TaskContext) || { taskList: [] };
//     const navigate = useNavigate();

  

//     return (
//         <>
//             <div className="screen">
//                 <h1 className="ui-heading center">To Do List</h1>
//                 <div>
//                     <button
//                         onClick={(e) => {
//                             // Handle Add Task button click
//                             navigate("/add-task");
//                         }}
//                         className="ui secondary button"
//                     >
//                         Add Task
//                     </button>
//                     <section>
//                         <div className="ui cards">
//                             {taskList && taskList.length > 0 ? (
//                                 taskList.map((task, index) => (
//                                     <Task key={index} task={task} />
//                                 ))
//                             ) : (
//                                 <p>No tasks available</p>
//                             )}
//                         </div>
//                     </section>
//                     {/* <AddTask onSubmit={addNewTask} /> */}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default TodoScreen;

import { createContext , useState} from "react";

const TaskContext = createContext();

const TaskProvider = ({children}) =>{
    const [taskList, setTaskList] = useState([]);
    const addnewTask = (task) => {
        setTaskList([...taskList,{...task,createDate: new Date()}])
    }
    return(
        <TaskContext.Provider value={(taskList,addnewTask)}>
            {children}
        </TaskContext.Provider>
    )
}
export {TaskProvider};
export default TaskContext;