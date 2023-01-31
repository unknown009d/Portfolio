<script>
	import Header from './Header.svelte';
	import "../styles/global.css";
	export let dlinks = [{ id: 1, name: 'Redirect to home', url: '/' }];
</script>

<div class="page p-full">
	<Header {dlinks} />
	<h1>Error 404!</h1>
	<p>Page not found.</p>
</div>

<style>
	h1 {
		font-size: 5rem;
		text-align: center;
		margin-top: 5rem;
		text-transform: uppercase;
		color: rgb(var(--primary-color));
	}
	p {
		text-align: center;
		font-size: 1.5rem;
		letter-spacing: 0.4rem;
		text-transform: uppercase;
		font-weight: 800;
		width: 50%;
		margin: 0 auto;
		margin-top: 1rem;
		max-width: 600px;
	}
</style>
