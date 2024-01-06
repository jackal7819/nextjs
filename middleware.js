export const middleware = () => console.log('middleware');

export const config = {
	matcher: ['/about/:path*', '/tasks/:path*'],
};
