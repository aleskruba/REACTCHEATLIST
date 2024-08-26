import React, { useState, useRef, useEffect } from 'react';


function UseRef() {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date']);
    const [filtered,setFiltered] = useState(items);

    const filterRef = useRef('')
    console.log('page render ')

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>{
        filterRef.current = e.target.value

      
        const filtered = items.filter(item => 
            item.toLowerCase().includes(filterRef.current.toLowerCase())
        )
        setFiltered(filtered)
    }


    const [name,setName] = useState('')
    const refCount = useRef(1)
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        console.log('useEffect I render ')
        if (inputRef.current) {
            inputRef.current.focus();
        }
        
        refCount.current = refCount.current + 1
    },[name])


        const [number,setNumber] = useState(0)
        const numberRef = useRef<number>(0);

        const countFunction = () => {
            setNumber(prev=>prev+1)
            numberRef.current ++

            console.log('state',number)
            console.log('ref',numberRef.current)
        }

        useEffect(()=>{
            console.log('useEffect 2 render ')
            console.log('state-useEffect',number)
        },[number])

        const someArticle = useRef(null)

        const scrollToParagraph = (ref:any) => {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });

            }
        }
  return (
    <div>UseRef
                <button onClick={() => scrollToParagraph(someArticle)}>Go to Paragraph 1</button>

            <div>
        <input type="text"  onChange={handleFilter}/>
            {filtered.map((item,idx) =>
                <div key={idx}>{item}</div>

            )}
        </div>

            <div>

                <input type="text" 
                       onChange={(e)=>setName(e.target.value)}
                       placeholder='enter some name'
                       />
                    <h1>renders {refCount.current} times</h1>
            </div>


            <div>
                <input type="text"
                        ref={inputRef}
                        placeholder='focused input'
                        />
            </div>


            <button onClick={countFunction}>count</button>
                <p>state: {number}</p>
                <p>ref: {  numberRef.current}</p>

                <p ref={someArticle}> SOME ARTICLE</p>

<div className="codeupdate">
<pre><code>{codeString}</code></pre>
</div>
    </div>
  )
}

export default UseRef



const codeString = `
import React, { useState, useRef, useEffect } from 'react';


function UseRef() {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date']);
    const [filtered,setFiltered] = useState(items);

    const filterRef = useRef('')
    console.log('page render ')

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) =>{
        filterRef.current = e.target.value

      
        const filtered = items.filter(item => 
            item.toLowerCase().includes(filterRef.current.toLowerCase())
        )
        setFiltered(filtered)
    }


    const [name,setName] = useState('')
    const refCount = useRef(1)
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        console.log('useEffect I render ')
        if (inputRef.current) {
            inputRef.current.focus();
        }
        
        refCount.current = refCount.current + 1
    },[name])


        const [number,setNumber] = useState(0)
        const numberRef = useRef<number>(0);

        const countFunction = () => {
            setNumber(prev=>prev+1)
            numberRef.current ++

            console.log('state',number)
            console.log('ref',numberRef.current)
        }

        useEffect(()=>{
            console.log('useEffect 2 render ')
            console.log('state-useEffect',number)
        },[number])

        const someArticle = useRef(null)

        const scrollToParagraph = (ref:any) => {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });

            }
        }
  return (
    <div>UseRef
                <button onClick={() => scrollToParagraph(someArticle)}>Go to Paragraph 1</button>

            <div>
        <input type="text"  onChange={handleFilter}/>
            {filtered.map((item,idx) =>
                <div key={idx}>{item}</div>

            )}
        </div>

            <div>

                <input type="text" 
                       onChange={(e)=>setName(e.target.value)}
                       placeholder='enter some name'
                       />
                    <h1>renders {refCount.current} times</h1>
            </div>


            <div>
                <input type="text"
                        ref={inputRef}
                        placeholder='focused input'
                        />
            </div>


            <button onClick={countFunction}>count</button>
                <p>state: {number}</p>
                <p>ref: {  numberRef.current}</p>

                <p ref={someArticle}> SOME ARTICLE</p>

<div className="codeupdate">
<pre><code>{codeString}</code></pre>
</div>
    </div>
  )
}

export default UseRef


    `