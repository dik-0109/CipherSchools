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
// import { Component } from "react";
// class TodoScreen extends Component{
//     state = {
//         taskcount : 0 ,
//     }
//     render(){
//         return(
//             <div className="screen">
//             <h1 className="ui-heading center">To Do List</h1>
//             <div>
//                 <button onClick={(e)=>{
//                     this.setState({...this.state, taskcount: this.state.taskcount+1,});                    console.log(this.state.taskcount);
//                     console.log("Add Task button was clicked.");
                    
//                 }} className="ui secondary button">Add Task</button>
//                 <p>The number of Tasks are: {this.state.taskcount}</p>
//             </div>
//             </div>
//         );
//     }
// }

// import {useState} from "react";
// import Task from "../Component/task";
// // const TodoScreen = () => {
// //     const  [taskcount, settaskcount] = useState(0);
// //     return(
// //         <div className="screen">         <h1 className="ui-heading center">To Do List</h1>             <div>
// //                        <button onClick={(e)=>{
// //                             settaskcount(taskcount+1);
                            
// //                         }} className="ui secondary button">Add Task</button>
// //                         <p>The number of Tasks are: {taskcount}</p>
// //                     </div>
// //                     </div>
// //     )
// // }


// const TodoScreen = () => {
//     const  [taskList, settaskList] = useState([]);
//     return(
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
//                     <div class="ui cards">
//                      {taskList.map((task, index)=>(
//                                    <Task task={task} keys={index} />
//                             ))
//                     }        
//                     </div>
//                     </section>
//                     </div>
//                     </div>
//     )
// }
// export default TodoScreen;
const dateFormat = new Intl.DateTimeFormat("en-IN",{
   
    // dateStyle: "medium",
    hour12:true,
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
    month:"short",
    day:"2-digit",
}
);
export const formatDate = (date) => dateFormat.format(date);
