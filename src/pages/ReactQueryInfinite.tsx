import { useInfiniteQuery } from '@tanstack/react-query'
import { Fragment } from 'react/jsx-runtime'
import { Link } from 'react-router-dom';

function ReactQueryInfinite() {

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

      return status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
             <div>
                
        {posts.map((item:any,idx:number) =>{
          return (
         <Link to={`${item.id}`} key={item.id}> <p >{item.title}</p>   </Link> 
          )
        })}
        </div>
          <div>
            {hasNextPage && 
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
            </button>
            }
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>

          <div className="codeupdate">
                
        
    
                <pre><code>{codeString}</code></pre>


            </div>
        </>
      )
    }
export default ReactQueryInfinite


const codeString = `
import { useInfiniteQuery } from '@tanstack/react-query'
import { Fragment } from 'react/jsx-runtime'
import { Link } from 'react-router-dom';

function ReactQueryInfinite() {

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

      return status === 'pending' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
             <div>
                
        {posts.map((item:any,idx:number) =>{
          return (
         <Link to={\`\${item.id}\`} key={item.id}> <p >{item.title}</p>   </Link> 
          )
        })}
        </div>
          <div>
            {hasNextPage && 
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
            </button>
            }
          </div>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )
    }
export default ReactQueryInfinite
`

