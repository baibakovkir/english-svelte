<script>
	export let data;

	const videoLink = data.post.link.split('v=')[1];
</script>

<section class="video">
	<iframe 
	class="video__iframe"
	src="https://www.youtube.com/embed/{videoLink}" 
	title="YouTube video player" 
	frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
	referrerpolicy="strict-origin-when-cross-origin" 
	allowfullscreen></iframe>
</section>