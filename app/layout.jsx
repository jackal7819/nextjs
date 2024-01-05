import './globals.css';

import Header from '../components/Header';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Next.js Tutorial',
	description: 'Build awesome stuff with Next.js',
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<main className='max-w-6xl px-8 py-20 mx-auto'>
					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
