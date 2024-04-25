<script>
	export let data;
</script>

<section class="initial">
	<h1 class="initial__title">{data.post.title}</h1>
	<div class="initial__about">
		<div class="initial__box">{@html data.post.content}
		</div>
	</div>
</section>