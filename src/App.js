import Login from './components/Login';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
function App() {
    return (
        <div className='App'>
            <div className='h-screen'>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/main' element={<Main />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
