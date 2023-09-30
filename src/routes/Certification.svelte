<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import ImgText from './ImgText.svelte';
	import SectionH from './SectionH.svelte';

	let certificates = [];

	onMount(async () => {
		const response = await fetch('dynamic/certificates.json');
		if (response.ok) {
			const data = await response.json();
			certificates = data;
		}
	});
</script>

{#if certificates.length > 0}
	<div class="page">
		<SectionH
			heading="Certificates Achieved"
			sub="Here are some of the certification that I have achieved..."
		/>
	</div>

	<div class="certificate-container">
		<div class="sb-container bt-previous">
			<button
				class="scroll-btns"
				data-tooltip="Previous"
				aria-label="Previous Button for Certificates"
				aria-labelledby="Previous Button in Certificates"
				on:click={(event) => {
					event.target.parentNode.parentNode.scrollLeft -= 250;
				}}
			>
				<span class="icon i-backward" />
			</button>
		</div>
		{#each certificates as { id, img, title, issued }}
			<div class="certi" tabindex="-1">
				<ImgText {img} {title} sub={issued} />
			</div>
		{/each}
		<div class="sb-container bt-next">
			<button
				class="scroll-btns"
				data-tooltip="Next"
				aria-label="Next Button for Certificates"
				aria-labelledby="Next Button in Certificates"
				on:click={(event) => {
					event.target.parentNode.parentNode.scrollLeft += 250;
				}}
			>
				<span class="icon i-forward" />
			</button>
		</div>
	</div>
{/if}

<style>
	.certificate-container {
		--area-of-work: 0rem 10%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
		overflow-x: auto;
		padding: var(--area-of-work);
		padding-bottom: 2rem;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		position: relative;
	}
	.certificate-container::-webkit-scrollbar {
		display: none;
		scrollbar-width: 0;
	}
	.certificate-container .certi {
		all: unset;
		min-width: 300px;
		width: 300px;
		max-width: 300px;
		scroll-snap-align: center;
	}
	.certificate-container .sb-container {
		position: sticky;
		top: 0;
		width: 0;
		padding: 0;
		margin: 0;
		z-index: 2;
	}
	.certificate-container .sb-container.bt-previous {
		left: 0;
		transform: translateX(-50px);
	}
	.certificate-container .sb-container.bt-next {
		right: 0;
	}
	.certificate-container .scroll-btns {
		all: unset;
		height: 50px;
		width: 50px;
		min-width: 50px;
		max-width: 50px;
		background-color: rgba(var(--bg-color), 0.2);
		backdrop-filter: blur(5px);
		display: grid;
		place-items: center;
		transform: translateY(-25px);
		opacity: 1;
		position: relative;
		transition: opacity 400ms ease 800ms;
	}
	.certificate-container .scroll-btns::after {
		content: attr(data-tooltip);
		display: block;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 2rem);
		background-color: rgb(var(--bg-color));
		padding: 0.5rem 0.8rem;
		font-size: 0.8rem;
		font-weight: 600;
		opacity: 0;
		transition: opacity 400ms ease;
	}
	@keyframes moveAside {
		0% {
			transform: translate(0px, -25px);
		}
		10% {
			transform: translate(0px, -25px);
		}
		40% {
			transform: translate(10px, -25px);
		}
		50% {
			transform: translate(0px, -25px);
		}
		60% {
			transform: translate(10px, -25px);
		}
		80% {
			transform: translate(0px, -25px);
		}
		100% {
			transform: translate(0px, -25px);
		}
	}
	.certificate-container .scroll-btns:focus,
	.certificate-container .scroll-btns:focus-within,
	.certificate-container .scroll-btns:focus-visible {
		box-shadow: 0 0 0 2px rgb(var(--bg-color));
		animation: moveAside 3000ms ease infinite;
	}
	.certificate-container .scroll-btns:hover::after,
	.certificate-container .scroll-btns:focus::after,
	.certificate-container .scroll-btns:focus-within,
	.certificate-container .scroll-btns:focus-visible {
		opacity: 1;
		transition: opacity 400ms ease 400ms;
	}
	.certificate-container:hover .scroll-btns {
		opacity: 1;
	}
	.certificate-container .scroll-btns .icon {
		pointer-events: none;
		user-select: none;
		background-color: rgb(var(--bg-color));
		transition: background-color 400ms ease;
	}
	@media only screen and (max-width: 612px) {
		.sb-container {
			display: none;
		}
	}
	/* @media (prefers-color-scheme: light) {
		.certificate-container .scroll-btns {
			background-color: rgba(var(--fg-color), 0.8);
			opacity: 0;
		}
	} */
</style>
