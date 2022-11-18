import { useQuery } from '@tanstack/react-query';
import './App.css'

const getRanmonNumberFromApi = async (): Promise<number> => {
	const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
	const numberString = res.text();
	/* throw new Error('Auxilio'); */
	return parseInt(await numberString);
}

export const App = () => {
	const query = useQuery(
		['randomNumber'],
		getRanmonNumberFromApi
	);

	return (
		<div className="App">
			{query.isFetching
				? (<h2> Loading... </h2>)
				: (<h2>Numero aleatorio: {query.data}</h2>)
			}

			{
				!query.isLoading && query.isError && (<h3>{`${query.error}`}</h3>)
			}

			<button onClick={() => query.refetch()} disabled={query.isFetching}>
				{query.isLoading ? '...' : 'New Number'}
			</button>

		</div>
	)
};
