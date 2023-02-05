<script>
	// @ts-nocheck

	import SectionH from './SectionH.svelte';

	let imageLocation = '../src/lib/images/'; //TODO: Change of this doesn't work in build
	let schoolsData = [
		{
			id: 1,
			img: 'ManavRachna.webp',
			name: 'Manav Rachna International Institute of Research & Studies (Faridabad)',
			course: 'Bachelor of Technology - B.Tech in Computer Science & Engineering',
			duration: 'Aug 2022 - Expected 2025'
		},
		{
			id: 2,
			img: 'NIELIT.webp',
			name: 'National Institute of Electronics & Information Technology (Agartala)',
			course: 'Diploma in Computer Science and Technology',
			duration: 'Aug 2019 - Aug 2022'
		},
		{
			id: 3,
			img: 'DonBosco.webp',
			name: 'Don Bosco School (Agartala)',
			course: 'Secondary Studies - class 10th of CBSE Board',
			duration: 'Jun 2007 - Jun 2019'
		}
	];
</script>

{#if schoolsData.length > 0}
	<div class="education p-padding">
		<SectionH
			heading="Academic Experience"
			sub="Educational background in a reverse-chronological order"
		/>
		<div class="school-container">
			{#each schoolsData as sData (sData.id)}
				<div class="school">
					<div class="school-img">
						<img src="{imageLocation}{sData.img}" alt="School Logo" />
					</div>
					<div class="school-content">
						<p class="name">{sData.name}</p>
						<p class="course">{sData.course}</p>
						<small class="duration">{sData.duration}</small>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.education {
		background-color: transparent;
	}
	.school-container {
		/* background-color: #00000090; */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 3rem;
		margin: 2rem;
		/* overflow: hidden; */
		position: relative;
	}
	.school-container::before {
		content: '';
		display: block;
		height: 95%;
		width: 2pt;
		position: absolute;
		left: 45px;
		top: 50%;
		transform: translateY(-50%);
		border-left: 2pt dashed rgba(var(--fg-color), 0.4);
		z-index: -1;
	}
	.school-container .school {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
		gap: 1rem;
		width: 100%;
		background-color: rgb(var(--bg-color));
	}
	/* HoverAnimation of Education */
	.school-container.hoverEnable .school:hover {
		cursor: default;
	}
	.school-container.hoverEnable .school .school-content {
		transition: var(--anim-sc);
		transition-delay: 100ms;
	}
	.school-container.hoverEnable:hover .school:not(:hover) .school-content {
		opacity: 0.2;
	}
	/* End of HoverAnimation */
	.school-container .school .school-img img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		color: #161616;
	}
	.school-container .school .school-img {
		max-width: 90px;
		background-color: #dbdbdb;
	}
	@media (prefers-color-scheme: light) {
		.school-container .school .school-img {
			background-color: #fff;
		}
	}
	.school-container .school .school-content {
		padding: 0.5rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
	}
	.school-container .school .school-content .name {
		font-weight: 600;
		font-size: 1.2rem;
	}
	.school-container .school .school-content .course {
		font-size: 1rem;
	}
	.school-container .school .school-content small.duration {
		font-size: 0.8rem;
		opacity: 0.8;
		margin-top: auto;
		padding-top: 0.5rem;
	}
	@media screen and (max-width: 612px) {
		.school-container .school {
			flex-direction: column;
			padding: 1rem 0;
		}
		.school-container .school .school-content {
			padding: 0;
		}
		.school-container .school .school-content small.duration {
			margin-top: 0.8rem;
		}
		.school-container .school .school-content .name {
			font-size: 1rem;
		}
		.school-container .school .school-content .course {
			font-size: 0.8rem;
		}
		.school-container {
			margin: 1rem 0;
		}
	.school-container::before {
		left: 10px;
	}
	}
</style>
