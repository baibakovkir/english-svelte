<svelte:head>
   <title>{data.post.title}</title>
</svelte:head>

<script lang="ts">
import { shuffle } from 'lodash-es';
    import { onMount } from 'svelte';
export let data;
function contentToHtml(content: string) {
	let res = content
		.replaceAll(' /n ', '<br>')
		.replaceAll(' /im ', '<span class="initial__important">')
		.replaceAll(' im/ ', '</span>')
		.replaceAll(' /it ', '<i>')
		.replaceAll(' it/ ', '</i>');
	return res;
}
function createTable(table: string) {
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

const table1 = data.post.table1 ? createTable(data.post.table1) : '';
const table2 = data.post.table2 ? createTable(data.post.table2) : '';
const table3 = data.post.table3 ? createTable(data.post.table3) : '';
const table4 = data.post.table4 ? createTable(data.post.table4) : '';

const content = [
	{
		text1: data.post.section1?.text1 ? contentToHtml(data.post.section1.text1) : '',
		example1: data.post.section1?.example1 ? contentToHtml(data.post.section1.example1) : '',
		example2: data.post.section1?.example2 ? contentToHtml(data.post.section1.example2) : '',
		text2: data.post.section1?.text2 ? contentToHtml(data.post.section1.text2) : '',
		table: table1
	},
	{
		text1: data.post.section2?.text1 ? contentToHtml(data.post.section2.text1) : '',
		example1: data.post.section2?.example1 ? contentToHtml(data.post.section2.example1) : '',
		example2: data.post.section2?.example2 ? contentToHtml(data.post.section2.example2) : '',
		text2: data.post.section2?.text2 ? contentToHtml(data.post.section2.text2) : '',
		table: table2
	},
	{
		text1: data.post.section3?.text1 ? contentToHtml(data.post.section3.text1) : '',
		example1: data.post.section3?.example1 ? contentToHtml(data.post.section3.example1) : '',
		example2: data.post.section3?.example2 ? contentToHtml(data.post.section3.example2) : '',
		text2: data.post.section3?.text2 ? contentToHtml(data.post.section3.text2) : '',
		table: table3
	},
	{
		text1: data.post.section4?.text1 ? contentToHtml(data.post.section4.text1) : '',
		example1: data.post.section4?.example1 ? contentToHtml(data.post.section4.example1) : '',
		example2: data.post.section4?.example2 ? contentToHtml(data.post.section4.example2) : '',
		text2: data.post.section4?.text2 ? contentToHtml(data.post.section4.text2) : '',
		table: table4
	}
];

//tasks logic

const initialWords = data.post.tasks?.dragWords;
let shuffleWords = [] as string[][];

function handleDragStart(event: DragEvent) {
  const target = event.target as HTMLElement;
  
  // Set the data being dragged
  event.dataTransfer?.setData('text/plain', target.dataset.id ? target.dataset.id : '');

  // Apply additional styling to the dragged element
  target.style.opacity = '0.5';
}


function handleDragOver(event: DragEvent) {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const draggedElementId = event.dataTransfer?.getData('text/plain');
  const container = target.closest('.initial__tasks__drag-words__item');

  if (draggedElementId && container && container.contains(target)) {
    const draggedDiv = document.querySelector(`[data-id="${draggedElementId}"]`) as HTMLElement;
    const draggedElementContainer = draggedDiv?.closest('.initial__tasks__drag-words__item');

    if (draggedDiv && draggedElementContainer === container && target.nodeName === 'DIV' && target !== draggedDiv) {
      const rect = target.getBoundingClientRect();
      const targetCenter = rect.top + (rect.height / 2);

      if (event.clientY < targetCenter) {
        target.insertAdjacentElement('beforebegin', draggedDiv);
      } else {
        target.insertAdjacentElement('afterend', draggedDiv);
      }
    }
  }
}

function handleDragEnd(event: DragEvent) {
  const target = event.target as HTMLElement;
  target.style.opacity = '1';
}

function handleDrop(event: DragEvent) {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const draggedElementId = event.dataTransfer?.getData('text/plain');
  
  if (draggedElementId) {
    const draggedDiv = document.querySelector(`[data-id="${draggedElementId}"]`) as HTMLElement;

    if (target.nodeName === 'DIV' && draggedDiv && target !== draggedDiv) {
      const rect = target.getBoundingClientRect();
      const targetCenter = rect.top + (rect.height / 2);

      if (event.clientY < targetCenter) {
        target.insertAdjacentElement('beforebegin', draggedDiv);
      } else {
        target.insertAdjacentElement('afterend', draggedDiv);
      }
    }
  }
}

onMount(() => {
	if (initialWords?.length) {
		shuffleWords = initialWords?.map(phrase => {
			let shufflePhrase = shuffle(phrase.split(' '));
			 return shufflePhrase;
		});
	}
	const shuffleWordsRes = shuffleWords.map(arr => arr.join(' ')) as string[];

	const wordsElements = document.querySelectorAll('.initial__tasks__drag-words__item');
	let phrase = '';
	function getInnerText(element: HTMLElement) {
		phrase = '';
		element.childNodes.forEach(item => {
			if (item.nodeType === Node.TEXT_NODE) {
				phrase += item.textContent;
			}
		});
		element.innerText = phrase;
		if (initialWords?.includes(phrase)) {
			element.classList.add('initial__tasks__drag-words__item_active');
		}
	}
	wordsElements.forEach(item => {
		item.addEventListener('drop', getInnerText);
	});

	console.log(phrase);
	console.log(shuffleWordsRes);
	console.log(initialWords);
});


</script>

<section class="initial">
	<h1 class="initial__title">{data.post.title}</h1>
	<div class="initial__about">
		{#each content as content, i}
		<div class="initial__about__wrapper">
			<p class="initial__about__section-number">{i + 1}</p>
			{#if content?.text1}
			<p class="initial__about__text">{@html content.text1}</p>
			{/if}
			{#if content?.example1}
			<ul class="initial__about__list">
				<li class="initial__about__list__item">{@html content.example1}</li>
				<li class="initial__about__list__item">{@html content.example2}</li>
			</ul>
			{/if}
			{#if content?.table}
			<div class="initial__about__table">
				{@html content?.table}
			</div>
			{/if}
			<p class="initial__about__text">{@html content?.text2}</p>
		</div>
		{/each}
	</div>
	<div class="initial__tasks">
		<h2 class="initial__tasks__title">Задания</h2>
		<div class="initial__tasks__drag-words">
			{#if shuffleWords?.length}
				{#each shuffleWords as phrase, i}
					<div class="initial__tasks__drag-words__item" data-id={i}>
						{#each phrase as word}
							<div 
								draggable="true"
								data-id={word}
								on:dragover={handleDragOver}
								on:dragend={handleDragEnd}
								on:dragstart={handleDragStart}
								on:drop={handleDrop}
								role="link"
								tabindex="0"
								class="initial__tasks__drag-words__item__word"
								aria-grabbed="false"
							>
								{word}&nbsp;
							</div>
						{/each}
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>