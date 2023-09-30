<script>
	import Header from './Header.svelte';
	import "../styles/global.css";
	export let dlinks = [{ id: 1, name: 'Redirect to home', url: '/' }];
</script>

<div class="page p-full">
	<Header {dlinks} />
	<h1 class="errorh1">Error 404!</h1>
	<p class="errorp">Page not found.</p>
</div>