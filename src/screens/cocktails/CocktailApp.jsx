import HomeCocktail from './pages/HomeCocktail'
import { CocktailProvider } from './CocktailContext'
import { Routes } from 'react-router-dom'
export default function CocktailApp() {
	return (
		<div>
			<CocktailProvider>
				<HomeCocktail />
			</CocktailProvider>
		</div>
	)
}
