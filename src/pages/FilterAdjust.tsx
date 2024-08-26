// src/UserForm.tsx

import React, { useState } from 'react';
import { data } from '../constants';
import "./../App.css"

const FilterAdjust: React.FC = () => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
      }
      

const [searchTerm,setSearchTerm] = useState("")

const highlightText = (text: string, search: string) => {
    if (!search) return text;
  
    // Split the text by the search term and join with highlighted parts
    const parts = text.split(new RegExp(`(${search})`, 'gi'));
  
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };
  
  const userDataFiltered = data.filter(user =>
    user.name.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <input
        type="text"
        placeholder="search here..."
        onChange={changeHandler}
      />
  
      {userDataFiltered.map((user) => (
        <p key={user.id}>
          {highlightText(user.name.firstName, searchTerm)}
        </p>
      ))}
  
      <h1>{!userDataFiltered.length ? 'NO RECORD' : ''}</h1>


      <div className="code">
    <pre><code>{codeString}</code></pre>


       
        </div>


    </div>
  );
  };
  


export default FilterAdjust;


const codeString = `
const FilterAdjust: React.FC = () => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
      }
      

const [searchTerm,setSearchTerm] = useState("")

const highlightText = (text: string, search: string) => {
    if (!search) return text;
  
    // Split the text by the search term and join with highlighted parts
    const parts = text.split(new RegExp(\`(\${search})\`, 'gi'));
  
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };
  
  const userDataFiltered = data.filter(user =>
    user.name.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <input
        type="text"
        placeholder="search here..."
        onChange={changeHandler}
      />
  
      {userDataFiltered.map((user) => (
        <p key={user.id}>
          {highlightText(user.name.firstName, searchTerm)}
        </p>
      ))}
  
      <h1>{!userDataFiltered.length ? 'NO RECORD' : ''}</h1>

      <div className="code">
        <pre><code>{codeString}</code></pre>
      </div>

    </div>
  );
};

export default FilterAdjust;
`;

