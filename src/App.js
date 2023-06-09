
import './App.css';
import Body from './components/Dashboard/Body';
import { Provider } from 'react-redux';
import store from './components/redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./components/Description/description"


function App() {
  return (
<div className="App">
     <BrowserRouter>
     <Provider store={store}>
     <Routes>
      <Route path='/' element={<Body />} />
      <Route path='/card/:id"' element={<Description />} />
      
     </Routes>
     </Provider>
     </BrowserRouter> 
   </div>
  
  );
}

export default App;

