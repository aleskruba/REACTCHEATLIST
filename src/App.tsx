import {Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import UserForm from "./pages/Test";
import Create from "./pages/Create";
import { UserProvider } from "./context/UserContext";
import Debounce from "./pages/Debounce";
import FilterAdjust from "./pages/FilterAdjust";
import Update from "./pages/Update";
import UseRef from "./pages/UseRef";
import Delete from "./pages/Delete";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import ReactQuery from "./pages/ReactQuery";
import ReactQueryDetail from "./pages/ReactQueryDetail";
import ReactQueryInfinite from "./pages/ReactQueryInfinite";
import Observer from "./pages/Observer";
import MutationFunc from "./pages/Mutatation";
import Fetch from "./pages/Fetch";
import CheckBox from "./pages/CheckBox";
import UseEffectTest from "./pages/UseEffectTest";
import Throttle from "./pages/UseEffectTest";
import Paginate from "./pages/UseEffectTest";
import ThrottleTest from "./pages/ThrottleTest";




function App() {
/* 
  function* getMultipleValues(){
    yield "first Value"
    yield "second Value"
  }

  const result:any = getMultipleValues()
  for (const value of result) {
    console.log(value);
  } */
  

  const person = {
    name:'ales',
    age: 36,
  }

  const arr:any = []

  

  const objectToArray = Object.entries(person).forEach(([key,value])=>{
    let innerArrays = []  
    innerArrays.push(key,value.toString())
    arr.push(innerArrays)
  })





  return (
    <div className="App">   
     <UserProvider>
      <Navbar/>
      <Routes>
 
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />}/> 
            <Route path="/fetch" element={<Fetch/>}/> 
            <Route path="/create" element={<Create />}/> 
            <Route path="/update" element={<Update />}/> 
            <Route path="/delete" element={<Delete />}/> 
            <Route path="/userform" element={<UserForm />}/> 
            <Route path="/filteradjust" element={<FilterAdjust />}/> 
            <Route path="/throttle" element={<ThrottleTest />}/> 
            <Route path="/debounce" element={<Debounce />}/> 
            <Route path="/useref" element={<UseRef />}/> 
            <Route path="/usememo" element={<UseMemo />}/> 
            <Route path="/usecallback" element={<UseCallback />}/> 
            <Route path="/reactquery" element={<ReactQuery />}/> 
            <Route path="/reactquery/:id" element={<ReactQueryDetail />}/> 
            <Route path="/loadmore" element={<ReactQueryInfinite />}/> 
            <Route path="/observer" element={<Observer />}/> 
            <Route path="/mutation" element={<MutationFunc />}/> 

            <Route path="/paginate" element={<Paginate />}/> 
            <Route path="/checkbox" element={<CheckBox />}/> 

       
        </Route>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
