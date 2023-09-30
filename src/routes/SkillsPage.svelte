<script>
	//@ts-nocheck
	import { onMount } from 'svelte';
	import Skill from './Skill.svelte';
	let skillsets = [];
	let windowSize;
	let scrolled = 0;
	let initialValue = 1000;
	let parallexAmount = 0.4; // Increase to make the parallex more

	onMount(async () => {
		const response = await fetch('dynamic/skills.json');
		if (response.ok) {
			const data = await response.json();
			skillsets = data;
		}
	});
</script>

<svelte:window bind:scrollY={scrolled} bind:innerWidth={windowSize} />
<svelte:body bind:this={mainBody} />

{#if skillsets.length > 0}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="skills-container" tabindex="0">
		<div class="skills-content">
			<h2 class="fancy-font fancy-h">Have a look at my skills</h2>
			<p class="fancy-p">
				In these 5+ years of self taught journey, I have experienced a lot of new & advanced
				technologies and have tried most of them. But the one thing that i will always have in me is
				the urge to learn more.
			</p>
			<p class="quote">
				“Learning is a never ending journey”
				<!-- <small>- <abbr title="I don't know">idk</abbr> who said this</small> -->
				<span
					style="
						transform: translateX({initialValue - parallexAmount * scrolled}px);
					"
					class="backdropText"
				>
					SKILLS
				</span>
			</p>
		</div>
		<div class="skills-showcase">
			{#each skillsets as skill}
				<div class="field">
					<p class="category">{skill.category}</p>
					{#each skill.skills as data}
						<Skill name={data.name} level={data.level} hueRotate={skill.color} />
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.skills-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
		background-color: rgb(var(--nord-color));
		--area-of-work: 3rem 10%;
	}
	.skills-container .skills-content {
		flex: 3;
		background-color: rgb(var(--nord-color));
		color: #ffffff;
		padding: var(--area-of-work);
		position: sticky;
		top: 0;
		overflow: hidden;
		height: 100%;
		padding-bottom: 8rem;
	}
	.skills-container .skills-content .fancy-font {
		/* --primary-color: 172, 161, 245; */
	}
	.skills-container .skills-content .quote {
		position: relative;
		float: right;
		margin-top: 6rem;
		width: fit-content;
		font-style: italic;
		font-size: 1rem;
		opacity: 0.8;
		pointer-events: none;
		user-select: none;
	}
	.skills-container .skills-content .quote small {
		display: block;
		text-align: right;
		margin-top: 0.4rem;
	}
	.skills-container .skills-content .quote .backdropText {
		font-family: 'Playfair Display', serif;
		user-select: none;
		color: rgb(var(--primary-color));
		display: block;
		position: absolute;
		bottom: -10rem;
		right: -18rem;
		font-size: 15rem;
		font-style: normal;
		font-weight: 900;
		z-index: -1;
		background: -webkit-linear-gradient(
			rgba(var(--primary-color), 0) 25%,
			rgba(var(--primary-color), 0.2)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		opacity: 0.4;
	}
	@media only screen and (max-width: 612px) {
		.skills-container .skills-content .quote .backdropText {
			transition: transform 200ms ease;
		}
	}
	.fancy-h {
		font-size: 4.5rem;
		margin-bottom: 3rem;
	}
	.skills-container .skills-showcase {
		flex: 4;
		background-color: rgba(var(--bg-color), 0.8);
		padding: var(--area-of-work);
		box-shadow: inset 20px 0 20px -20px rgba(var(--bg-color), 0.6);
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	.skills-container .skills-showcase .field {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas:
			'category category'
			'skills skills';
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1.5rem 3rem;
	}
	.skills-container .skills-showcase .field .category {
		grid-area: category;
	}
	.skills-container .skills-showcase .field div {
		grid-area: skills;
	}
	@media only screen and (max-width: 820px) {
		.skills-container .skills-showcase .field {
			gap: 1.5rem 1rem;
		}
	}
	@media only screen and (max-width: 712px) {
		.skills-container {
			flex-direction: column;
		}
		.skills-container .skills-content {
			position: static;
			padding-right: auto;
		}
	}

	@media only screen and (min-width: 712px) {
		.skills-container .skills-content {
			padding-right: 3rem;
		}
		.skills-container .skills-showcase {
			padding-left: 3rem;
		}
	}

	@media only screen and (max-width: 612px) {
		.fancy-h {
			font-size: 3rem;
		}
	}
</style>
