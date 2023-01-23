<script>
	import Landing from './Landing.svelte';
</script>

<svelte:head>
	<title>Drubajyoti Debnath</title>
</svelte:head>

<main>
	<section class="full-page">
		<Landing />
	</section>
</main>

<style>
    .full-page{
        background: linear-gradient(to top, rgb(var(--bg-color))20%, rgba(var(--bg-color), 0.7) 110%), 
                    url('images/Background.jpeg') 7% 80%/150% no-repeat;
    }
</style>