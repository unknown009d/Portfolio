<script>
	//@ts-nocheck
	import HeadDoc from '../HeadDoc.svelte';
	import Header from '../Header.svelte';
	import { onMount } from 'svelte';

	let ResumeData = [];

	onMount(async () => {
		const response = await fetch('dynamic/resume.json');
		if (response.ok) {
			const data = await response.json();
			ResumeData = data;
		}
	});
</script>

<HeadDoc page="/myresume" />

<section class="page">
	<Header changeLinkToHome={1} />
	<div class="load">
		{#if ResumeData.length > 0}
			<div class="btn-container">
				<a class="morebt" href={ResumeData[1].dir} download="Druba_Resume.pdf">Download Resume ⬇</a
				>
				<button
					class="morebt"
					style="background-color: #00000020;"
					on:click={(e) => {
						let data = e.target.innerHTML;
						if (data == '☀️') {
							document.querySelector('.img-grid').classList.remove('invert');
							e.target.innerHTML = '🌑';
						} else {
							document.querySelector('.img-grid').classList.add('invert');
							e.target.innerHTML = '☀️';
						}
					}}
				>
					☀️
				</button>
			</div>
			<div class="img-grid invert">
				{#each ResumeData[0].pages as data}
					<a href="{ResumeData[0].dir}{data}{ResumeData[0].type}" target="_blank">
						<img src="{ResumeData[0].dir}{data}{ResumeData[0].type}" alt="Resume{data}" />
					</a>
				{/each}
			</div>
		{:else}
			<h1 class="errorh1">Error 404!</h1>
			<p class="errorp">We were unable to find the Resume. Try again later</p>
		{/if}
	</div>
</section>

<style>
	.img-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		width: 100%;
	}

	.img-grid img {
		width: 100%;
		/* height: auto; */
		filter: none;
		transition: filter 400ms ease;
	}
	.img-grid.invert img {
		filter: invert(1) grayscale(1) contrast(80%);
	}
	.btn-container {
		display: grid;
		grid-auto-flow: column;
		justify-content: end;
		place-items: end;
		margin-bottom: 1rem;
	}
</style>
