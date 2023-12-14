import Image from 'next/image';
import Link from 'next/link';
import drinkImg from './drink.jpg';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
	const response = await fetch(`${url}${id}`);

	if (!response.ok) {
		throw new Error('Failed to fetch a drink');
	}

	const data = await response.json();
	return data;
};

const SingleDrinkPage = async ({ params }) => {
	const { id } = params;
	const data = await getSingleDrink(id);
	const title = data?.drinks[0]?.strDrink;
	const image = data?.drinks[0]?.strDrinkThumb;
	const instructions = data?.drinks[0]?.strInstructions;

	return (
		<div>
			<Link
				href='/drinks'
				className='mt-8 mb-12 uppercase btn btn-primary'
			>
				back to drinks
			</Link>
			{/* <Image
				src={drinkImg}
				alt='drink'
				className='w-48 h-48 mb-8 rounded-lg'
			/> */}
			<Image
				src={image}
                width={300}
                height={300}
				alt={title}
                priority
				className='w-48 h-48 mb-8 rounded-lg shadow-lg'
			/>
			<h1 className='mb-8 text-4xl'>{title}</h1>
			<p className='mb-8 text-xl'>{instructions}</p>
		</div>
	);
};

export default SingleDrinkPage;
