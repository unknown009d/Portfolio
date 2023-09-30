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
		return 'transform: rotate(2deg) scale(1.2) translate(' + parallexCalculated + 'px, 85px);';
	};

	let projectsShowcase = [];

	onMount(async () => {
		const response = await fetch('dynamic/projectsShowcase.json');
		if (response.ok) {
			const data = await response.json();
			projectsShowcase = data;
		}
	});
	
	const openLink = (url) => {
		window.open(url, "_blank");
	}
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
				<button type="button" class="image" on:click={window.open(data.link, "_blank")}><img src={data.image} alt={data.name} 
					title="{data.title}" /></button>
			{/each}
		</div>
		<div class="image-container">
			{#each projectsShowcase[1].projects as data}
				<button type="button" class="image" on:click={window.open(data.link, "_blank")}><img src={data.image} alt={data.name} 
					title="{data.title}" /></button>
			{/each}
		</div>
	</div>
	<div class="moreSection" style="display:none">
		<button class="morebt">View all projects ...</button>
	</div>
{/if}

<style>
	:root {
		--pb-pc: 85px;
	}
	.moreSection {
		background-color: transparent;
		transform: translateY(calc(var(--pb-pc)));
		padding: var(--area-of-work);
		margin-top: 1rem;
		display: grid;
		place-items: center;
	}
	@media only screen and (min-width: 1600px) {
		.moreSection {
			margin-top: 2rem;
			transform: translateY(calc(var(--pb-pc) + 2rem));
		}
	}
	/* .moreSection .morebt {
		all: unset;
		position: relative;
		background-color: rgb(var(--primary-color));
		padding: 0.8rem 1.2rem;
		color: rgb(var(--bg-color));
		z-index: 1;
		cursor: pointer;
		font-weight: 600;
		text-transform: uppercase;
		position: relative;
	}
	.moreSection .morebt::after{
		content: '';
		position: absolute;
		display: block;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0%;
		height: var(--focus-height);
		background-color: rgba(var(--bg-color), 0.2);
		transition: width 400ms ease 200ms;
	}
	.moreSection .morebt:hover::after,
	.moreSection .morebt:focus::after
	{
		width: 100%;
	}
	.moreSection .morebt:active{
		transform: translateY(2px);
	} */
	@media only screen and (max-width: 612px) {
		.moreSection {
			transform: none;
		}
	}
	.project-container {
		--gap-of-container: 1rem;
		background-color: transparent;
		gap: var(--gap-of-container);
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
		/* grid-template-columns: 1fr 2fr 1fr;  */
		padding-bottom: var(--pb-pc);
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
		all: unset;
		flex: 1;
		height: 350px;
		width: 350px;
		/* height: 54vh; */
		max-height: 500px;
		transition: flex 400ms ease 200ms;
		/* min-width: 200px; */
		cursor: pointer;
	}
	.image-container .image:hover,
	.image-container .image:focus
	 {
		flex: 23%;
		transition: flex 400ms ease 1400ms;
	}
	.image-container .image:not(:hover):not(:focus) {
		flex: 1;
		transition: flex 400ms ease 200ms;
	}
	.image-container .image:focus{
		transition: flex 400ms ease 0ms;
	}
	.image-container .image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	@media only screen and (min-width: 1600px) {
		.image-container .image {
			height: 480px;
		}
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
