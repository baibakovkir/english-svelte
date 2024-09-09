<script>
	import arrowRight from '$lib/assets/arrow-right.svg';
	export let data;

	const pdfUrl = `https://abc-profmed.ru/g/s3/lp/lpc.v4/file/TestPDF.pdf`
</script>

<section class="text">	
	<div class="initial__top">
		<h1 class="initial__title initial__title_right">{data.post.title}</h1>
		<div class="initial__top-link">
			<a href="/audio/{data.post.slug}" class="initial__task-link">Перейти к аудио<img class="initial__link__arrow" src={arrowRight} alt="arrow"></a>	
		</div>
</div>
<embed src={data.post.pdf} type="application/pdf" class="text__pdf" allowfullscreen />
</section>