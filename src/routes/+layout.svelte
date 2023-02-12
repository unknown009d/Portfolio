<script>
	// @ts-nocheck
	import '../styles/global.css';
	import HeadDoc from './HeadDoc.svelte';
	import SectionH from './SectionH.svelte';
	import Contact from './Contact.svelte';
	import { onMount } from 'svelte';

	let randomNum = 0;

	let isLoaded = false;
	let sarcasmQuotes = [];

	onMount(async () => {
		isLoaded = true;
		randomNum = Math.floor(Math.random() * sarcasmQuotes.length);
		const response = await fetch('dynamic/homePage.json');
		if (response.ok) {
			const data = await response.json();
			sarcasmQuotes = data[0].sarcasm;
		}
	});
</script>

<section class="loader" class:lshow={isLoaded}>
	<h2 class="title">Hello</h2>
	<h2 class="title">Ciao</h2>
	<h2 class="title">こんにちは</h2>
	<h2 class="title">Olá</h2>
	<h2 class="title">নমস্কার</h2>
	<h2 class="title">नमस्ते</h2>
</section>

<HeadDoc />
<main class:dinit={isLoaded} style="transition-delay: 2500ms;">
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
	main {
		opacity: 0;
		transition: opacity 1500ms ease;
	}
	.dinit {
		opacity: 1;
		transition: opacity 1500ms ease;
	}
	@keyframes showTitles {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
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
		user-select: none;
		overflow: hidden;
	}
	.loader::after {
		content: 'Please wait, the site is loading...';
		display: block;
		position: absolute;
		bottom: 0;
		padding: 2rem 1rem;
		z-index: 5;
		color: rgba(var(--primary-color), 0.8);
		opacity: 0;
		animation: showTitles 400ms ease 5000ms forwards;
	}
	@media only screen and (max-width: 612px) {
		.loader::after {
			font-size: 0.8rem;
		}
	}
	@keyframes zoomOut {
		0% {
			transform: scale(1.4);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	.loader .title {
		position: absolute;
		font-size: 10rem;
		font-family: sans-serif;
		font-weight: 900;
		background-color: rgb(var(--bg-color));
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		opacity: 0;
		animation: showTitles 100ms linear forwards;
	}
	@media only screen and (max-width: 1280px) {
		.loader .title {
			font-size: 5rem;
		}
	}
	@media only screen and (max-width: 612px) {
		.loader .title {
			font-size: 3rem;
		}
	}
	.loader .title:first-child {
		opacity: 0;
		animation: zoomOut 700ms ease forwards;
		animation-delay: 0;
	}
	.loader .title:nth-child(2) {
		animation-delay: 600ms;
	}
	.loader .title:nth-child(3) {
		animation-delay: 1000ms;
	}
	.loader .title:nth-child(4) {
		animation-delay: 1400ms;
	}
	.loader .title:nth-child(5) {
		animation-delay: 1800ms;
	}
	.loader .title:nth-child(6) {
		animation-delay: 2200ms;
	}
	@keyframes loaded {
		0% {
			top: 0;
		}
		100% {
			top: -130%;
		}
	}
	.lshow {
		opacity: 1;
		/* animation: loaded 1000ms cubic-bezier(0.78, 0.34, 0.41, 1) 1200ms forwards; */
		/* animation: loaded 1500ms cubic-bezier(1, 0.02, 0.41, 1) 1200ms forwards; */
		animation: loaded 2000ms cubic-bezier(0.61, 0.11, 0, 0.99) 2000ms forwards;
	}
	.lshow::after {
		display: none;
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
