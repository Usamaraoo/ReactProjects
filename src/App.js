// library imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// local import
import HomePage from './HomePage'
import comp from './appsData'
import Err from './Err'

function App() {
	return (
		<div className='text-center'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					{comp.map((component, index) => {
						const { comp, link } = component
						return <Route key={index} path={link} element={comp} />
					})}
					<Route path='*' element={<Err />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
