<script>
	//@ts-nocheck
	import Header from './Header.svelte';
	import WaveHand from '$lib/images/Hand.svg';
	import { onMount } from 'svelte';

	let aboutSection;

	onMount(async () => {
		let aboutText = `
		An introvert developer with a focus on elevating better User Interface / Experience, I strive to bring
		ideas to life through technology. Pursuing a B.Tech in Computer Science & Engineering. My
		commitment to continuous learning and exploration of new technologies, paired with my passion
		for <abbr title="Free and Open-Source Software">FOSS</abbr> enables me to bring unique and impactful solutions to the
		table. btw, I use Arch.
		`;
		const response = await fetch('dynamic/landing.json');
		if (response.ok) {
			const data = await response.json();
			aboutText = data[0].about;
		}
		aboutSection.innerHTML = aboutText;
	});
</script>

<Header />
<div class="landing-content">
	<h2 class="normal-heading">
		Hey there
		<img src={WaveHand} id="wi" class="wave-icon" alt="👋🏽" />
	</h2>
	<h1 class="fancy-font">I’m<br class="mb-break" /> Drubajyoti<br class="mb-break" /> Debnath</h1>
	<p class="small-description" bind:this={aboutSection} />
</div>

<style>
	.landing-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		height: 500px;
		padding: 2rem 0;
		position: relative;
	}
	.normal-heading {
		font-family: 'Raleway', 'Inter', 'Roboto', sans-serif;
		font-weight: 800;
		margin-bottom: 0.4rem;
		font-size: 3.5rem;
	}
	h1 {
		font-size: 3.5rem;
	}
	.small-description {
		line-height: 169%;
		margin-top: 2.5rem;
		font-size: 1.2rem;
	}
	.wave-icon {
		width: 72px;
		margin: -8px;
	}
	@keyframes wave {
		0% {
			transform: rotate(0deg) scale(1);
		}
		10% {
			transform: rotate(16deg) scale(1.1);
		}
		20% {
			transform: rotate(-6deg) scale(1.1);
		}
		30% {
			transform: rotate(16deg) scale(1.1);
		}
		40% {
			transform: rotate(-4deg) scale(1.1);
		}
		50% {
			transform: rotate(16deg) scale(1.1);
		}
		60% {
			transform: rotate(0deg) scale(1);
		}
		100% {
			transform: rotate(0deg) scale(1);
		}
	}
	.wave-icon:hover,
	.wave-icon:focus {
		animation: wave 2.5s ease-out;
		transform-origin: 75% 85%;
		cursor: none;
	}

	@media only screen and (max-width: 612px) {
		h1 {
			font-size: 3rem;
			line-height: 115%;
		}
		.small-description {
			margin-top: 1.5rem;
			font-size: 1rem;
		}
		.wave-icon {
			display: none;
		}
		.landing-content {
			height: initial;
		}
		.normal-heading {
			display: none;
		}
	}
	@media only screen and (max-width: 450px) {
		.small-description {
			margin-top: 1.5rem;
			font-size: 1rem;
		}
	}
</style>
