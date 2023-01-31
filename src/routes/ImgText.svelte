<script>
	// @ts-nocheck

	export let title = 'Title Here';
	export let sub = 'Subtitle here...';
	export let img = '';
</script>

<div class="imgText-container">
	<button
		class="imgHolder"
		on:click={(event) => {
			event.target.classList.toggle('fullscreen-preview');
		}}
	>
		<img src={img} alt="Certification of {title}" />
	</button>
	<div class="content">
		<h4 class="txtWrap1">{title}</h4>
		<p>{sub}</p>
	</div>
</div>

<style>
	.imgText-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
	}
	.imgText-container .imgHolder {
		all: unset;
		display: grid;
		place-items: center;
		position: relative;
		cursor: zoom-in;
	}
	.imgText-container .imgHolder::before {
		display: none;
		box-sizing: border-box;
		content: attr(data-tooltip);
		display: grid;
		place-items: center;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(var(--bg-color), 0.8);
		backdrop-filter: blur(2px);
		padding: 1rem;
		text-align: center;
		height: 20%;
		width: 100%;
		z-index: 1;
		opacity: 0;
		user-select: none;
		pointer-events: none;
		transition: opacity 600ms ease;
	}
	.imgText-container .imgHolder img {
		width: 100%;
		object-fit: contain;
		object-position: center;
	}

	.imgText-container .content {
		text-align: center;
		padding: 0.5rem 0.2rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0.2rem;
	}

	.imgText-container .content h4 {
		font-size: 1rem;
	}
	.imgText-container .content p {
		font-size: 0.8rem;
		font-weight: 400;
		opacity: 0.8;
	}
</style>
