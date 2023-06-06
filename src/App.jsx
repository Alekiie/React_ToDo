import "./index.css";
import USerTable from "./Tables/USerTable";
import { useState } from "react";
import AddNewUserForm from "./Forms/AddNewUserForm";
import EditForm from "./Forms/EditForm";

function App() {
  //dummy array for the table
  const usersData = [
    { id: 1, name: "Alexander", username: "amnjogu" },
    { id: 2, name: "Natasha", username: "tasha" },
    { id: 3, name: "Aggie", username: "aggie-k" },
  ];//hooks
  const [users, setUsers] = useState(usersData);
  const [editing,setEditing] = useState(false);
  //state for the selected user to be edited
  const initialFormState = {id:null,name:"",username:""};
  const [currentUser,setCurrentUser]= useState(initialFormState);
//add a new user
  const addNewUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  //delete
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //editing user
  //we created a hook [editing,setEditing]
  
  //edit Row function
  const editRow =(user)=>{
    setEditing(true)
    setCurrentUser({id:user.id,name:user.name,username:user.username});
  }
  const updateUser =(id,updateUser)=>{
    setEditing(false)

    setUsers(users.map((user)=>(user.id===id?updateUser:user)))
  }
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="d-flex holder">
        <div className="flex-large">
          {editing?(
            <div>
              <h2>Edit User</h2>
              <EditForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
              />
            </div>
          ):
          (
            <div>
              <h2>Add User</h2>
              <AddNewUserForm
              addNewUser={addNewUser}/>
            </div>
          )
          }
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <USerTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
