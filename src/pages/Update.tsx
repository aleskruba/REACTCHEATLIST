import React, { useEffect, useState } from 'react'
import "./../App.css"
import { User } from '../types';
import { useUserContext } from '../context/UserContext';

function Update() {

    const [showCode,setShowCode] = useState(true)

    const { users, setUsers } = useUserContext();
    const [updatedUsers, setUpdatedUsers] = useState<User[]>([]);

    useEffect(() => {
        setUpdatedUsers(users)

    }, [users])

    const [updatedUser, setUpdatedUser] = useState<User>({
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
    })

    const [selectedUser, setSelectedUser] = useState<number | null>(null)

    const editUserClicks = (ID: number) => {
        setSelectedUser(ID)
        updatedUsers.map(user => {

            if (user.id === ID) {
                console.log(user)
                setUpdatedUser(user)

            }


        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;
        const keys = name.split('.');

        updatedUsers.forEach(user => {
            if (user.id === selectedUser) {

                if (keys.length > 1) {
                    setUpdatedUser((prevState) => {
                        const newState = { ...prevState };
                        let currentLevel: any = newState;

                        for (let i = 0; i < keys.length - 1; i++) {
                            currentLevel = currentLevel[keys[i]] = { ...currentLevel[keys[i]] };
                        }
                        const finalKey = keys[keys.length - 1];
                        currentLevel[finalKey] = type === 'checkbox' ? checked : value;

                        return newState;
                    });
                } else {
                    setUpdatedUser((prevState) => ({
                        ...prevState,
                        [name]: type === 'checkbox' ? checked : value,
                    }));
                }

            }
        })

    };



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newValue: User[] = users.map(user => {
            if (user.id == selectedUser) {
                return {
                    ...user,
                    name: {
                        firstName: updatedUser.name.firstName,
                        lastName: updatedUser.name.lastName
                    },
                    languages: {
                        english: updatedUser.languages.english,
                        german: updatedUser.languages.german,
                        spanish: updatedUser.languages.spanish
                    },
                    address: {
                        street: updatedUser.address.street,
                        zipcode: updatedUser.address.zipcode
                    }
                }
            }
            return user
        })

        setUsers(newValue)
        setSelectedUser(null)
        setUpdatedUser({
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
        })


    }

    return (
        <div className='update-main'>
            {showCode ? 

            <div className='update-container'>

                <div className="left">
                    {updatedUsers.map((element, idx) => {
                        return (
                            <div className="hovername"
                                onClick={() => editUserClicks(element.id)}
                                key={element.id}>

                                {element.name.lastName}
                            </div>
                        )
                    })}

 
                </div>

                <div className="middle">
                    {selectedUser ?
                        <form className='form' onSubmit={handleSubmit}>
                            <h1>{updatedUser.id}</h1>
                    
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                name="name.firstName"
                                onChange={handleChange}
                                placeholder="first name"
                                value={updatedUser.name.firstName}
                            />
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                name="name.lastName"
                                onChange={handleChange}
                                placeholder="last name"
                                value={updatedUser.name.lastName}
                            />
                            <div className='filterLanguages'>
                                <div>
                                    <label htmlFor="english">English:</label>
                                    <input
                                        type="checkbox"
                                        name="languages.english"
                                        onChange={handleChange}
                                        checked={updatedUser.languages.english}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="german">German:</label>
                                    <input
                                        type="checkbox"
                                        name="languages.german"
                                        onChange={handleChange}
                                        checked={updatedUser.languages.german}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="spanish">Spanish:</label>
                                    <input
                                        type="checkbox"
                                        name="languages.spanish"
                                        onChange={handleChange}
                                        checked={updatedUser.languages.spanish}
                                    />
                                </div>
                            </div>
                            <label htmlFor="street">Street:</label>
                            <input
                                type="text"
                                name="address.street"
                                onChange={handleChange}
                                value={updatedUser.address.street}
                            />
                            <label htmlFor="zipcode">ZipCode:</label>
                            <input
                                type="text"
                                name="address.zipcode"
                                onChange={handleChange}
                                value={updatedUser.address.zipcode}
                            />

                            <input type="submit" value='update changes' className='btn' />
                        </form>

                        : <div>User details</div>}

                </div>


                <div className="right">
                    <div className="object">
                        {users &&
                            <pre>{JSON.stringify(updatedUsers, null, 2)}</pre>
                        }
                    </div>

                </div>

                <button onClick={()=>setShowCode(false)}>Show code </button>   
            </div>


           

            :

            <div className="codeupdate">
                
            <button onClick={()=>setShowCode(true)}>Hide code </button>

                    <pre><code>{codeString}</code></pre>


                </div>
}
        </div>
    )
}

export default Update




const codeString = `
import React, { useEffect, useState } from 'react'
import { data } from '../constants'
import "./../App.css"
import { User } from '../types';
import { useUserContext } from '../context/UserContext';

function Update() {


    const { users, setUsers } = useUserContext();
    const [updatedUsers, setUpdatedUsers] = useState<User[]>([]);

    useEffect(() => {
        setUpdatedUsers(users)

    }, [users])

    const [updatedUser, setUpdatedUser] = useState<User>({
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
    })

    const [selectedUser, setSelectedUser] = useState<number | null>(null)

    const editUserClicks = (ID: number) => {
        setSelectedUser(ID)
        updatedUsers.map(user => {

            if (user.id === ID) {
                console.log(user)
                setUpdatedUser(user)

            }


        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;
        const keys = name.split('.');

        updatedUsers.forEach(user => {
            if (user.id === selectedUser) {

                if (keys.length > 1) {
                    setUpdatedUser((prevState) => {
                        const newState = { ...prevState };
                        let currentLevel: any = newState;

                        for (let i = 0; i < keys.length - 1; i++) {
                            currentLevel = currentLevel[keys[i]] = { ...currentLevel[keys[i]] };
                        }
                        const finalKey = keys[keys.length - 1];
                        currentLevel[finalKey] = type === 'checkbox' ? checked : value;

                        return newState;
                    });
                } else {
                    setUpdatedUser((prevState) => ({
                        ...prevState,
                        [name]: type === 'checkbox' ? checked : value,
                    }));
                }

            }
        })

    };



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newValue: User[] = users.map(user => {
            if (user.id == selectedUser) {
                return {
                    ...user,
                    name: {
                        firstName: updatedUser.name.firstName,
                        lastName: updatedUser.name.lastName
                    },
                    languages: {
                        english: updatedUser.languages.english,
                        german: updatedUser.languages.german,
                        spanish: updatedUser.languages.spanish
                    },
                    address: {
                        street: updatedUser.address.street,
                        zipcode: updatedUser.address.zipcode
                    }
                }
            }
            return user
        })

        setUsers(newValue)
        setSelectedUser(null)
        setUpdatedUser({
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
        })


    }

    return (
        <div className='update-main'>

            <div className='update-container'>

                <div className="left">
                    {data.map((element, idx) => {
                        return (
                            <div className="hovername"
                                onClick={() => editUserClicks(element.id)}
                                key={element.id}>

                                {element.name.lastName}
                            </div>
                        )
                    })}
                </div>

                <div className="middle">
                    {selectedUser ?
                        <form className='form' onSubmit={handleSubmit}>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                name="name.firstName"
                                onChange={handleChange}
                                placeholder="first name"
                                value={updatedUser.name.firstName}
                            />
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                name="name.lastName"
                                onChange={handleChange}
                                placeholder="last name"
                                value={updatedUser.name.lastName}
                            />
                            <div className='filterLanguages'>
                                <div>
                                    <label htmlFor="english">English:</label>
                                    <input
                                        type="checkbox"
                                        name="languages.english"
                                        onChange={handleChange}
                                        checked={updatedUser.languages.english}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="german">German:</label>
                                    <input
                                        type="checkbox"
                                        name="languages.german"
                                        onChange={handleChange}
                                        checked={updatedUser.languages.german}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="spanish">Spanish:</label>
                                    <input
                                        type="checkbox"
                                        name="languages.spanish"
                                        onChange={handleChange}
                                        checked={updatedUser.languages.spanish}
                                    />
                                </div>
                            </div>
                            <label htmlFor="street">Street:</label>
                            <input
                                type="text"
                                name="address.street"
                                onChange={handleChange}
                                value={updatedUser.address.street}
                            />
                            <label htmlFor="zipcode">ZipCode:</label>
                            <input
                                type="text"
                                name="address.zipcode"
                                onChange={handleChange}
                                value={updatedUser.address.zipcode}
                            />

                            <input type="submit" value='update changes' className='btn' />
                        </form>

                        : <div>User details</div>}

                </div>


                <div className="right">
                    <div className="object">
                        {users &&
                            <pre>{JSON.stringify(updatedUsers, null, 2)}</pre>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Update


`;
