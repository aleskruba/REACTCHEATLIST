import React, { ChangeEvent, useEffect, useState,FormEvent  } from 'react'
import DOMPurify from 'dompurify';
import { data } from '../constants';
import { User } from '../types'
import "./../App.css"
import { useUserContext } from '../context/UserContext';


const Create  = () => {
    const { users, setUsers } = useUserContext();

/*     const [users, setUsers] = useState<User[]>([]); */
     const [user,setUser] = useState<User>({
        id:0 ,
        name: {
            firstName:'',
            lastName:''
        },
        languages: {
            english: false,
            german: false,
            spanish: false
        },
        address:{
            street:'',
            zipcode:''
        }
   })
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    const keys = name.split('.');

    if (keys.length > 1) {
      setUser((prevState) => {
        // Create a deep copy of the state to avoid direct mutation
        const newState = { ...prevState };
        let currentLevel: any = newState;
  
        // Traverse the object structure to get to the correct level
        for (let i = 0; i < keys.length - 1; i++) {
          currentLevel = currentLevel[keys[i]] = { ...currentLevel[keys[i]] };
        }
  
        // Set the value at the final key
        const finalKey = keys[keys.length - 1];
        currentLevel[finalKey] = type === 'checkbox' ? checked : value;
  
        return newState;
      });
    } else {
      // Handle non-nested state (in this case, it's not used but you can customize it)
      setUser((prevState) => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newId = users.length + 1;
    const newUser = {...user,id:newId}
  
    setUsers([...users, newUser]);
 
    setUser({
      id: 0,
      name: {
        firstName: '',
        lastName: ''
      },
      languages: {
        english: false,
        german: false,
        spanish: false
      },
      address: {
        street: '',
        zipcode: ''
      }
    });
  };


  return (
    <div className='create-main'>
          <h5>insert a new user</h5>

<form className='form' onSubmit={handleSubmit}>
<label htmlFor="firstName">First Name:</label>
<input
type="text"
name="name.firstName"
onChange={handleChange}
placeholder="first name"
value={user.name.firstName}
/>
<label htmlFor="lastName">Last Name:</label>
<input
type="text"
name="name.lastName"
onChange={handleChange}
placeholder="last name"
value={user.name.lastName}
/>
<div className='filterLanguages'>
<div>
<label htmlFor="english">English:</label>
<input
type="checkbox"
name="languages.english"
onChange={handleChange}
checked={user.languages.english}
/>
</div>
<div>
<label htmlFor="german">German:</label>
<input
type="checkbox"
    name="languages.german"
onChange={handleChange}
checked={user.languages.german}
/>
</div>
<div>
<label htmlFor="spanish">Spanish:</label>
<input
type="checkbox"
name="languages.spanish"
onChange={handleChange}
checked={user.languages.spanish}
/>
</div>
</div>
<label htmlFor="street">Street:</label>
<input
type="text"
name="address.street"
onChange={handleChange}
value={user.address.street}
/>
<label htmlFor="zipcode">ZipCode:</label>
<input
type="text"
name="address.zipcode"
onChange={handleChange}
value={user.address.zipcode}
/>

<input type="submit" value='save' className='btn' />
</form>

<div className="object">
            <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>

            <div className="code">
        <pre><code>{codeString}</code></pre>


        </div>
  
    </div>
  )
}

export default Create





const codeString = `
import React, { ChangeEvent, useEffect, useState,FormEvent  } from 'react'
import DOMPurify from 'dompurify';
import { data } from '../constants';
import { User } from '../types'
import "./../App.css"
import { useUserContext } from '../context/UserContext';


const Create  = () => {
    const { users, setUsers } = useUserContext();

/*     const [users, setUsers] = useState<User[]>([]); */
     const [user,setUser] = useState<User>({
        id:0,
        name: {
            firstName:'',
            lastName:''
        },
        languages: {
            english: false,
            german: false,
            spanish: false
        },
        address:{
            street:'',
            zipcode:''
        }
   })
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    const keys = name.split('.');

    if (keys.length > 1) {
      setUser((prevState) => {
        // Create a deep copy of the state to avoid direct mutation
        const newState = { ...prevState };
        let currentLevel: any = newState;
  
        // Traverse the object structure to get to the correct level
        for (let i = 0; i < keys.length - 1; i++) {
          currentLevel = currentLevel[keys[i]] = { ...currentLevel[keys[i]] };
        }
  
        // Set the value at the final key
        const finalKey = keys[keys.length - 1];
        currentLevel[finalKey] = type === 'checkbox' ? checked : value;
  
        return newState;
      });
    } else {
      // Handle non-nested state (in this case, it's not used but you can customize it)
      setUser((prevState) => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(user)
    setUsers([...users, user]);

 
    setUser({
      id: 0,
      name: {
        firstName: '',
        lastName: ''
      },
      languages: {
        english: false,
        german: false,
        spanish: false
      },
      address: {
        street: '',
        zipcode: ''
      }
    });
  };


  return (
    <div className='create-main'>
          <h5>insert a new user</h5>

<form className='form' onSubmit={handleSubmit}>
<label htmlFor="firstName">First Name:</label>
<input
type="text"
name="name.firstName"
onChange={handleChange}
placeholder="first name"
value={user.name.firstName}
/>
<label htmlFor="lastName">Last Name:</label>
<input
type="text"
name="name.lastName"
onChange={handleChange}
placeholder="last name"
value={user.name.lastName}
/>
<div className='filterLanguages'>
<div>
<label htmlFor="english">English:</label>
<input
type="checkbox"
name="languages.english"
onChange={handleChange}
checked={user.languages.english}
/>
</div>
<div>
<label htmlFor="german">German:</label>
<input
type="checkbox"
    name="languages.german"
onChange={handleChange}
checked={user.languages.german}
/>
</div>
<div>
<label htmlFor="spanish">Spanish:</label>
<input
type="checkbox"
name="languages.spanish"
onChange={handleChange}
checked={user.languages.spanish}
/>
</div>
</div>
<label htmlFor="street">Street:</label>
<input
type="text"
name="address.street"
onChange={handleChange}
value={user.address.street}
/>
<label htmlFor="zipcode">ZipCode:</label>
<input
type="text"
name="address.zipcode"
onChange={handleChange}
value={user.address.zipcode}
/>

<input type="submit" value='save' className='btn' />
</form>

<div className="object">
            <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>


  
    </div>
  )
}

export default Create



`;
