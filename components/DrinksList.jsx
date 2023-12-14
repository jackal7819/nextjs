import Image from 'next/image';
import Link from 'next/link';

const DrinksList = ({ drinks }) => {
	return (
		<ul className='grid gap-6 mt-6 sm:grid-cols-2'>
			{drinks.map((drink) => (
				<li key={drink.idDrink}>
					<Link
						href={`/drinks/${drink.idDrink}`}
						className='text-xl font-medium'
					>
						<div className='relative h-48 mb-4'>
							<Image
								src={drink.strDrinkThumb}
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
								alt={drink.strDrink}
								className='object-cover rounded-md'
							/>
						</div>
						<h2 className='text-center'>{drink.strDrink}</h2>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default DrinksList;
