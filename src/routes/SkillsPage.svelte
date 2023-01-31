<script>
	//@ts-nocheck
	import Skill from './Skill.svelte';
	export let skillsets = [
		{
			color: 0,
			category: 'Core Programming',
			skills: [
				{ name: 'C', level: 'Advanced' },
				{ name: 'C++', level: 'Intermediate' },
				{ name: 'Java', level: 'Amature' },
				{ name: 'Python', level: 'Intermediate' },
				{ name: 'Bash', level: 'Intermediate' },
				{ name: 'MySQL', level: 'Advanced' }
			]
		},
		{
			color: 2,
			category: 'Application Based',
			skills: [
				{ name: 'Andoid Studio', level: 'Amature' },
				{ name: 'VB.NET', level: 'Advanced' }
			]
		},
		{
			color: 3,
			category: 'Web Based',
			skills: [
				{ name: 'HTML5', level: 'Advanced' },
				{ name: 'CSS3', level: 'Expert' },
				{ name: 'JavaScript', level: 'Intermediate' },
				{ name: 'PHP', level: 'Experienced' },
				{ name: 'AngularJS', level: 'Advanced' },
				{ name: 'Svelte', level: 'Novice' }
			]
		},
		{
			color: 4,
			category: 'Graphics Design',
			skills: [
				{ name: 'GIMP', level: 'Intermediate' },
				{ name: 'Krita', level: 'Intermediate' },
				{ name: 'Inkscape', level: 'Novice' },
				{ name: 'Blender', level: 'Amature' },
				{ name: 'Figma', level: 'Advanced' },
				{ name: 'Illustrator', level: 'Advanced' },
				{ name: 'Photoshop', level: 'Experience' }
			]
		}
	];
</script>

<div class="skills-container">
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
		</p>
	</div>
	<div class="skills-showcase">
		{#each skillsets as skill}
			<div class="field">
				<p class="category">{skill.category}</p>
				{#each skill.skills as data}
					<Skill name="{data.name}" level="{data.level}" hueRotate={skill.color} />
				{/each}
			</div>
		{/each}
	</div>
</div>

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
		padding-right: 3rem;
		position: sticky;
		top: 0;
		overflow: hidden;
		height: 100%;
		padding-bottom: 8rem;
	}
	.skills-container .skills-content .fancy-font {
		--primary-color: 172, 161, 245;
	}
	.skills-container .skills-content .quote {
		position: relative;
		float: right;
		margin-top: 6rem;
		width: fit-content;
		font-style: italic;
		font-size: 1rem;
		opacity: 0.8;
	}
	.skills-container .skills-content .quote small {
		display: block;
		text-align: right;
		margin-top: 0.4rem;
	}
	.skills-container .skills-content .quote::before {
		content: 'SKILLS';
		font-family: 'Playfair Display', serif;
		color: rgb(var(--primary-color));
		display: block;
		position: absolute;
		bottom: -10rem;
		right: -18rem;
		font-size: 15rem;
		font-style: normal;
		font-weight: 900;
		z-index: -1;
		opacity: 0.016;
	}
	.fancy-h {
		font-size: 4.5rem;
		margin-bottom: 3rem;
	}
	.skills-container .skills-showcase {
		flex: 4;
		background-color: rgba(var(--bg-color), 0.8);
		padding: var(--area-of-work);
		padding-left: 3rem;
		box-shadow: inset 20px 0 20px -20px rgba(var(--bg-color), 0.6);
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	.skills-container .skills-showcase .field {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: "category category"
							"skills skills";
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1.5rem 3rem;
	}
	.skills-container .skills-showcase .field .category{
		grid-area: category;
	}
	.skills-container .skills-showcase .field div{
		grid-area: skills;
	}
	@media only screen and (max-width: 612px)
	{
		.skills-container{
			flex-direction: column;
		}
		.skills-container .skills-content{
			position: static;
		}
	}
</style>