<svelte:head>
   <title>{data.post.title}</title>
</svelte:head>

<script>
import { shuffle } from 'lodash-es';
import { onMount } from 'svelte';
import LinkAnimated from "../../../components/LinkAnimated.svelte";
import TextTitle from '../../../components/TextHeaderShine.svelte';
export let data;

let selectedDiv = null;

function swapDivs(clickedDiv) {
		if (selectedDiv && selectedDiv.parentElement === clickedDiv.parentElement && selectedDiv !== clickedDiv) {
				const rect1 = selectedDiv.getBoundingClientRect();
				const rect2 = clickedDiv.getBoundingClientRect();
				const clickedDivX = rect2.left + rect2.width / 2;
				clickedDivX > rect1.left + rect1.width / 2
						? clickedDiv.insertAdjacentElement('afterend', selectedDiv)
						: clickedDiv.insertAdjacentElement('beforebegin', selectedDiv);

				selectedDiv = null;
				clickedDiv.blur();

				let phrase = clickedDiv?.parentNode.innerText;
				phrase = phrase.replace(/(\r\n|\n|\r)/gm, " ");
				phrase = phrase.trim();
				console.log(1)
				if (initialWords?.includes(phrase)) {
						clickedDiv.parentNode.classList.add('initial__tasks__drag-words__item_success');
				}
		} else if (selectedDiv && selectedDiv == clickedDiv) {
			selectedDiv = null;
			clickedDiv.blur();
		} 
		else {
			console.log(3)
        selectedDiv = clickedDiv;
    }
}

function handleDivClick(event) {
	const clickedDiv = event.target;
	swapDivs(clickedDiv);
}

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
let shuffleWords = [];




//correctForm module
const correctForm = data.post.tasks?.correctForm;
const sentences = correctForm?.sentences;
const renderSentenses = sentences.map((sentence, i) => sentence.replace('/input', '<input type="text" class="initial__tasks__correct-form__input" name="input' + i + '" id="input' + i + '"></input>'));
const answers = correctForm?.answers;


onMount(() => {
	if (initialWords?.length) {
		shuffleWords = initialWords?.map(phrase => {
			let shufflePhrase = shuffle(phrase.split(' '));
			 return shufflePhrase;
		});
	}
	const shuffleWordsRes = shuffleWords.map(arr => arr.join(' '));

	const wordsElements = document.querySelectorAll('.initial__tasks__drag-words__item');
	let phrase = '';
	function getInnerText(element) {
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
		item.addEventListener('click', getInnerText);
	});

	
	const inputsAnswers = document.querySelectorAll('.initial__tasks__correct-form__input');

	inputsAnswers.forEach((input, i) => {
		input.addEventListener('input', () => {
			const answerOptions = answers[i].split('/');
			if (answerOptions.includes(input.value)) {
				input.classList.add('initial__tasks__correct-form__input_success');
			} else {
				input.classList.remove('initial__tasks__correct-form__input_success');
			}
		});
	});

});


</script>

<section class="initial">
	<LinkAnimated name="Вернуться назад" link="javascript:history.back()"/>
	<TextTitle title="{data.post.title}"/>
		<div class="initial__about">
		{#each content as content, i}
		<div class="initial__about__wrapper">
			<p class="initial__about__section-number">{i + 1}</p>
			{#if content?.text1}
			<p class="initial__about__text">{@html content.text1}</p>
			{/if}
			{#if content?.example1}
			<ul class="initial__about__list">
				{#if content?.example1}
				<li class="initial__about__list__item">{@html content.example1}</li>
				{/if}
				{#if content?.example2}
				<li class="initial__about__list__item">{@html content.example2}</li>
				{/if}
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
		{#if shuffleWords?.length}
			<div class="initial__tasks__drag-words">
				<h3 class="initial__tasks__drag-words__title">Поставьте слова в правильное место в предложении</h3>
				<p class="initial__tasks__drag-words__text">Нажмите на слово и затем нажмите на нужное место в предложении</p>
				{#each shuffleWords as phrase, i}
					<div class="initial__tasks__drag-words__item" data-id={i}>
						{#each phrase as word, j}
							<button 
								data-id={i + '-' + j}
								on:click={handleDivClick}
								role="link"
								tabindex="0"
								class="initial__tasks__drag-words__item__word"
							>{word}</button>
						{/each}
					</div>
				{/each}
			</div>
		{/if}
		{#if correctForm}
			<div class="initial__tasks__correct-form">
				<h3 class="initial__tasks__correct-form__title">Закончите предложения. Используйте слова в нужной форме.</h3>
				<div class ="initial__tasks__correct-form__boxes">
					<div class="initial__tasks__correct-form__box">
						{#each correctForm?.box1?.split(' ') as word}
							<p class="initial__tasks__correct-form__box__item">{word}</p>
						{/each}
					</div>
					<div class="initial__tasks__correct-form__box">
						{#each correctForm?.box2?.split(' ') as word}
							<p class="initial__tasks__correct-form__box__item">{word}</p>
						{/each}
					</div>
				</div>
				<div class="initial__tasks__correct-form__sentences">
					{#each renderSentenses as sentence, i}
						<div class="initial__tasks__correct-form__sentence">{i+1}. {@html sentence}</div>
					{/each}
				</div>
			</div>
		{/if}
		<LinkAnimated name="Назад" link="javascript:history.back()"/>
	</div>
</section>
