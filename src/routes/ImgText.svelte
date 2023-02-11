<script>
	// @ts-nocheck

	export let title = 'Title Here';
	export let sub = 'Subtitle here...';
	export let img = '';
	let openImage = (event) => {
		if (event.target.style.position == '') {
			let elementPosition = event.target.getBoundingClientRect();
			let elementWidth = event.target.offsetWidth;
			let elementHeight = event.target.offsetHeight;
			event.target.style = `
				z-index: 101;
				position: fixed; 
				top: ${elementPosition.top}px; 
				left: ${elementPosition.left}px;
				right: ${elementPosition.right}px;
				bottom: ${elementPosition.bottom}px;
				width: ${elementWidth}px;
				height: ${elementHeight}px;
    			box-sizing: border-box;
				`;
			event.target.classList.add('fullscreen-preview');
			event.target.parentNode.nextElementSibling.style.opacity = 0;
			event.target.parentNode.nextElementSibling.style.paddingTop = '15rem';
		} else {
			event.target.classList.add('remove-preview');
			setTimeout(() => {
				event.target.style = '';
				event.target.classList.remove('fullscreen-preview');
				event.target.classList.remove('remove-preview');
				event.target.parentNode.nextElementSibling.style.opacity = 1;
				event.target.parentNode.nextElementSibling.style.paddingTop = '';
			}, 600);
		}
	};
	let screenWidth, screenHeight;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

<div class="imgText-container" tabindex="-1">
	<button
		class="imgHolder"
		on:click={(event) => {
			if (screenWidth > 612) openImage(event);
		}}
		tabindex="-1"
	>
		<img src={img} alt="Certification of {title}" />
	</button>
	<div class="content" tabindex="-1">
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
		transition: opacity 400ms ease;
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
