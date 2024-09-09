<script>
	export let data;
	import arrowRight from '$lib/assets/arrow-right.svg';
	const videoLink = data.post.link?.split('v=')[1];
</script>

<section class="video">
	<div class="initial__top">
		<h1 class="initial__title initial__title_right">{data.post.title}</h1>
		<div class="initial__top-link">
			<a href="/english/oge" class="initial__task-link">Перейти к курсу<img class="initial__link__arrow" src={arrowRight} alt="arrow"></a>	
		</div>
	</div>
	<iframe 
	class="video__iframe"
	src="https://www.youtube.com/embed/{videoLink}" 
	title="YouTube video player" 
	frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
	referrerpolicy="strict-origin-when-cross-origin" 
	allowfullscreen></iframe>
</section>