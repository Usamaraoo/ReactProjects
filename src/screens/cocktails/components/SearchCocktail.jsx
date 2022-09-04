import { useCocktailGlobalContext } from "../CocktailContext"

export default function SearchCocktail() {
	const {setSearchTerm } = useCocktailGlobalContext()
	return (
		<div className='w-4/5 sm:w-2/5 md:w-90 mx-auto tracking-widest mt-20'>
			<p className='text-left text-xl font-medium'>Search Cocktail</p>
			<input
				className='mt-2   border border-gray-700 w-full px-4 py-2 rounded-md '
				type='text'
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder='Search'
			/>
		</div>
	)
}
