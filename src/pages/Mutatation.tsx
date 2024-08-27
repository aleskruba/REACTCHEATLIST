import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import "./../App.css";

const fetchTasks = async () => {
  const res = await fetch("http://localhost:4000/tasks");
  if (!res.ok) throw new Error("Something went wrong");
  return res.json();
};

function MutationFunc() {
  const queryClient = useQueryClient();

  const [nextCondition, setNextCondition] = useState(false);
  const [pagination, setPagination] = useState(2);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { data, isPending, isError } = useQuery({
    queryFn: () => fetchTasks(),
    queryKey: ['tasks', nextCondition,pagination],
  });

  console.log(data);

  const handleDelete = async (id: any) => {
    const res = await fetch(`http://localhost:4000/deletetask/${id}`);

    queryClient.invalidateQueries({ queryKey: ['tasks'] });

    if (!res.ok) {
      throw new Error('Chyba při odeslaní zprávy');
    }
  };

  const handleAdd = async ({ title, description }: any) => {
    const data = { title, description };

    const res = await fetch('http://localhost:4000/addtask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return res.json();
  };

  const addMutation = useMutation({
    mutationFn: handleAdd,
    onMutate: async (newTask) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      // Get the previous data
      const previousTasks = queryClient.getQueryData(['tasks']);

      // Optimistically update the cache
      queryClient.setQueryData(['tasks', nextCondition,pagination], (old: any) => {
        return {
          tasks: [...(old?.tasks || []), newTask],
        };
      });

      // Return a context object with the previous data for potential rollback
      return { previousTasks };
    },
    onError: (err, newTask, context) => {
      // Rollback the cache to the previous data
      queryClient.setQueryData(['tasks'], context?.previousTasks);
    },
    onSettled: () => {
      // Invalidate the query to ensure the server state is in sync
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return (
    <div>Optimistic updates

        <p>Adding a task: {JSON.stringify(addMutation.isPending)}</p>
            <input type="text" 
                   name=""value={title} 
                   placeholder='Enter task title' 
                   onChange={(e)=>setTitle(e.target.value)}
                   />
            <input type="text" 
                   name=""
                   value={description} 
                   placeholder='Enter task descriptiom'
                   onChange={(e)=>setDescription(e.target.value)} />
           <button onClick={()=>addMutation.mutate({title,description,id:Math.random(),isComplete:false})}>Submit</button>

<h1>Tasks</h1>
{isError && <h1>Something went wrong</h1>}
{isPending && <h1>..data are loading</h1>}

    {data && data.tasks.map((task: any) => {
        return (
            <div  key={task.id }
            id={task.id}
                className='addMutation'>
                <p>task {task.title} -{task.description} </p>
                <button onClick={()=>handleDelete(task.id)}>delete</button>
             </div>
        )
    })}

<div className="code">
        <pre><code>{codeString}</code></pre>


        </div>

    </div>
  )
}

export default MutationFunc

const codeString = `
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import './../App.css';

const fetchTasks = async () => {
  const res = await fetch('http://localhost:4000/tasks');
  if (!res.ok) throw new Error('Something went wrong');
  return res.json();
};

function MutationFunc() {
  const queryClient = useQueryClient();
  const [nextCondition, setNextCondition] = useState(false);
  const [pagination, setPagination] = useState(2);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { data, isPending, isError } = useQuery({
    queryFn: () => fetchTasks(),
    queryKey: ['tasks'],
  });

  console.log(data);

  const handleDelete = async (id: any) => {
    const res = await fetch(\`http://localhost:4000/deletetask/\${id}\`);

    queryClient.invalidateQueries({ queryKey: ['tasks'] });

    if (!res.ok) {
      throw new Error('Error while sending the message');
    }
  };

  const handleAdd = async ({ title, description, id, isComplete }: any) => {
    const data = {
      title,
      description,
    };

    const res = await fetch('http://localhost:4000/addtask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return res.json();
  };

  const addMutation = useMutation({
    mutationFn: handleAdd,
    onMutate: async (newTask) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      // Get the previous data
      const previousTasks = queryClient.getQueryData(['tasks']);

      // Optimistically update the cache
      queryClient.setQueryData(['tasks', nextCondition,pagination], (old: any) => {
        return {
          tasks: [...(old?.tasks || []), newTask],
        };
      });

      // Return a context object with the previous data for potential rollback
      return { previousTasks };
    },
    onError: (err, newTask, context) => {
      // Rollback the cache to the previous data
      queryClient.setQueryData(['tasks'], context?.previousTasks);
    },
    onSettled: () => {
      // Invalidate the query to ensure the server state is in sync
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return (
    <div>
      Optimistic updates

      <p>Adding a task: {JSON.stringify(addMutation.isPending)}</p>
      <input
        type='text'
        value={title}
        placeholder='Enter task title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        value={description}
        placeholder='Enter task description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => addMutation.mutate({ title, description, id: Math.random(), isComplete: false })}>
        Submit
      </button>

      <h1>Tasks</h1>
      {isError && <h1>Something went wrong</h1>}
      {isPending && <h1>..data are loading</h1>}

      {data &&
        data.tasks.map((task: any) => {
          return (
            <div key={task.id} id={task.id} className='addMutation'>
              <p>task {task.title} - {task.description}</p>
              <button onClick={() => handleDelete(task.id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
}

//server 

const express = require('express');
const cors = require('cors');  // Import the cors package

const app = express();
app.use(cors());
app.use(express.json());


let tasks = [
    {id:1,
     title:'title 1',
     description: 'description 1',
     isComplete: true   
    },
    {id:2,
     title:'title 2',
     description: 'description 2',
     isComplete: false   
     }
]


app.get('/', function (req, res) {
  res.send('Hello World');
});



app.get('/tasks', function (req, res) {
    res.send({
        status:"success",
        tasks:tasks
    });
  });
  
app.post('/addtask', function (req, res) {
    console.log(req.body)
    tasks.push({...req.body,id:new Date().getTime(),isComplete:true });
    res.send({
        status:"success",
        message:"Task added successfully"
    });
})

app.get('/deletetask/:id', function (req, res) {
    console.log(req.params.id);

    tasks = tasks.filter(task => task.id !== Number(req.params.id))

    console.log(tasks)
    res.send({
        status:"success",
        message:"Task deleted successfully",
        remainingTasks:tasks
    });
})



app.listen(4000, function () {
  console.log('Server is running on http://localhost:4000');
});

`;
