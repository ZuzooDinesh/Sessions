import Home from './Home';
import './App.css';
import Header from './Header';
import {BrowserRouter,Link,Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import "./css/Header.css";
import OddEven from './OddEven';
import Prime from './Prime';

function App() {
  return(
    <div className='App'>
      <Header/>

      <div className='container'>
        <div className='row'>
          <BrowserRouter>
          <div className='col-lg-3'>
            <h3 className='h3'>Basic</h3>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/prime">Prime Number check</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <h3 className='h3'>DSA</h3>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>
            <Link className='h4' to="/oddeven">OddEven</Link><br/>

          </div>
          <div className='col-lg-8'>
          <Routes>
            
            <Route path='oddeven' element={<OddEven/>}></Route>
            <Route path='prime' element={<Prime/>}></Route>
          </Routes>
          </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
    
  );
  
}

export default App;
