import { Provider } from "react-redux";
import Navbar from "./component/Navbar";
import UserDetails from "./component/UserDetails";
import store from "./store/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <UserDetails />
      </Provider>
    </div>
  );
};

export default App;
