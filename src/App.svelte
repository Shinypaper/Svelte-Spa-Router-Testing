<script>
	import Sidebar from './Sidebar.svelte'
	import Home from './Home.svelte'
	import Author from './Author.svelte'
	import Book from './Book.svelte'
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