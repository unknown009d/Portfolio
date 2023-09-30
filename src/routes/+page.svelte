<script>
	// @ts-nocheck

	import Landing from './Landing.svelte';
	import HeadDoc from './HeadDoc.svelte';
	import Myedu from './Myedu.svelte';
	import ScrollDown from './scrollDown.svelte';
	import SkillsPage from './SkillsPage.svelte';
	import Certification from './Certification.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import { onMount } from 'svelte';

	let scrolled = 0;
	let backgroundImagePosY = 70; // Default value from styles
	let windowSize = 0;

	let skill = [
		{
			category: 'Core Programming',
			skills: [
				{ name: 'C', level: 'Pro' },
				{ name: 'C++', level: 'Pro' },
				{ name: 'Python', level: 'Pro' },
				{ name: 'Java', level: 'Noobest' },
				{ name: 'MySQL', level: 'Noob' }
			]
		}
	];

	let isLoaded = false;

	onMount(() => {
		document.body.addEventListener('load', () => {
			console.log('Fick');
		});
		isLoaded = true;
	});
</script>

<svelte:window bind:scrollY={scrolled} bind:innerWidth={windowSize} />

<HeadDoc />
<div class="load">
<!-- class:initialized={isLoaded} -->
<section
	class="page p-cover"
	id="CoverInitial"
	style="background-position-y: {backgroundImagePosY -
		scrolled * (windowSize > 612 ? 0.08 : windowSize > 450 ? 0.06 : 0.04)}%;"
>
	<Landing />
</section>

<section class="page">
	<Myedu />
</section>

<section class="p-certi">
	<Certification />
</section>

<section class="skillsPage">
	<SkillsPage />
</section>

<ScrollDown />

<section class="projectsPage" id="works">
	<Projects />
</section>

<section class="page p-padding">
	<Contact />
</section>

</div>

<style>
	.projectsPage {
		margin-top: 3.2rem;
		padding-bottom: 8rem;
		overflow: hidden;
	}
	@media only screen and (min-width: 1600px){
		.projectsPage{
			padding-bottom: 10rem;
		}
	}
	@media only screen and (max-width: 612px){
		.projectsPage{
			padding-bottom: 2rem;
		}
	}
	.p-certi {
		margin-bottom: 3.2rem;
	}

	@keyframes welcome {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
	#CoverInitial {
		background: linear-gradient(to top, rgb(var(--bg-color)) 20%, rgba(var(--bg-color), 0.7) 110%),
			url('../lib/images/Background.webp') 0%/150% no-repeat;
		background-position-y: 70%;
		background-position-x: 7%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
	}
	@media only screen and (max-width: 950px) {
		#CoverInitial {
			background-size: 250%;
			background-position-x: 38%;
		}
	}
	@media only screen and (max-width: 612px) {
		#CoverInitial {
			justify-content: space-between;
			gap: 2rem;
			background-size: 400%;
			background-position: 58% 70%;
			justify-content: space-between;
		}
		.p-cover {
			max-height: initial;
			height: initial;
		}
	}
	@media only screen and (max-width: 450px) {
		#CoverInitial {
			background-size: 600%;
			background-position: 58% 70%;
		}
	}

	/* @media (prefers-color-scheme: light) {
		#CoverInitial {
			background: linear-gradient(
					to top,
					rgb(var(--bg-color)) 10%,
					rgba(var(--bg-color), 0.8),
					rgba(var(--bg-color), 1) 100%
				),
				url('../lib/images/Background_light_blurred.webp') 0%/150% no-repeat;
		}
	} */
</style>
