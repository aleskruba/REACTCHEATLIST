import { useState } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    keepPreviousData,
  } from '@tanstack/react-query'
import { Link } from 'react-router-dom';



function ReactQuery() {

    const [loadTime, setLoadTime] = useState<number | null>(null);
    const [successFetch,setSuccessFetch]= useState(false)
    const [page, setPage] = useState(0)

    const getTodos = async (page = 0) => {
      console.log('All todos has been fetched')
        const timeStart = new Date().getTime();
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
             
        const timeEnd = new Date().getTime();  
        setLoadTime(timeEnd - timeStart);  
        
        return res.json()
    }

    const query = useQuery({ queryKey: ['todos',page], 
                   queryFn: ()=> getTodos(page),
                   placeholderData: keepPreviousData,
                   refetchOnWindowFocus:true, // automaticly refetch data while changing window , default is true       
                   staleTime:10000,
                  
                    
                })

     
      const isLastPage = query.isSuccess && query.data.length < 10;


    if (query.isPending) {
        return <h1>Loading ... </h1>
    }

    if (query.isError) {
        return <h1>Error occurred: {query.error.message}</h1>;
      }

                  return (
    <div className=''>
     <p> Loaded after {loadTime} miliseconds</p>

     {query.isSuccess ? (
        <p>{query.data.length} items fetched successfully</p>
      ) : (
        <p>Data was not fetched successfully</p>
      )}


        <div>
        {query.data.map((item:any,idx:number) =>{
          return (
         <Link to={`${item.id}`} key={item.id}> <p >{item.title}</p>   </Link> 
          )
        })}
        </div>
        <span>Current Page: {page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!query.isPlaceholderData ) {
            setPage((old) => old + 1)
          }
        }}
   
        disabled={query.isPlaceholderData || isLastPage}
      >
        Next Page
      </button>
      {query.isFetching ? <span> Loading...</span> : null}

      <div className="codeupdate">
                
        
    
                        <pre><code>{codeString}</code></pre>
    
    
                    </div>
    </div>
  )
}

export default ReactQuery


const codeString = `
import { useState } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    keepPreviousData,
  } from '@tanstack/react-query'
import { Link } from 'react-router-dom';



function ReactQuery() {

    const [loadTime, setLoadTime] = useState<number | null>(null);
    const [successFetch,setSuccessFetch]= useState(false)
    const [page, setPage] = useState(0)

    const getTodos = async (page = 0) => {
      console.log('All todos has been fetched')
        const timeStart = new Date().getTime();
        
        const res = await fetch(\`https://jsonplaceholder.typicode.com/posts?_page=\${page}\`)
             
        const timeEnd = new Date().getTime();  
        setLoadTime(timeEnd - timeStart);  
        
        return res.json()
    }

    const query = useQuery({ queryKey: ['todos',page], 
                   queryFn: ()=> getTodos(page),
                   placeholderData: keepPreviousData,
                   refetchOnWindowFocus:true, // automaticly refetch data while changing window , default is true       
                   staleTime:10000,
                  
                    
                })

     
      const isLastPage = query.isSuccess && query.data.length < 10;


    if (query.isPending) {
        return <h1>Loading ... </h1>
    }

    if (query.isError) {
        return <h1>Error occurred: {query.error.message}</h1>;
      }

                  return (
    <div className=''>
     <p> Loaded after \${loadTime} miliseconds</p>

     {query.isSuccess ? (
        <p>{query.data.length} items fetched successfully</p>
      ) : (
        <p>Data was not fetched successfully</p>
      )}


        <div>
        {query.data.map((item:any,idx:number) =>{
          return (
         <Link to={\`\${item.id}\`} key={item.id}> <p >{item.title}</p>   </Link> 
          )
        })}
        </div>
        <span>Current Page: \${page + 1}</span>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!query.isPlaceholderData ) {
            setPage((old) => old + 1)
          }
        }}
   
        disabled={query.isPlaceholderData || isLastPage}
      >
        Next Page
      </button>
      {query.isFetching ? <span> Loading...</span> : null}
    </div>
  )
}

export default ReactQuery
`
