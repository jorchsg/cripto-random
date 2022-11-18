import { useQuery } from '@tanstack/react-query';

const getRanmonNumberFromApi = async (): Promise<number> => {
	const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
	const numberString = res.text();
	/* throw new Error('Auxilio'); */
	return parseInt(await numberString);
}

export const useRandom = () => {

	const query = useQuery(
		['randomNumber'],
		getRanmonNumberFromApi
	);

	return query;
}
