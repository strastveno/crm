 
import './App.css';
import Pocetna from './Pocetna';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={ <Login />}>
                       
                    </Route>
                    <Route path="/" element={<Pocetna />}>
                        
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
