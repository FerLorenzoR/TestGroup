import { Landing, Home, Detail, Form } from './components/views';
import{ Route, useLocation } from 'react-router-dom';
import NavBar from './components/navegationBar/navBar';


function App() {

  const location = useLocation();

  return (

    <div className="App">
      
      {  location.pathname !== '/' && <NavBar/>  }
      <Route exact path = '/' component = { Landing } />
      <Route path = '/home' component = {Home} />
      <Route exact path = '/detail/:id' component = {Detail} />
      <Route exact path = '/form' component = {Form} />

    </div>

  );
}

export default App;
