import './App.css';
import {useEffect , useState} from "react"
import axios from "axios"
import UserList from './UserList';
function App() {

 const [users , setUsers]= useState([])
  useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/posts").then((users)=> setUsers(users.data)).catch((err)=>console.log(err))

  },[])
  
  return (
    <div className="App">
      {
         users.map((user)=>
         <UserList user={user}/>
         )
      }
    </div>
  );
}

export default App;
