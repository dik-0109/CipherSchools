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


// import {useState} from "react";
// import Task from "../Component/task";
// import AddTask from "../Component/AddTask";



// const TodoScreen = () => {
//     const  [taskList, settaskList] = useState([]);
//     let addNewTask = (task) => {
//         settaskList([...taskList, {...task, createDate: new Date()}]);
//     };
//     return(
//         <>
//         <div className="screen">         
//         <h1 className="ui-heading center">To Do List</h1>      
//                <div>
//                        <button onClick={(e)=>{
//                         settaskList([...taskList,{
//                             title:"Go to gym",
//                             discription: "Going to gym is good for muscle grow",
//                             createDate: new Date(),
//                         },
//                     ]);
                            
//                     }} 
//                     className="ui secondary button">Add Task</button>
//                     <section>
//                     <div className="ui cards">
//                      {taskList.map((task, index)=>(
//                                    <Task task={task} keys={index} />
//                             ))
//                     }        
//                     </div>
//                     </section>
//                     {/* <AddTask onSubmit ={addNewTask}
//                      /> */}
//                     </div>
//                     </div>
                    
//                     </>
//     )
// }
// export default TodoScreen;
// import { Component } from "react";
// import { useState } from "react";
// import AddTask from "./Component/AddTask";
// import TodoScreen from "./Screens/TodoScreen";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// const router = createBrowserRouter([
//     {
//     path:"/",
//     element:<TodoScreen/> ,// the page u want to render
// },
//  {
//     path:"/add-task",
//     element:<AddTask/>,
//  }
// ])
// // class App extends Component{
// //     render(){
// //         return <TodoScreen/>;
// //     }
// // } we are changing class base component to the functional component
// // const App = () => {
// //     return <TodoScreen/>;
// // };
// const App = ()=>{
//   const [task,setTask] = useState([]);
//     return <RouterProvider router = {router} />;
// }
// export default App;

// // CDN stands for content Distribution Network