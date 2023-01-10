import React from 'react';
import { useEffect, useState } from 'react';
import {Link,useSearchParams} from 'react-router-dom';
import axios from "axios";
import { useContext } from 'react';
import UserContext from '../../context/UserContext';


function UserList() {
    const [userList, setUserlist]= useState([]);
    const [isLoading,setLoading]=useState(true);
    const userData= useContext(UserContext)

    useEffect(()=>{
        //on load
        getUsers();
    },[]);

    let getUsers= async () =>{
        try{
            const users= await axios.get("https://63af9edacb0f90e51476dc94.mockapi.io/users");//mockapi la create panna api 
            setUserlist(users.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        //on finished
        return() =>{
            console.log("Destroy.....");
        }
    },[]);

    let handleDelete = async(id) => {
         try{
                const confirdata= window.confirm("Are you sure do you want to delete this data?")
                if(confirdata){
                    await axios.delete(
                    `https://63af9edacb0f90e51476dc94.mockapi.io/users${id}`  
                    );
                    getUsers();
                }
            }catch(error){
                alert("Somthing went wrong");
            }
         };
    
    /* const data=[
        {
            id:1,
            username:"user 1",
            email:"user1@gmail.com",
            country:"India",
            state:"TN",
            city:"chennai"
        },
        {
            id:2,
            username:"user 2",
            email:"user2@gmail.com",
            country:"India",
            state:"Kerala",
            city:"nkjsnc"
        },{
            id:3,
            username:"user 3",
            email:"user3@gmail.com",
            country:"USA",
            state:"ncjdk",
            city:"mncdmn"
        },
    ] */
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>                  

<div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">UserList -{userData.user.name}</h1>
          <Link to="/portal/user-create" 
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Create Users
           </Link>
        </div>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            {
                                isLoading ? (<img src="https://iconscout.com/lottie/loading-dots-button-5759321"/>) :
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>UserName</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Action</th>                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                            <th>ID</th>
                                            <th>UserName</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Action</th>                                            
                                    </tr>
                                            
                                    </tfoot> 
                                    <tbody>
                                    {   
                                            userList.map((user,index) =>
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.country}</td>
                                            <td>{user.state}</td>
                                             <td>{user.city}</td>
                                            
                                            <th>
                                                <Link to ={`/portal/user-view/${user.id}`}className="btn btn-primary btn-sm mr-1">View</Link>
                                                <Link to ={`/portal/user-edit/${user.id}`} className="btn btn-primary btn-sm mr-1">Edit</Link>
                                                <button onClick={() => handleDelete(user.id)} className="btn btn-primary btn-sm mr-1">Delete</button>
                                            </th>
                                        </tr>)

                                    } 
                                                                                
                                    </tbody>
                                </table>
                                </div>
                            }
                            
                        </div>
                    </div>

    </>
)}

export default UserList