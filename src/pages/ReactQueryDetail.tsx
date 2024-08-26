import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'


function ReactQueryDetail() {
    const param = useParams()
    const [loadTime, setLoadTime] = useState<number | null>(null);
    

    const getTodo = async () => {
  
          const timeStart = new Date().getTime();
          
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${param.id}`)
               
          const timeEnd = new Date().getTime();  
          setLoadTime(timeEnd - timeStart);  
          console.log('Todo has been fetched')        
          return res.json()
      }
    
    

    const query = useQuery({
         queryKey: ['todos',param.id], 
        queryFn: getTodo,
        refetchOnWindowFocus:true, // automaticly refetch data while changing window , default is true       
        staleTime:10000,
    
          
      })

    const nextQuery = useQuery
      ({ queryKey: ['nextquery'], 
        queryFn: ()=>{console.log('this will run after query ');
                      return {message:"another data"}  
        },
        enabled: !query.isPending
        
    })


      if (query.isPending) {
        return <h1>Loading ... </h1>
    }

    if (query.isError) {
        return <h1>Error occurred: {query.error.message}</h1>;
      }


  return (
    <div>{JSON.stringify( query.data)}</div>
  )
}

export default ReactQueryDetail