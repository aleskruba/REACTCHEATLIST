import React, { memo, useCallback, useState } from 'react';
import "./../App.css";
import { User } from '../types';
import { useUserContext } from '../context/UserContext';
import { data } from '../constants';

function UseCallback() {
    const [originalUsersData, setOriginalUsersData] = useState(data);
    const { users, setUsers } = useUserContext();
    const [searchTerm, setSearchTerm] = useState("");

    // Handle search logic
    const handleSearch = useCallback((text: string) => {
        setSearchTerm(text); // Update search term
        const userDataFiltered = originalUsersData.filter(user =>
            user.name.firstName.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        );
        setUsers(userDataFiltered); // Update displayed users based on search
    }, [originalUsersData]);

    // Shuffle logic, but don't update the users state directly
    const schuffel = (array: User[]) => {
        let newArr = [...array];  // Clone the array to avoid mutating the original array
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    // Shuffle users without affecting the displayed filtered list
    const schaffelUsers = () => {
        setUsers(schuffel(users)); // Shuffle original data
        setSearchTerm(""); // Clear the search input
    };

    return (
        <div>
            <MemoizedSearch onChange={handleSearch} searchTerm={searchTerm} />

            <button onClick={schaffelUsers}>Shuffle users</button>

            {users.map((user, idx) => (
                <p key={user.id}>{user.name.firstName}</p>
            ))}

            <h1>{!users.length ? <>NO RECORD</> : ''}</h1>

            <div className="codeupdate">
<pre><code>{codeString}</code></pre>
</div>
        </div>
    );
}

export default UseCallback;

// Search component
type SearchProps = {
    onChange: (text: string) => void;
    searchTerm: string;
}

function Search({ onChange, searchTerm }: SearchProps) {
    console.log('Search rendered');

    return (
        <input 
            type="text" 
            placeholder="Search Users" 
            value={searchTerm} // Bind the input to the searchTerm state
            onChange={(e) => onChange(e.target.value)} 
        />
    );
}

// Memoized Search component
const MemoizedSearch = memo(Search);


const codeString = `
import React, { memo, useCallback, useState } from 'react';
import "./../App.css";
import { User } from '../types';
import { useUserContext } from '../context/UserContext';
import { data } from '../constants';

function UseCallback() {
    const [originalUsersData, setOriginalUsersData] = useState(data);
    const { users, setUsers } = useUserContext();
    const [searchTerm, setSearchTerm] = useState("");

    // Handle search logic
    const handleSearch = useCallback((text: string) => {
        setSearchTerm(text); // Update search term
        const userDataFiltered = originalUsersData.filter(user =>
            user.name.firstName.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        );
        setUsers(userDataFiltered); // Update displayed users based on search
    }, [originalUsersData]);

    // Shuffle logic, but don't update the users state directly
    const schuffel = (array: User[]) => {
        let newArr = [...array];  // Clone the array to avoid mutating the original array
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    // Shuffle users without affecting the displayed filtered list
    const schaffelUsers = () => {
        setUsers(schuffel(users)); // Shuffle original data
        setSearchTerm(""); // Clear the search input
    };

    return (
        <div>
            <MemoizedSearch onChange={handleSearch} searchTerm={searchTerm} />

            <button onClick={schaffelUsers}>Shuffle users</button>

            {users.map((user, idx) => (
                <p key={user.id}>{user.name.firstName}</p>
            ))}

            <h1>{!users.length ? <>NO RECORD</> : ''}</h1>
        </div>
    );
}

export default UseCallback;

// Search component
type SearchProps = {
    onChange: (text: string) => void;
    searchTerm: string;
}

function Search({ onChange, searchTerm }: SearchProps) {
    console.log('Search rendered');

    return (
        <input 
            type="text" 
            placeholder="Search Users" 
            value={searchTerm} // Bind the input to the searchTerm state
            onChange={(e) => onChange(e.target.value)} 
        />
    );
}

// Memoized Search component
const MemoizedSearch = memo(Search);


    `