import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {

    const [isLoading,setLoading]=useState(false)
    const params = useParams();
    const navigate = useNavigate()
    useEffect(() =>{
        getUserData()
     },[])
    let getUserData= async () =>{
        try{
            const user=await axios.get(`https://63af9edacb0f90e51476dc94.mockapi.io/users/${params.userid}`)
            myFormik.setValues(user.data)
        }catch(error){
            console.log(error);
        }
    }
    const myFormik = useFormik({
        initialValues :{
            username : "",
            email : "",
            country : "",
            state : "",
            city : "",
        },
        validate : (values)=>{
            let errors={};
            if (!values.username){
                errors.username = "Please enter a username";
            }else if(values.username.length < 3) {
                errors.username="Length should br greater than 3";
            }else if(values.username.length > 15) {
                errors.username="Length should be lesser than 15";
            }

            if (!values.email){
                errors.email="Please enter a email";
            }
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email="Please enter a valid email";
            }
            if (!values.country){
                errors.country="Please enter a country";
            }
            if (!values.state){
                errors.state="Please enter a state";
            }
            if (!values.city){
                errors.city="Please enter a city";
            }
            return errors;
        },
        onSubmit: async (values)=>{
            try{
            setLoading(true)   
            const user =await axios.put(
                `https://63af9edacb0f90e51476dc94.mockapi.io/users/${params.userid}`,
                values
            );
            //alert("Update Done")
            setLoading(false) 
            navigate(`/portal/user-list`)
            }catch (error) {
                console.log(error);
                alert("Something went Wrong")
            }
        },
    })
  return (
    <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
        <div classNAme="row">
            <div className="col-lg-6">
                <label>Name</label>
                <input  name="username" 
                onChange={myFormik.handleChange}
                value={myFormik.values.username} 
                type={"text"}
                className={`form-control ${
                    myFormik.values.username ? "is-valid" : "is-invalid"
                }`} />
                <span style={{color:"red"}}>{myFormik.errors.username}</span>
            </div>
            <div className="col-lg-6">
                <label>E-mail</label>
               { /* name="username" means it connect to initialValues username="" */ }
                <input name="email" 
                value={myFormik.values.email}  
                type={"text"}
                className={`form-control ${
                    myFormik.values.email ? "is-valid" : "is-invalid"
                }`}
                 onChange={myFormik.handleChange}
                 />
                 <span style={{color:"red"}}>{myFormik.errors.email}</span>
            </div>
            <div className="col-lg-4">
                <label>Country</label>
                <select name="country" 
                onChange={myFormik.handleChange}  
                value={myFormik.values.country} 
                className={`form-control ${
                    myFormik.values.country ? "is-valid" : "is-invalid"
                }`}>
                    <option value={""}>---Select---</option>
                    <option value={"IN"}>India</option>
                    <option value={"USA"}>America</option>
                </select>
                <span style={{color:"red"}}>{myFormik.errors.country}</span>
            </div>
            <div className="col-lg-4">
                <label>State</label>
                <select  name="state"
                onChange={myFormik.handleChange}
                value={myFormik.values.state} 
                className={`form-control ${
                    myFormik.values.city ? "is-valid" : "is-invalid"
                }`}>
                    <option value={""}>---Select---</option>
                    <option value={"TN"}>TamilNadu</option>
                    <option value={"KE"}>Kerala</option>
                    <option value={"WT"}>Washington</option>
                    <option value={"NY"}>Newyark</option>
                </select>
                <span style={{color:"red"}}>{myFormik.errors.state}</span>
            </div>
            <div className="col-lg-4">
                <label>City</label>
                <select name="city"
                value={myFormik.values.city} 
                onChange={myFormik.handleChange}
                className={`form-control ${
                    myFormik.values.city ? "is-valid" : "is-invalid"
                }`}>
                    <option value={""}>---Select---</option>
                    <option value={"CH"}>Chennai</option>
                    <option value={"MD"}>Madurai</option>
                    <option value={"GV"}>Gova</option>
                    <option value={"PK"}>Palakkadu</option>
                </select>
                <span style={{color:"red"}}>{myFormik.errors.city}</span>
            </div>
            <div className="clo-lg-3 mt-3">
                <input  disabled={isLoading} type={"submit"} value={isLoading ? "Loading..." : "Update"}  className="btn btn-primary"/>
            </div>
        </div>
        </form>
    </div>
  )
}

export default UserEdit