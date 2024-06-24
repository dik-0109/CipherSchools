// import { useState } from "react";

// const AddTask = ({onSubmit}) => {
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
//         onSubmit(task);
        
//     }
// //    const refresh = (e) =>{
// //     window.location.reload();
// //    }
//     return (
//         <>
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


import {useState} from "react";
import Task from "../Component/task";
import AddTask from "../Component/AddTask";



const TodoScreen = () => {
    const  [taskList, settaskList] = useState([]);
    let addNewTask = (task) => {
        settaskList([...taskList, {...task, createDate: new Date()}]);
    };
    return(
        <>
        <div className="screen">         
        <h1 className="ui-heading center">To Do List</h1>      
               <div>
                       <button onClick={(e)=>{
                        settaskList([...taskList,{
                            title:"Go to gym",
                            discription: "Going to gym is good for muscle grow",
                            createDate: new Date(),
                        },
                    ]);
                            
                    }} 
                    className="ui secondary button">Add Task</button>
                    <section>
                    <div className="ui cards">
                     {taskList.map((task, index)=>(
                                   <Task task={task} keys={index} />
                            ))
                    }        
                    </div>
                    </section>
                    <AddTask onSubmit ={addNewTask}
                     />
                    </div>
                    </div>
                    
                    </>
    )
}
export default TodoScreen;