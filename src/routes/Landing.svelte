<script>
	import Header from './Header.svelte';
	import WaveHand from '$lib/images/Hand.svg';
</script>

<Header />
<div class="landing-content">
	<h1 class="normal-heading">
		Hey there
		<img src={WaveHand} id="wi" class="wave-icon" alt="👋🏽" />
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
	.landing-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		height: 500px;
		padding: 2rem 0;
	}
	.normal-heading {
		font-family: 'Raleway', 'Inter', 'Roboto', sans-serif;
		font-weight: 800;
		margin-bottom: 0.4rem;
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
			font-size: 2rem;
		}
		.small-description {
			line-height: 169%;
			margin-top: 1.5rem;
			font-size: 1rem;
		}
		.wave-icon {
			width: 52px;
			margin: 0px;
			margin-bottom: -8px;
		}
	}
	@media only screen and (max-width: 450px) {
		.small-description {
			line-height: 150%;
			margin-top: 1.5rem;
			font-size: 1rem;
		}
	}
</style>
