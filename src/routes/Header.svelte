<script>
	//@ts-nocheck
	import { onMount } from 'svelte';

	/* 
	export let dlinks = [
	 	{ id: 1, name: 'Projects', url: '/projects' }, 
	 	{ id: 2, name: 'AboutMe', url: '/aboutme' }, 
	 	{ id: 3, name: 'MyResume', url: '/myresume' }
	 ]; 
	*/
	export let dlinks = [
		// { id: 1, name: 'Works', url: '/works' },
		{ id: 1, name: 'Resume', url: '/myresume' }
	];
	export let changeLinkToHome = 0;
	export let homeText = 'Home';
	let mgithub, mlinkedin;
	// let mgithub = 'https://github.com/unknown009d';
	// let mlinkedin = 'https://linkedin.com/in/drubajyotidebnath';
	onMount(async () => {
		const response = await fetch('dynamic/contact.json');
		if (response.ok) {
			const data = await response.json();
			mgithub = data[0].github;
			mlinkedin = data[0].linkedin;
		}
	});
</script>

<header>
	<div class="start">
		<svg
			width="52"
			height="52"
			viewBox="0 0 52 52"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<rect width="52" height="52" rx="26" fill="url(#pattern0)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlink:href="#image0_1110_195" transform="translate(-0.249064) scale(0.00374532)" />
				</pattern>
				<image
					id="image0_1110_195"
					width="400"
					height="267"
					xlink:href="data:image/png;base64,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"
				/>
			</defs>
		</svg>
		<h1 title="I'm from India">IND</h1>
	</div>
	<nav class="mid">
		{#each dlinks as link, index}
			{#if link.id == changeLinkToHome}
				<a href="/">{homeText}</a>
			{:else}
				<a href={link.url}>{link.name}</a>
			{/if}
			{#if index + 1 < dlinks.length}
				<span class="seperator">|</span>
			{/if}
		{/each}
	</nav>

	<div class="end">
		<p>
			Let's&nbsp;connect&nbsp;on
			<a href={mgithub} target="_blank" rel="noreferrer" aria-label="Open Github Profile" >
				<span class="icon i-github" />
			</a>
			/
			<a href={mlinkedin} target="_blank" rel="noreferrer" aria-label="Open Linkedin Profile">
				<span class="icon i-linkedin" />
			</a>
		</p>
	</div>
</header>

<style>
	.icon {
		transform: scale(0.7);
	}
	header {
		width: 100%;
		padding: 1rem 0;
		background-color: transparent;
		margin-bottom: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		gap: 2rem;
	}
	.start {
		flex: 1;
		display: flex;
		justify-items: start;
		align-items: center;
		gap: 0.8rem;
	}
	.start svg {
		width: 32px;
	}
	.start h1 {
		font-size: 1.2rem;
		font-weight: 800;
	}
	.mid {
		flex: 2;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	.mid a {
		color: rgb(var(--fg-color));
		text-decoration: none;
		font-weight: 700;
		text-transform: capitalize;
		/* padding: 0.8rem 1rem; */
		/* border-left: 3px solid rgba(var(--fg-color), 0.6); */
		/* padding-left: 1rem; */
		position: relative;
	}
	.mid a:first-child {
		border-left: none;
	}
	.mid a::after {
		content: '';
		display: block;
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		margin-top: 0px;
		width: 0px;
		height: var(--focus-height);
		max-height: 40%; 
		background-color: rgba(var(--primary-color));
		transition: var(--focus-transition);
		transform: translateY(-6px);
		opacity: 0.4;
	}
	.mid a:focus::after,
	.mid a:hover::after {
		width: 100%;
	}
	.mid .seperator {
		font-weight: 800;
		color: rgba(var(--fg-color), 0.6);
		user-select: none;
		pointer-events: none;
	}
	.end {
		flex: 1;
		font-size: 1rem;
	}
	.end p {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		color: rbg(var(--fg-color), 0.8);
	}
	.end p a {
		position: relative;
		transition: background-color 400ms ease;
	}
	.end p a::before {
		content: '';
		display: block;
		position: absolute;
		bottom: 0%;
		left: 20%;
		width: 0%;
		height: var(--focus-height);
		background-color: rgba(var(--primary-color), 1);
		transition: var(--focus-transition);
	}
	.end p a .icon {
		background-color: rgba(var(--fg-color), 0.8);
	}
	.end p a:focus .icon,
	.end p a:hover .icon {
		background-color: rgba(var(--fg-color), 1);
		filter: brightness(150%);
	}
	.end p a:focus::before,
	.end p a:hover::before {
		width: 60%;
	}
	@media only screen and (max-width: 1190px) {
		.mid a {
			/* padding: 0.4rem; */
		}
		.start {
			flex: 0;
		}
		.mid {
			flex: 0;
		}
		.end {
			flex: 0;
		}
	}
	/* Uncomment this if more than 2 elements are there in the nav
	@media only screen and (max-width: 950px) { */
	@media only screen and (max-width: 650px) {
		header {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.4rem;
		}
		.mid {
			font-size: 1.2rem;
		}
	}
	@media only screen and (max-width: 650px) {
		.mid {
			font-size: 1rem;
		}
	}
	@media only screen and (max-width: 612px) {
		.end p a:focus::before,
		.end p a:hover::before {
			width: 0;
		}
		header {
			align-items: flex-start;
			position: relative;
		}
		.mid {
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
		}
		.mid a:focus::after,
		.mid a:hover::after {
			display: none;
		}
		.mid span.seperator {
			transform: rotate(90deg) translateY(-7px);
		}
		.end {
			position: absolute;
			right: 0;
			top: 15%;
			writing-mode: vertical-lr;
		}
	}
</style>
