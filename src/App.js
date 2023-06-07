
import { Provider } from "react-redux";
import store from "./Component/redux";
import Body from "./Component/body/Body";

function App() {
 
  return (
    <Provider store={store}>
      <div className="">
    
      <Body/>

      </div>
    </Provider>
  );
}

export default App;
