import './App.css';
import CakeView from './features/cake/CakeView';
import IcecresmView from './features/icecream/IcecresmView';
import UserView from './features/user/UserView';


function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecresmView />
      <UserView />
    </div>
  );
}

export default App;
