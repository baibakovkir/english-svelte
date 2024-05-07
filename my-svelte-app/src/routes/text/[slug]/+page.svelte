<script>
	export let data;

	const pdfUrl = `https://abc-profmed.ru/g/s3/lp/lpc.v4/file/TestPDF.pdf`
</script>

<section class="text">
	<embed src={pdfUrl} type="application/pdf" class="text__pdf" />
</section>