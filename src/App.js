// Local Imports
import './App.css';
import Tour from './screens/Tour/Tour';
import HomePage from './HomePage';
import BirthdayReminder from './screens/BirthdayReminder/BirthdayReminder';
// library imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reviews from './screens/Reviews/Reviews';

function App() {
    return (
        <div className='text-center'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route
                        path='/birthday-reminder'
                        element={<BirthdayReminder />}
                    />
                    <Route path='/tour' element={<Tour />} />
                    <Route path='/reviews' element={<Reviews />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
