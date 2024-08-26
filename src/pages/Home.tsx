import React, { ChangeEvent, useEffect, useState  } from 'react'
import DOMPurify from 'dompurify';
import { data } from '../constants';
import { useUserContext } from '../context/UserContext';
import "./../App.css"

function Home() {

  const { users, setUsers,filteredUsers,setFilteredUsers } = useUserContext();

    const [filters, setFilters] = useState({
        filterLastName: '',
        filterenglish: false,
        filtergerman: false,
        filterspanish: false
    });


 

    const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: type === 'checkbox' ? checked : DOMPurify.sanitize(value)
        }));
    };


    const filterUsers = () => {
        const { filterLastName, filterenglish, filtergerman,filterspanish } = filters;

        const filtered = users.filter(user => 
            user.name.lastName.toLowerCase().includes(filterLastName.toLowerCase()) &&
            (!filterenglish || user.languages.english) &&
            (!filtergerman || user.languages.german) &&
            (!filterspanish || user.languages.spanish) 
        );

        setFilteredUsers(filtered);
    };

    const [openDetailDiv,setOpenDetailDiv] = useState<null | number>(null)


    useEffect(() => {
      filterUsers();
  }, [filters]);


    return (
        <div >
            <div className='filter'>
                <label htmlFor="name">last Name:</label>
                <input
                type="text"
                name="filterLastName"
                value={filters.filterLastName}
                onChange={handleChangeFilter}
                placeholder="Filter by last name"
            />
            <label>
                <input
                    type="checkbox"
                    name="filterenglish"
                    checked={filters.filterenglish}
                    onChange={handleChangeFilter}
                />
                English
            </label>
            <label>
                <input
                    type="checkbox"
                    name="filtergerman"
                    checked={filters.filtergerman}
                    onChange={handleChangeFilter}
                />
                German
            </label>
            <label>
                <input
                    type="checkbox"
                    name="filterspanish"
                    checked={filters.filterspanish}
                    onChange={handleChangeFilter}
                />
                Spanish
            </label>
             
         
            </div>
            {filteredUsers.map((user, idx) => (
                <pre key={idx} className='pre'>
                    <div className='user'>
                         <div  
                            onClick={()=>setOpenDetailDiv(user.id)} className='user-lastname'>last name: <strong>{user.name.lastName}</strong></div>

                    {openDetailDiv === user.id &&
                        <div className='user-details'>
                            <div>first name: {user.name.firstName}</div>
                            <div>english: {user.languages.english.toString()}</div>
                            <div>german: {user.languages.german.toString()}</div>
                            <div>spanish: {user.languages.german.toString()}</div>
                            <div>street: {user.address.street}</div>
                            <div>zipcode: {user.address.zipcode}</div>
                     </div>}
                 </div>
                </pre>
            ))}

<div className="code">
    <pre><code>{codeString}</code></pre>


        </div>
       
        </div>
    );
}

export default Home;





const codeString = `
import React, { ChangeEvent, useEffect, useState  } from 'react'
import DOMPurify from 'dompurify';
import { data } from '../constants';
import { useUserContext } from '../context/UserContext';


function Home() {

  const { users, setUsers,filteredUsers,setFilteredUsers } = useUserContext();

    const [filters, setFilters] = useState({
        filterLastName: '',
        filterenglish: false,
        filtergerman: false,
        filterspanish: false
    });


 

    const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: type === 'checkbox' ? checked : DOMPurify.sanitize(value)
        }));
    };


    const filterUsers = () => {
        const { filterLastName, filterenglish, filtergerman,filterspanish } = filters;

        const filtered = users.filter(user => 
            user.name.lastName.toLowerCase().includes(filterLastName.toLowerCase()) &&
            (!filterenglish || user.languages.english) &&
            (!filtergerman || user.languages.german) &&
            (!filterspanish || user.languages.spanish) 
        );

        setFilteredUsers(filtered);
    };

    const [openDetailDiv,setOpenDetailDiv] = useState<null | number>(null)


    useEffect(() => {
      filterUsers();
  }, [filters]);


    return (
        <div >
            <div className='filter'>
                <label htmlFor="name">last Name:</label>
                <input
                type="text"
                name="filterLastName"
                value={filters.filterLastName}
                onChange={handleChangeFilter}
                placeholder="Filter by last name"
            />
            <label>
                <input
                    type="checkbox"
                    name="filterenglish"
                    checked={filters.filterenglish}
                    onChange={handleChangeFilter}
                />
                English
            </label>
            <label>
                <input
                    type="checkbox"
                    name="filtergerman"
                    checked={filters.filtergerman}
                    onChange={handleChangeFilter}
                />
                German
            </label>
            <label>
                <input
                    type="checkbox"
                    name="filterspanish"
                    checked={filters.filterspanish}
                    onChange={handleChangeFilter}
                />
                Spanish
            </label>
             
         
            </div>
            {filteredUsers.map((user, idx) => (
                <pre key={idx} className='pre'>
                    <div className='user'>
                         <div  
                            onClick={()=>setOpenDetailDiv(user.id)} className='user-lastname'>last name: <strong>{user.name.lastName}</strong></div>

                    {openDetailDiv === user.id &&
                        <div className='user-details'>
                            <div>first name: {user.name.firstName}</div>
                            <div>english: {user.languages.english.toString()}</div>
                            <div>german: {user.languages.german.toString()}</div>
                            <div>spanish: {user.languages.german.toString()}</div>
                            <div>street: {user.address.street}</div>
                            <div>zipcode: {user.address.zipcode}</div>
                     </div>}
                 </div>
                </pre>
            ))}


       
        </div>
    );
}

export default Home;



`;

