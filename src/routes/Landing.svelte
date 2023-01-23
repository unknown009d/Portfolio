<script>
	import Header from './Header.svelte';
</script>

<Header />
<div class="landing-content">
	<h1 class="normal-heading">
		Hey there <img src="Hand.svg" class="wave-icon" alt="👋🏽" />
	</h1>
	<h1 class="fancy-font">I’m Drubajyoti Debnath</h1>
	<p class="small-description">
		An introvert but enthusiastic developer primarily focusing on better User Interface and User
		Experience, currently pursuing Bachelor in Computer Science & Engineering. Relatively new but
		highly interested in Free and Open Source Software ideology. Experienced in computer graphics
		and web designing. Always open to work with learning new things and exploring latest
		technologies. btw, i use arch.
	</p>
</div>

<style>
	.landing-content{
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		height: 500px;
		margin-bottom: 2rem;
	}
	.normal-heading {
		font-family: 'Raleway', 'Inter', 'Roboto', sans-serif;
		font-weight: 800;
		margin-bottom: 0.4rem;
	}
	h1{
		font-size: 3.5rem;
	}
	.small-description {
		line-height: 169%;
		margin-top: 1.5rem;
		font-size: 1.2rem;
	}
	.wave-icon {
		width: 72px;
		margin: -8px;
	}
</style>
