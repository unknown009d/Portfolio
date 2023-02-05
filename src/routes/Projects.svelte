<script>
	//@ts-nocheck
	import HeadDoc from './HeadDoc.svelte';
	import SectionH from './SectionH.svelte';
	let imageLocation = 'src/lib/images/Projects/'; //TODO: Change of this doesn't work in build
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
</script>

<svelte:window bind:scrollY={scrolled} bind:innerWidth={windowSize} />

<div class="page p-padding">
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
		<div class="image"><img src="{imageLocation}Project1_Less.webp" alt="Project1" /></div>
		<div class="image"><img src="{imageLocation}Project2_Less.webp" alt="Project2" /></div>
		<div class="image"><img src="{imageLocation}Project3_Less.webp" alt="Project3" /></div>
	</div>
	<div class="image-container">
		<div class="image"><img src="{imageLocation}Project4_Less.webp" alt="Project4" /></div>
		<div class="image"><img src="{imageLocation}Project5_Less.webp" alt="Project5" /></div>
		<div class="image"><img src="{imageLocation}Project6_Less.webp" alt="Project6" /></div>
	</div>
</div>

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
