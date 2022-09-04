import { useCocktailGlobalContext } from '../CocktailContext'
import CocktailCard from '../components/CocktailCard'
import CocktailNav from '../components/CocktailNav'
import SearchCocktail from '../components/SearchCocktail'
import Loading from '../components/Loading'
import { useEffect } from 'react'

export default function HomeCocktail() {
	const { loading, cocktails } = useCocktailGlobalContext()
	return (
		<div>
			<CocktailNav />
			<SearchCocktail />
			{/* List of cocktails */}
			{loading ? (
				<Loading />
			) : (
				<div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:grid-cols-3 mx-auto max-w-full md:max-w-6xl gap-y-10 mt-20'>
					{cocktails.length > 0 &&
						cocktails.map((cock, i) => {
							return <CocktailCard key={i} {...cock} />
						})}
				</div>
			)}
            { cocktails.length === 0 && <div>
                {!loading && <p>No result found</p>}
            </div> }
		</div>
	)
}
