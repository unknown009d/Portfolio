<script>
	// @ts-nocheck

	export let name = 'N/A';
	export let level = 'Noob';
	export let hueRotate = 0;
</script>

<div class="skills" style="filter: hue-rotate({hueRotate * 45}deg);">
	<p class="skills-name">{name}</p>
	<p class="skills-level">{level}</p>
</div>

<style>
	.skills {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(var(--primary-color), 0.05);
		padding: 1rem;
		position: relative;
		transition: color 200ms ease-in-out 300ms;
		overflow: hidden;
	}
	.skills::before {
		content: '';
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 2px;
		background-color: rgb(var(--primary-color));
		color: rgb(var(--bg-color));
		mix-blend-mode: difference;
		z-index: -5;
	}
	.skills .skills-name {
		font-weight: 700;
		font-size: 1.2rem;
	}
	.skills .skills-level {
		color: rgb(var(--primary-color));
		font-weight: 500;
		font-size: 0.8rem;
		user-select: none;
	}
	@media only screen and (max-width: 612px) {
		.skills {
			flex-direction: column;
			text-align: center;
			gap: 0.5rem;
		}
		.skills::before {
			top: initial;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 2px;
		}
		.skills .skills-name {
			font-size: 1rem;
		}
		.skills .skills-level {
			font-size: 0.7rem;
		}
	}

	@media only screen and (max-width: 350px) {
		.skills {
			padding: 1rem 0.5rem;
		}
	}
 </style>
