const DrinksLayout = ({ children }) => {
	return (
		<div className='max-w-xl'>
			<div className='mb-8 mockup-code'>
				<pre data-prefix='$'>
					<code>npx create-next-app@latest nextjs tutorial</code>
				</pre>
			</div>
			{children}
		</div>
	);
};

export default DrinksLayout;
