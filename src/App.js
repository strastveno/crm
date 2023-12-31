 
import './App.css';
import Pocetna from './Pocetna';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterComponent from './Register';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Klijenti from './Klijenti';
import axios from 'axios';
import Dodaj from './Dodaj';
import Tasks from './Tasks';
import Admin from './Admin';
import DodajTask from './DodajTask';
import ProdajnaPrilika from './ProdajnaPrilika';
import Azuriraj from './Azuriraj';
import DodajPP from './DodajPP';

function App() {
  const [token,setToken]=useState(null);
  const [klijenti, setKlijenti] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const authToken = sessionStorage.getItem('auth_token');
              const response = await axios.get('http://127.0.0.1:8000/api/klijents', {
                  headers: {
                      'Authorization': `Bearer ${authToken}`
                  }
              });
              setKlijenti(response.data);
          } catch (error) {
              console.error("Greška prilikom dohvatanja klijenata:", error);
          }
      };

      fetchData();
  }, []);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const authToken = sessionStorage.getItem('auth_token');
              const response = await axios.get('http://127.0.0.1:8000/api/tasks', {
                  headers: {
                      'Authorization': `Bearer ${authToken}`
                  }
              });
              setTasks(response.data);
              console.log(response.data)
          } catch (error) {
              console.error("Greška prilikom dohvatanja taskova:", error);
          }
      };

      fetchData();
  }, []);
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const authToken = sessionStorage.getItem('auth_token');
              const response = await axios.get('http://127.0.0.1:8000/api/user', {
                  headers: {
                      'Authorization': `Bearer ${authToken}`
                  }
              });
              setUsers(response.data);
              console.log(response.data)
          } catch (error) {
              console.error("Greška prilikom dohvatanja usera:", error);
          }
      };

      fetchData();
  }, []);
  const [prodajnePrilike, setProdajnePrilike] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const authToken = sessionStorage.getItem('auth_token');
              const response = await axios.get('http://127.0.0.1:8000/api/prodajne-prilike', {
                  headers: {
                      'Authorization': `Bearer ${authToken}`
                  }
              });
              setProdajnePrilike(response.data);
              console.log(response.data)
          } catch (error) {
              console.error("Greška prilikom dohvatanja usera:", error);
          }
      };

      fetchData();
  }, []);
    return (
        <Router>
            <div className="App">
              <Navbar token={token} setToken={setToken}> </Navbar>
              <Routes>
                    <Route path="/register" element={ <RegisterComponent />}> </Route>
                    <Route path="/klijenti" element={ <Klijenti klijenti={klijenti} setKlijenti={setKlijenti}/>}> </Route>
                    <Route path="/tasks" element={ <Tasks tasks={tasks} setTasks={setTasks} />}> </Route>
                       
                    <Route path="/dodajPP" element={ <DodajPP   setProdajnePrilike={setProdajnePrilike} prodajnePrilike={prodajnePrilike}/>}></Route>
               
                    <Route path="/dodaj" element={ <Dodaj setKlijenti={setKlijenti}/>}></Route>
               
                    <Route path="/login" element={ <Login setToken={setToken}/>}></Route>
                    <Route path="/dodajTask" element={<DodajTask  users={users}/>}> </Route>
                    <Route path="/prodajnaPrilika" element={<ProdajnaPrilika  prilike={prodajnePrilike}/>}> </Route>
                       
                    <Route path="/admin" element={<Admin prilike={prodajnePrilike} klijenti={klijenti} />}> </Route>
                    <Route path="/azuriraj/:id" element={<Azuriraj prilike={prodajnePrilike} />}></Route>
                    <Route path="/" element={<Pocetna />}> </Route>
                        
                   
                </Routes>
            </div>
        </Router>
    );
}

export default App;
