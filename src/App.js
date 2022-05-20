import './App.css';
import Login2 from './Components/Login2';
import { BrowserRouter as Routes, Router, Route, Switch } from 'react-router-dom';
import Charts from './Components/Charts';

function App() {
  return (

    <div className='App'>
      <Routes>
        <Switch>
          <Route exact path="/" component={Login2} />
          <Route exact path="/charts" component={Charts} />
        </Switch>

      </Routes>

    </div>
  );
}

export default App;
