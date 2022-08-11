// Local Imports
import './App.css';
// library imports
import HomePage from './HomePage';
import BirthdayReminder from './screens/BirthdayReminder/BirthdayReminder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className='text-center'>
            
            <BrowserRouter>
                <Routes>
                    <Route  path='/' element={<HomePage />} />
                    <Route
                        path='/birthday-reminder'
                        element={< BirthdayReminder />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
