<script>
	export let data;
	function contentToHtml(content) {
		let res = content
			.replaceAll(' /n ', '<br>')
			.replaceAll(' /im ', '</p><p class="initial__important">')
			.replaceAll(' im/ ', '</i></p><p>')
			.replaceAll(' /it ', '<i>')
			.replaceAll(' it/ ', '</i>');
		return res;
	}
	const content = contentToHtml(data.post.content.toString());
</script>

<section class="initial">
	<h1 class="initial__title">{data.post.title}</h1>
	<div class="initial__about">
		<p>{@html content}</p>
	</div>
</section>