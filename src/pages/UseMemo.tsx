import React, { useEffect, useMemo, useState } from 'react'
import { data } from '../constants'
import "./../App.css"
import { User } from '../types';
import { useUserContext } from '../context/UserContext';

function UseMemo() {
    const { users, setUsers } = useUserContext();


    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    let hugeNumber = 590000000

    const expensiveOperationFunction = (): number | false => {
            for (let i = 0; i <= hugeNumber ; i++ ) {
                if ( i === hugeNumber-1 ) { 
                    return i
                }
           }
           return false
        }

    const  result: number | false = useMemo(()=>{
       return expensiveOperationFunction()
    },[hugeNumber,count2])
    

    const useEffectVariable = useEffect(()=>{return },[])
    const useMemoVariable = useMemo(()=>{return "hello"},[])

    console.log('useEffect',useEffectVariable)
    console.log('useMemo',useMemoVariable)

    return (
    <div className=''>
        UseMemo
        <h1>RESULT : {result}</h1>
        <button onClick={()=>setCount(prev => prev + 1)}>trigger expensiveOperationFunction - with useMemo </button>
        
             <p> {count}</p>  
             <button onClick={()=>setCount2(prev => prev + 1)}>trigger expensiveOperationFunction - without useMemo</button>
            <p> {count2}</p>  

            {users.map(user => (
                <div key={user.id}>
                    {user.id ===  count2 ? (
                        <p>{user.name.firstName} - {result}</p>
                    ) : (
                        <p>{user.name.firstName}</p>
                    )}
                </div>
            ))}

<div className="codeupdate">
<pre><code>{codeString}</code></pre>
</div>
    </div>
  )
}

export default UseMemo




const codeString = `
import React, { useEffect, useMemo, useState } from 'react'
import { data } from '../constants'
import "./../App.css"
import { User } from '../types';
import { useUserContext } from '../context/UserContext';

function UseMemo() {
    const { users, setUsers } = useUserContext();


    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    let hugeNumber = 590000000

    const expensiveOperationFunction = (): number | false => {
            for (let i = 0; i <= hugeNumber ; i++ ) {
                if ( i === hugeNumber-1 ) { 
                    return i
                }
           }
           return false
        }

    const  result: number | false = useMemo(()=>{
       return expensiveOperationFunction()
    },[hugeNumber,count2])
    


  return (
    <div className=''>
        UseMemo
        <h1>RESULT : {result}</h1>
        <button onClick={()=>setCount(prev => prev + 1)}>trigger expensiveOperationFunction - with useMemo </button>
        
             <p> {count}</p>  
             <button onClick={()=>setCount2(prev => prev + 1)}>trigger expensiveOperationFunction - without useMemo</button>
            <p> {count2}</p>  

            {users.map(user => (
                <div key={user.id}>
                    {user.id ===  count2 ? (
                        <p>{user.name.firstName} - {result}</p>
                    ) : (
                        <p>{user.name.firstName}</p>
                    )}
                </div>
            ))}
    </div>
  )
}

export default UseMemo



    `