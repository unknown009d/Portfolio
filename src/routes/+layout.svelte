<script>

	import '../styles/global.css';
	import HeadDoc from './HeadDoc.svelte';
	import SectionH from './SectionH.svelte';
	import Contact from './Contact.svelte';
	import { onMount } from 'svelte';

	let sarcasmQuotes = [
		'Size matters! At least my portfolio does.',
		'Wakanda forever? More like small screen forever',
		"Bigger is better, unless it's your screen size. Right?",
		'Upgrade or just keep staring at this pathetic, tiny screen.',
		"My portfolio on a small screen? Don't even bother, it's not worth the squint. Upgrade.",
		'Wider display please. This portfolio deserves a palace, not a prison.',
		'Contain my portfolio in a teacup? No way, go for a wider display.',
		'Not wide enough screen size for my portfolio.',
		"Narrow screen?? You're missing out on the big picture.",
		'Small screen? My portfolio needs room to breathe.'
	];
	let randomNum = 0;

	let isLoaded = false;

	onMount(() => {
		randomNum = Math.floor(Math.random() * sarcasmQuotes.length);
		isLoaded = true;
	});
</script>

<section class="loader" class:lshow={isLoaded}>Loading...</section>

<HeadDoc />
<main>
	<slot />
</main>

<footer class="vsmb-break">
	<section class="gbs">
		<h1 class="fancy-h">{sarcasmQuotes[randomNum]}</h1>
	</section>
	<section class="page">
		<SectionH sub="Anyways you can atleast try to contact me with the following" />
		<Contact showHeading={false} />
	</section>
</footer>

<style>
	.loader {
		display: grid;
		place-items: center;
		height: 100vh;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(var(--bg-color));
		z-index: 102;
		pointer-events: none;
		user-select: none;
	}
	@keyframes loaded{
		0%{
			top: 0;
		}
		100%{
			top: -100%;
		}
	}
	.lshow {
		opacity: 1;
		/* animation: loaded 1000ms cubic-bezier(0.78, 0.34, 0.41, 1) 1200ms forwards; */
		animation: loaded 1000ms cubic-bezier(1, 0.02, 0.41, 1) 1200ms forwards;
	}
	.vsmb-break {
		padding: var(--area-of-work);
	}

	.vsmb-break h1 {
		color: rgb(var(--primary-color));
		font-size: 15.5vw;
	}

	.gbs {
		display: grid;
		place-items: center;
		min-height: 80vh;
		padding: 1rem 0;
	}

	.vsmb-break .page {
		padding: 0;
	}

	@media only screen and (max-width: 300px) {
		main {
			display: none;
		}
	}
</style>
