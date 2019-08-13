<script>
	import Home from './Home.svelte'
	import Author from './Author.svelte'
	import Book from './Book.svelte'
	import Sidebar from './Sidebar.svelte'
	import Router from 'svelte-spa-router'

	const routes = {
		'/': Home,
		'/author/': Author,
		'/book/': Book,
	}

</script>

<Sidebar />

<main>
	<Router {routes}/>
</main>

<!-- 
 Without the router included no error is thrown. Comment out above and uncomment this to see the test running with `npm run test`
<script>
		import Home from './Home.svelte'
		import Author from './Author.svelte'
		import Book from './Book.svelte'
		
		const routes = {
			'/': Home,
			'/author/': Author,
			'/book/': Book,
		}
	
	</script>
		
	<main>
		<h1>Hello There!</h1>
	</main> -->