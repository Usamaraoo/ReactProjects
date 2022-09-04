// library imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// local import
import HomePage from './HomePage'

import comp from './appsData'
// cocktail app inner links
import CocktailDetail from './screens/cocktails/pages/CocktailDetail'
import About from './screens/cocktails/pages/About'
import Err from './screens/cocktails/pages/Err'
function App() {
	return (
		<div className='text-center'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					{comp.map((component, index) => {
						const { comp, link } = component
                      
                          {component.childRoute &&  component.childRoute.map((childComp,i)=>{
						    const { component, link:li } = childComp
                                return (<div>
                                    <Route key={index} path={link} element={comp} />
                                <Route  path={li} element={component} />)</div>)
                            })}
						return <Route key={index} path={link} element={comp} />
					})}

					 <Route  path='/cocktails/:id' element={<CocktailDetail/>} />
					 <Route  path='/cocktail/about' element={<About/>} />
					 <Route  path='*' element={<Err/>} />

				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
