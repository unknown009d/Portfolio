<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import SectionH from './SectionH.svelte';

	export let showHeading = true;

	const copyToClip = (event) => {
		navigator.clipboard.writeText(event.target.innerText);
		event.target.classList.add('copied-popup');
		setTimeout(() => {
			event.target.classList.remove('copied-popup');
		}, 3000);
	};

	let d_github = 'https://github.com/unknown009d',
		d_linkedin = 'https://linkedin.com/in/drubajyotidebnath',
		d_email = 'vbunitynet@gmail.com',
		d_phone = '+91 7085 759 582';

	onMount(async () => {
		const response = await fetch('dynamic/contact.json');
		if (response.ok) {
			const data = await response.json();
			d_github = data[0].github;
			d_linkedin = data[0].linkedin;
			d_email = data[0].email;
			d_phone = data[0].phone;
		}
	});
</script>

{#if showHeading}
	<SectionH
		heading="Get in touch ..."
		sub="Interested in working with me or maybe just want to have a conversation? "
	/>
{/if}

<div class="cd-container">
	<div class="cd-item">
		<div class="cd-img"><span class="icon i-lg i-github_lg" /></div>
		<div class="cd-content">
			<h5>Github</h5>
			<a href="https://github.com/unknown009d/" target="_blank" rel="noreferrer" class="txtWrap">
				{d_github}
			</a>
		</div>
	</div>
	<div class="cd-item">
		<div class="cd-img"><span class="icon i-lg i-linkedin_lg" /></div>
		<div class="cd-content">
			<h5>LinkedIn</h5>
			<a
				href="https://www.linkedin.com/in/drubajyotidebnath/"
				target="_blank"
				rel="noreferrer"
				class="txtWrap"
			>
				{d_linkedin}
			</a>
		</div>
	</div>
	<div class="cd-item">
		<div class="cd-img"><span class="icon i-lg i-mail_lg" /></div>
		<div class="cd-content">
			<h5>Email ID</h5>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="cxtras">
				<p
					class="txtWrap copied-text"
					on:click={(event) => {
						copyToClip(event);
					}}
				>
					{d_email}
				</p>
				<!-- svelte-ignore a11y-missing-content -->
				<a href="mailto:{d_email}" class="linkBtn">
					<span class="icon i-externalLink" />
				</a>
			</div>
		</div>
	</div>
	<div class="cd-item">
		<div class="cd-img"><span class="icon i-lg i-call_lg" /></div>
		<div class="cd-content">
			<h5>Phone Number</h5>
			<div class="cxtras">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<p
					class="txtWrap copied-text"
					on:click={(event) => {
						copyToClip(event);
					}}
				>
					{d_phone}
				</p>
				<!-- svelte-ignore a11y-missing-content -->
				<a href="tel:{d_phone}" class="linkBtn"><span class="icon i-externalLink" /></a>
			</div>
		</div>
	</div>
</div>

<style>
	.txtWrap {
		width: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.cd-container {
		background-color: transparent;
		padding: 2rem 0;
	}
	.cd-container .cd-item {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 1rem 2rem;
		gap: 1rem;
	}
	.cd-container .cd-item .cd-img {
		width: 48px;
		height: 48px;
		min-width: 48px;
		min-height: 48px;
	}
	.cd-container .cd-item .cd-img span {
		width: 100%;
		height: 100%;
	}
	.cd-container .cd-item .cd-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	.cd-container .cd-item .cd-content h5 {
		font-size: 0.8rem;
	}
	.cd-container .cd-item .cd-content a,
	.cd-container .cd-item .cd-content p {
		text-decoration: none;
		font-size: 1.2rem;
		color: rgb(var(--primary-color));
		cursor: pointer;
		transition: opacity 200ms ease 200ms;
	}
	.cxtras {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		justify-content: flex-start;
		align-items: center;
	}
	.cxtras .i-externalLink {
		width: 70%;
		height: 70%;
		margin: 0;
		padding: 0;
		background-color: rgba(var(--fg-color), 0.8);
	}
	.cxtras .linkBtn {
		background-color: rgba(var(--primary-color), 0.1);
		display: grid;
		place-items: center;
		height: 26px;
		width: 30px;
		border-radius: 4px;
	}
	.cxtras .linkBtn:hover .i-externalLink {
		background-color: rgba(var(--fg-color), 1);
	}
	.cxtras:focus,
	.cxtras:focus-within,
	.cxtras:focus-visible {
		background-color: rgb(var(--primary-color), 0.2);
	}
	.cd-container .cd-item .cd-content a {
		border-bottom: 2px dashed rgba(var(--primary-color), 0.4);
	}
	@media only screen and (max-width: 612px) {
		.cd-container .cd-item .cd-content a {
			text-decoration: underline;
			border-bottom: none;
		}
		.cd-container .cd-item .cd-content a,
		.cd-container .cd-item .cd-content p {
			font-size: initial;
		}
		.cd-container .cd-item {
			padding: 0.5rem 0;
			margin-bottom: 1.5rem;
			display: block;
		}
		.cd-container .cd-item .cd-img {
			display: none;
		}

		.cxtras .linkBtn {
			transform: scale(1.2);
		}
	}
</style>
