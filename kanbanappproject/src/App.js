import './App.css';
import Navbar from './Component/Navbar/navbar';

// import { Provider } from 'react-redux';
// import store from './store/store';
import {Provider} from 'react-redux'
import store from './store/store';
import Body from './Component/Body/body';
import Discription from './Component/Description/description';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Navbar/>
     <Discription/>
     <Body/>
    </div>
    </Provider>
   
  );
}

export default App;
