<script>
	export let page = '';
	export let title = "I'm Drubajyoti Debnath";
	export let description =
		'A showcase of my work and skills as a Enthusiast Self-Taught Developer.';
	export let img_url = 'https://unknown009d.github.io/OG.jpg';
	export let img_size = { width: '1280', height: '640' };
</script>

<svelte:head>
	<title>~{page} $ Drubajyoti Debnath</title>
	<meta property="og:site_name" content="unknown009d.github.io" />
	<meta property="og:title" content={title} />
	<meta property="og:url" content="https://unknown009d.github.io" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="profile" />
	<meta property="og:image" content={img_url} />
	<meta property="og:image:width" content={img_size.width} />
	<meta property="og:image:height" content={img_size.height} />
	<meta property="og:image:alt" content="Drubajyoti Debnath | Portfolio Cover Image" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="I'm Drubajyoti Debnath" />
	<meta
		name="twitter:description"
		content="A showcase of my work and skills as a Enthusiast Self-Taught Developer."
	/>
	<meta name="twitter:image" content="https://unknown009d.github.io/OG4.jpg" />
</svelte:head>
