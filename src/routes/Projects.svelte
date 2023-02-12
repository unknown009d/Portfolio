<script>
	//@ts-nocheck
	import HeadDoc from './HeadDoc.svelte';
	import { onMount } from 'svelte';
	import SectionH from './SectionH.svelte';
	let windowSize;
	let scrolled = 0;
	let initialValue = 250;
	let parallexAmount = 0.08; // Increase to make the parallex more
	let parallexStyle = (parallexCalculated) => {
		if (windowSize <= 750) {
			parallexCalculated /= 2;
			parallexCalculated += 30;
		}
		return 'transform: rotate(2deg) scale(1.2) translate(' + parallexCalculated + 'px, 75px);';
	};

	let projectsShowcase = [];

	onMount(async () => {
		const response = await fetch('dynamic/projectsShowcase.json');
		if (response.ok) {
			const data = await response.json();
			projectsShowcase = data;
		}
	});
</script>

<svelte:window bind:scrollY={scrolled} bind:innerWidth={windowSize} />

{#if projectsShowcase.length > 0}
	
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="page p-padding" tabindex="0">
	<SectionH
		heading="The Collection"
		sub="Have a look at some of the projects i have worked on ..."
	/>
</div>

<div
	class="project-container"
	style={windowSize > 612 ? parallexStyle(initialValue - parallexAmount * scrolled) : ''}
>
	<div class="image-container">
		{#each projectsShowcase[0].projects as data}
			<div class="image"><img src="{data.image}" alt="{projectsShowcase.name}" /></div>
		{/each}
	</div>
	<div class="image-container">
		{#each projectsShowcase[1].projects as data}
			<div class="image"><img src="{data.image}" alt="{projectsShowcase.name}" /></div>
		{/each}
	</div>
</div>

{/if}

<style>
	.project-container {
		--gap-of-container: 1rem;
		background-color: transparent;
		gap: var(--gap-of-container);
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
		/* grid-template-columns: 1fr 2fr 1fr;  */
		padding-bottom: 75px;
	}
	.image-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: var(--gap-of-container);
		background-color: rgb(var(--bg-color));
	}
	.image-container .image {
		flex: 1;
		height: 350px;
		width: 350px;
		/* height: 54vh; */
		max-height: 500px;
		transition: flex 400ms ease 400ms;
		/* min-width: 200px; */
	}
	.image-container .image:hover {
		flex: 23%;
	}
	.image-container .image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	@media only screen and (max-width: 1000px) {
		.image-container .image {
			height: 250px;
		}
	}
	@media only screen and (max-width: 750px) {
		.image-container .image {
			height: 200px;
		}
	}

	@media only screen and (max-width: 612px) {
		.project-container {
			padding-bottom: 0;
		}
		.image-container {
			flex-direction: column;
			width: 80%;
			margin: 0 auto;
		}
		.image-container .image {
			width: 100%;
		}
	}
</style>
