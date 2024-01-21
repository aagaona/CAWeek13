import './App.css';
import Nav from './Nav';
import Login from './Loginform';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className='navbar'>
        <Nav />
      </header>
      <div className='loginbody'>
        <Login />
      </div>
    </div>
  );
}

export default App;
