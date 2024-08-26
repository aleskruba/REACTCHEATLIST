import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import "./../App.css";
import Modal from '../components/Modal';
import { FaTrashAlt } from "react-icons/fa";

function Delete() {
    const { users, setUsers } = useUserContext();
    const [showCode,setShowCode] = useState(true)
    const [open, setOpen] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState<number | null>(null);

    const handleDeleteClick = (id: number) => {
        setUserIdToDelete(id);
        setOpen(true);  
    }

    const confirmDelete = () => {
        if (userIdToDelete !== null) {
            setUsers((prevUsers) => prevUsers.filter(user => user.id !== userIdToDelete));
            setUserIdToDelete(null);  
            setOpen(false); 
        }
    }

    const cancelDelete = () => {
        setUserIdToDelete(null);  
        setOpen(false);  
    }

    return (
        <div>
            {showCode ?
            <div className="delete-container">

            <div className='delete-users'>
            {users.map(user => (
                <div className='delete' key={user.id}>
                    <div>{user.name.firstName}</div>
                    <button onClick={() => handleDeleteClick(user.id)}>
                        <FaTrashAlt />
                    </button>
                </div>
            ))}

                </div>
                <div className="delete-users-array">
            {users && users.length > 0 && (
                <pre>
                    {users.map((user, index) => (
                        <div key={index}>
                                <span style={{ 
                                    color: userIdToDelete === user.id ? 'white' : 'black', 
                                    backgroundColor: userIdToDelete === user.id ? 'black' : 'white' 
                                }}>
                                {JSON.stringify(user, null, 2)}
                            </span>
                            {index < users.length - 1 && ','}
                        </div>
                    ))}
                </pre>
            )}
        </div>
        <button onClick={()=>setShowCode(false)}>Show code </button>   
        </div> :

        <div className="codeupdate">
                
                <button onClick={()=>setShowCode(true)}>Hide code </button>
    
                        <pre><code>{codeString}</code></pre>
                        <pre><code>{cssString}</code></pre>
    
    
                    </div>

        }
              
            <Modal open={open} onClose={cancelDelete}>
                <div className="modal-content">
          
                    <p>Are you sure you want to delete this user?</p>
                    <button onClick={confirmDelete}>Yes</button>
                    <button onClick={cancelDelete}>No</button>
                </div>
            </Modal>

          
        </div>
    )
}

export default Delete;





const codeString = `
import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import "./../App.css";
import Modal from '../components/Modal';
import { FaTrashAlt } from "react-icons/fa";

function Delete() {
    const { users, setUsers } = useUserContext();
    const [open, setOpen] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState<number | null>(null);

    const handleDeleteClick = (id: number) => {
        setUserIdToDelete(id);
        setOpen(true);  
    }

    const confirmDelete = () => {
        if (userIdToDelete !== null) {
            setUsers((prevUsers) => prevUsers.filter(user => user.id !== userIdToDelete));
            setUserIdToDelete(null);  
            setOpen(false); 
        }
    }

    const cancelDelete = () => {
        setUserIdToDelete(null);  
        setOpen(false);  
    }

    return (
        <div>

            <div className="delete-container">

            <div className='delete-users'>
            {users.map(user => (
                <div className='delete' key={user.id}>
                    <div>{user.name.firstName}</div>
                    <button onClick={() => handleDeleteClick(user.id)}>
                        <FaTrashAlt />
                    </button>
                </div>
            ))}

                </div>
                <div className="delete-users-array">
            {users && users.length > 0 && (
                <pre>
                    {users.map((user, index) => (
                        <div key={index}>
                                <span style={{ 
                                    color: userIdToDelete === user.id ? 'white' : 'black', 
                                    backgroundColor: userIdToDelete === user.id ? 'black' : 'white' 
                                }}>
                                {JSON.stringify(user, null, 2)}
                            </span>
                            {index < users.length - 1 && ','}
                        </div>
                    ))}
                </pre>
            )}
        </div>
                   </div>
            <Modal open={open} onClose={cancelDelete}>
                <div className="modal-content">
          
                    <p>Are you sure you want to delete this user?</p>
                    <button onClick={confirmDelete}>Yes</button>
                    <button onClick={cancelDelete}>No</button>
                </div>
            </Modal>

          
        </div>
    )
}

export default Delete;

import { ReactNode } from 'react';
import "./../App.css";

type DeleteProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

function Modal({ open, onClose, children }: DeleteProps) {
    return (
        <div
        onClick={onClose}
    className={\`modal \${open ? 'modal-visible' : 'modal-hidden'}\`}
        style={{ opacity: open ? 1 : 0 }}
    >
            <div
                className="modal-inner"
                onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside modal content
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;



`;

const cssString = `

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    background-color: rgba(0, 0, 0, 0.2); /* Semi-transparent background */
  }
  
  .modal-hidden {
    visibility: hidden;
    opacity: 0;
  }
  
  .modal-visible {
    visibility: visible;
    opacity: 1;
  }
  
  .modal-inner {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    min-width: 300px;
  }
  
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .modal-content p {
    margin: 10px 0;
  }
  
  .modal-content button {
    margin: 5px;
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .modal-content button:hover {
    background-color: #0056b3;
  }
  
  .delete-container{
    display: flex;
    justify-content: space-around;
  }
  
  
  .delete-users{
    position:fixed;
    left:10px;
  }
  
  .delete-users-array{
    position:absolute;
    right:10px;
  }

`