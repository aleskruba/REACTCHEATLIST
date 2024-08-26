import { useInfiniteQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function Observer() {

    const {ref,inView} = useInView()
    const [showCode,setShowCode] = useState(false)
    const fetchProjects = async (page:any) => {
        console.log(page)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=' + page.pageParam)
        return res.json()
      }
    
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery({
        queryKey: ['todosinfinite'],
        queryFn: fetchProjects,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {return lastPage.length === 0 ? null :allPages.length + 1}
      })
    
      const posts = data ? data.pages.flatMap((page=>page)) : [];

      useEffect(()=>{
        console.log('is in view :',inView)
        if (inView) fetchNextPage()
      },[inView])

      return status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
        
        {!showCode ?
             <button onClick={()=>setShowCode(!showCode)}>Show code </button>
             :
             <button onClick={()=>setShowCode(!showCode)}>Hide code </button>
                }
          {!showCode ? 
          <>
             <div>
        

        {posts.map((item:any,idx:number) =>{
          return (
         <Link to={`${item.id}`} key={item.id}> 
         <p style={{ height: '100px', background: 'gray' }}>{item.title}</p> 
           </Link> 
          )
        })}
        </div>
        {hasNextPage && 
        <div ref={ref} style={{ height: '20px', background: 'red' }}>
              </div>
        }
   <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
</>
: <>
   <div className="codeupdate">
                
               
    
                <pre><code>{codeString}</code></pre>


            </div>

</>}      
       


       
        </>
      )
    }
export default Observer


const codeString = `
import { useInfiniteQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Observer() {

    const {ref, inView} = useInView();

    const fetchProjects = async (page:any) => {
        console.log(page);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=' + page.pageParam);
        return res.json();
    }
    
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['todosinfinite'],
        queryFn: fetchProjects,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => { return lastPage.length === 0 ? null : allPages.length + 1; }
    });
    
    const posts = data ? data.pages.flatMap((page => page)) : [];

    useEffect(() => {
        console.log('is in view:', inView);
        if (inView) fetchNextPage();
    }, [inView]);

    return status === 'pending' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (
        <>
            <div>
                {posts.map((item: any, idx: number) => (
                    <Link to={\`\${item.id}\`} key={item.id}>
                        <p style={{ height: '100px', background: 'gray' }}>{item.title}</p>
                    </Link>
                ))}
            </div>
            {hasNextPage && (
                <div ref={ref} style={{ height: '20px', background: 'red' }}>
                </div>
            )}
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    );
}

export default Observer;
`;
