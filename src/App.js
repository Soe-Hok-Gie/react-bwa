import logo from './logo.svg';
import './App.css';

function App() {

  const userLogged ="Fadil"
  const userLoggedJsx = <strong>"dasar jsx"</strong>


  return (
    <div className="App">
     {userLogged}
     {userLoggedJsx}
    </div>
  );
}

export default App;
