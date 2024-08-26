// src/UserForm.tsx

import React, { useState } from 'react';
import { data } from '../constants';
import "./../App.css"

const UserForm: React.FC = () => {


const [searchTerm,setSearchTerm] = useState("")

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
  setSearchTerm(e.target.value)
  console.log(e.target.value)
}

const userDataFiltered = data.filter(user => user.name.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  return (
 <div>

  <input type="text" 
         placeholder='seacrh here...' 
         onChange={changeHandler}
         />


    {userDataFiltered.map((user,idx)=>{
 
        return  (
        <p key={user.id}
          >{user.name.firstName}</p>
        )
    })}

    <h1>{!userDataFiltered.length ? <>NO RECORD</> : ''}</h1>

    <div className="code">
    <pre><code>{codeString}</code></pre>


       
        </div>

 </div>
  );
};

export default UserForm;




const codeString = `

import React, { useState } from 'react';
import { data } from '../constants';

const UserForm: React.FC = () => {


const [searchTerm,setSearchTerm] = useState("")

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
  setSearchTerm(e.target.value)
  console.log(e.target.value)
}

const userDataFiltered = data.filter(user => user.name.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  return (
 <div>

  <input type="text" 
         placeholder='seacrh here...' 
         onChange={changeHandler}
         />


    {userDataFiltered.map((user,idx)=>{
 
        return  (
        <p key={user.id}
          >{user.name.firstName}</p>
        )
    })}

    <h1>{!userDataFiltered.length ? <>NO RECORD</> : ''}</h1>
 </div>
  );
};

export default UserForm;


`;

