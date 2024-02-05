import './App.css';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Pages/Login';
import { Signup } from './components/Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Services } from './components/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User } from './components/User';
import { Dashboard } from './components/Pages/user-module/Dashboard';
import { ProfileInfo } from './components/Pages/user-module/ProfileInfo';
import { Parent } from './components/PassingFunctions/Parent';
import ComponentState from './components/examples/ComponentState';
import { COmponentStateFunction } from './components/examples/COmponentStateFunction';
import { HttpCallForDummyApi } from './components/examples/HttpCallForDummyApi';
import { CompponetA } from './components/examples/UseContext/withhContext/Com[pponetA';
import React from 'react';
import { MyContextProvider } from './components/examples/UseContext/MyContext';
import Callbackhook from './components/examples/callbackhooks/callbackhook';
import ClassTimer from './components/examples/ClassTimer';
import { FunctionTimer } from './components/examples/FunctionTimer';
import { DocTitle } from './components/examples/DocTitle';
import { Counter } from './components/examples/Counter';
import { UserFormUsinhHook } from './components/examples/UserFormUsinhHook';
import { Products } from './components/examples/Routing/Products';
import { PageNotFound } from './components/Pages/PageNotFound';
import { Features } from './components/examples/Routing/Features';
import { Users } from './components/examples/dynamicRouting/Users';
import { UserDetails } from './components/examples/dynamicRouting/UserDetails';
 function App() {
  return (
   <MyContextProvider>
     <BrowserRouter>
       <ToastContainer position='bottom-center'/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/about1" element={<About/>}/>
         <Route path="/passingFunctions" element={<Parent/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/componentState" element={<ComponentState/>}/>
         <Route path="/componentStateFunction" element={<COmponentStateFunction/>}/>
         <Route path="/httpcall" element={<HttpCallForDummyApi/>}/>withoutusecontext
         <Route path="/withoutusecontext" element={<CompponetA/>}/>
         <Route path="/callbackhook" element={<Callbackhook/>}/>
         <Route path="/Counter" element={<Counter/>}/>
         <Route path="/ClassTimer" element={<ClassTimer/>}/>
         <Route path="/FunctionTimer" element={<FunctionTimer/>}/>
         <Route path="/DocTitle" element={<DocTitle/>}/>
         <Route path="/UserFormUsinhHook" element={<UserFormUsinhHook/>}/>
         <Route path="/products" element={<Products/>}>

         //create a indexed route 
       
            <Route index element={<Features/>}/>
            <Route path='feature' element={<Features/>}/>

         </Route>



         <Route path="/users" element={<Users/>}>
            <Route path=':id' element={<UserDetails/>}/>

         </Route>



         
         
         <Route path="/user" element={<User/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='profile-info' element={<ProfileInfo/>}/>
           
         </Route>

         <Route path="*" element={<PageNotFound/>}/>


      </Routes>
     
     </BrowserRouter>

</MyContextProvider>  );
}

export default App;
