<script>
	// @ts-nocheck

	import ImgText from './ImgText.svelte';
	import SectionH from './SectionH.svelte';
	import Arrow from '$lib/images/ArrowNext.svg';

	let imageLocation = 'src/lib/images/Certificates/'; //TODO: Change of this doesn't work in build
	let certificates = [
		{
			id: 1,
			img: 'Certificate1.webp',
			title: 'Responsive Web Design',
			issued: 'Issued on 2021 - freeCodeCamp'
		},
		{
			id: 2,
			img: 'Certificate2.webp',
			title: 'Object Oriented Programming',
			issued: 'Issued on 2022 - LinkedIn'
		},
		{
			id: 3,
			img: 'Certificate3.webp',
			title: 'Develop your communication skills and interpersonal influence',
			issued: 'Issued on 2022 - LinkedIn'
		},
		{
			id: 4,
			img: 'Certificate4.webp',
			title: 'Learning Cyber Incident Response and Digital Forensics',
			issued: 'Issued on 2022 - LinkedIn'
		}
	];
</script>

<div class="page">
	<SectionH
		heading="Certificates"
		sub="Here are some of the certification that I have achieved..."
	/>
</div>

<div class="certificate-container">
	<div class="sb-container bt-previous">
		<button
			class="scroll-btns"
			data-tooltip="Previous"
			on:click={(event) => {
				event.target.parentNode.parentNode.scrollLeft -= 250;
			}}
		>
			<span class="icon i-backward" />
		</button>
	</div>
	{#each certificates as { id, img, title, issued }}
		<div class="certi">
			<ImgText img="{imageLocation}{img}" {title} sub={issued} />
		</div>
	{/each}
	<div class="sb-container bt-next">
		<button
			class="scroll-btns"
			data-tooltip="Next"
			on:click={(event) => {
				event.target.parentNode.parentNode.scrollLeft += 250;
			}}
		>
			<span class="icon i-forward" />
		</button>
	</div>
</div>

<style>
	.certificate-container {
		--area-of-work: 0rem 10%;
		display: flex;
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
		opacity: 0;
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
	.certificate-container .scroll-btns:hover::after {
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
	/* @media (prefers-color-scheme: light) {
		.certificate-container .scroll-btns {
			background-color: rgba(var(--fg-color), 0.8);
			opacity: 0;
		}
	} */
</style>
