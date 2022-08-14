// Local Imports
import './App.css';
import Tour from './screens/Tour/Tour';
import HomePage from './HomePage';
import BirthdayReminder from './screens/BirthdayReminder/BirthdayReminder';
// library imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reviews from './screens/Reviews/Reviews';
import Accordion from './screens/accordion/Accordion';
import Menu from './screens/Menu/Menu';

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
                    <Route path='/accordion' element={<Accordion />} />
                    <Route path='/menu' element={<Menu />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
