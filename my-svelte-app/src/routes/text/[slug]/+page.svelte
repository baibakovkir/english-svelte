<script>
	import LinkAnimated from "../../../components/LinkAnimated.svelte";
	export let data;

	const pdfUrl = `https://abc-profmed.ru/g/s3/lp/lpc.v4/file/TestPDF.pdf`
</script>

<section class="text">	
	<embed src={data.post.pdf} type="application/pdf" class="text__pdf" allowfullscreen />
	<LinkAnimated name="Вернуться назад" link="javascript:history.back()"/>
</section>