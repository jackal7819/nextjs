import Link from 'next/link';

const links = [
	{ href: '/client', label: 'client' },
	{ href: '/drinks', label: 'drinks' },
	{ href: '/tasks', label: 'tasks' },
	{ href: '/query', label: 'query' },
];

const Header = () => {
	return (
		<nav className='py-4 bg-base-300'>
			<div className='flex-col max-w-6xl px-8 mx-auto navbar sm:flex-row'>
				<Link href='/' className='btn btn-primary'>
					Next.js
				</Link>
				<ul className='menu menu-horizontal md:ml-8'>
					{links.map((monk) => (
						<li key={monk.href}>
							<Link
								href={monk.href}
								className='capitalize'
							>
								{monk.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
