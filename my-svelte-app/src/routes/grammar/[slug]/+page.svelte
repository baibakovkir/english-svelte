<svelte:head>
   <title>{data.post.title}</title>
</svelte:head>

<script>
	export let data;
	function contentToHtml(content) {
		let res = content
			.replaceAll(' /n ', '<br>')
			.replaceAll(' /im ', '<span class="initial__important">')
			.replaceAll(' im/ ', '</span>')
			.replaceAll(' /it ', '<i>')
			.replaceAll(' it/ ', '</i>');
		return res;
	}
	function createTable(table) {
  let res = table
    .replaceAll(' /col ', '<div class="initial__about__table__col">')
    .replaceAll(' col/ ', '</div>');

  const columns = res.match(/<div class="initial__about__table__col">.*?<\/div>/g);

  if (columns) {
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const words = column.match(/<div class="initial__about__table__col">(.*?)<\/div>/);
      if (words) {
        const wordList = words[1].split(' ');
        const rows = wordList.map(word => `<div class="initial__about__table__cell"><p class="initial__about__table__cell__element">${word
					.replaceAll('/20', ' ')
					.replaceAll('/0', '</br>')}</p></div>`).join('');
        res = res.replace(column, `<div class="initial__about__table__col">${rows}</div>`);
      }
    }
  }

  return res;
}

const content = [data.post.section1, data.post.section2];
content.forEach(section => {
	section.text1 ? section.text1 = contentToHtml(section.text1) : section.text1 = '';
	section.example1 = contentToHtml(section.example1);
	section.example2 = contentToHtml(section.example2);
	section.text2 = contentToHtml(section.text2);
	section.table1 = createTable(section.table1);
});
</script>

<section class="initial">
	<h1 class="initial__title">{data.post.title}</h1>
	<div class="initial__about">
		{#each content as content}
			{#if content.text1}
			<p class="initial__about__text">{@html content.text1}</p>
			{/if}
			{#if content.example1}
			<ul class="initial__about__list">
				<li class="initial__about__list__item">{@html content.example1}</li>
				<li class="initial__about__list__item">{@html content.example2}</li>
			</ul>
			{/if}
			<div class="initial__about__table">
				{@html data.post.section1.table1}
			</div>
			<p class="initial__about__text">{@html content.text2}</p>
		{/each}
	</div>
</section>