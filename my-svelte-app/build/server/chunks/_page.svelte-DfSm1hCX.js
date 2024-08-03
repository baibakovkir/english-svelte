import { c as create_ssr_component, e as escape, f as each, b as add_attribute } from './ssr-DuKu5otS.js';

function contentToHtml(content2) {
  let res = content2.replaceAll(" /n ", "<br>").replaceAll(" /im ", '<span class="initial__important">').replaceAll(" im/ ", "</span>").replaceAll(" /it ", "<i>").replaceAll(" it/ ", "</i>");
  return res;
}
function createTable(table) {
  let res = table.replaceAll(" /col ", '<div class="initial__about__table__col">').replaceAll(" col/ ", "</div>");
  const columns = res.match(/<div class="initial__about__table__col">.*?<\/div>/g);
  if (columns) {
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const words = column.match(/<div class="initial__about__table__col">(.*?)<\/div>/);
      if (words) {
        const wordList = words[1].split(" ");
        const rows = wordList.map((word) => `<div class="initial__about__table__cell"><p class="initial__about__table__cell__element">${word.replaceAll("/20", " ").replaceAll("/0", "</br>")}</p></div>`).join("");
        res = res.replace(column, `<div class="initial__about__table__col">${rows}</div>`);
      }
    }
  }
  return res;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const table1 = data.post.table1 ? createTable(data.post.table1) : "";
  const table2 = data.post.table2 ? createTable(data.post.table2) : "";
  const table3 = data.post.table3 ? createTable(data.post.table3) : "";
  const table4 = data.post.table4 ? createTable(data.post.table4) : "";
  const content = [
    {
      text1: data.post.section1?.text1 ? contentToHtml(data.post.section1.text1) : "",
      example1: data.post.section1?.example1 ? contentToHtml(data.post.section1.example1) : "",
      example2: data.post.section1?.example2 ? contentToHtml(data.post.section1.example2) : "",
      text2: data.post.section1?.text2 ? contentToHtml(data.post.section1.text2) : "",
      table: table1
    },
    {
      text1: data.post.section2?.text1 ? contentToHtml(data.post.section2.text1) : "",
      example1: data.post.section2?.example1 ? contentToHtml(data.post.section2.example1) : "",
      example2: data.post.section2?.example2 ? contentToHtml(data.post.section2.example2) : "",
      text2: data.post.section2?.text2 ? contentToHtml(data.post.section2.text2) : "",
      table: table2
    },
    {
      text1: data.post.section3?.text1 ? contentToHtml(data.post.section3.text1) : "",
      example1: data.post.section3?.example1 ? contentToHtml(data.post.section3.example1) : "",
      example2: data.post.section3?.example2 ? contentToHtml(data.post.section3.example2) : "",
      text2: data.post.section3?.text2 ? contentToHtml(data.post.section3.text2) : "",
      table: table3
    },
    {
      text1: data.post.section4?.text1 ? contentToHtml(data.post.section4.text1) : "",
      example1: data.post.section4?.example1 ? contentToHtml(data.post.section4.example1) : "",
      example2: data.post.section4?.example2 ? contentToHtml(data.post.section4.example2) : "",
      text2: data.post.section4?.text2 ? contentToHtml(data.post.section4.text2) : "",
      table: table4
    }
  ];
  data.post.tasks?.dragWords;
  let shuffleWords = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-zg4c03_START -->${$$result.title = `<title>${escape(data.post.title)}</title>`, ""}<!-- HEAD_svelte-zg4c03_END -->`, ""}  <section class="initial"><h1 class="initial__title">${escape(data.post.title)}</h1> <div class="initial__about">${each(content, (content2, i) => {
    return `<div class="initial__about__wrapper"><p class="initial__about__section-number">${escape(i + 1)}</p> ${content2?.text1 ? `<p class="initial__about__text"><!-- HTML_TAG_START -->${content2.text1}<!-- HTML_TAG_END --></p>` : ``} ${content2?.example1 ? `<ul class="initial__about__list"><li class="initial__about__list__item"><!-- HTML_TAG_START -->${content2.example1}<!-- HTML_TAG_END --></li> <li class="initial__about__list__item"><!-- HTML_TAG_START -->${content2.example2}<!-- HTML_TAG_END --></li> </ul>` : ``} ${content2?.table ? `<div class="initial__about__table"><!-- HTML_TAG_START -->${content2?.table}<!-- HTML_TAG_END --> </div>` : ``} <p class="initial__about__text"><!-- HTML_TAG_START -->${content2?.text2}<!-- HTML_TAG_END --></p> </div>`;
  })}</div> <div class="initial__tasks"><h2 class="initial__tasks__title" data-svelte-h="svelte-1t2dohg">Задания</h2> <div class="initial__tasks__drag-words">${shuffleWords?.length ? `${each(shuffleWords, (phrase, i) => {
    return `<div class="initial__tasks__drag-words__item"${add_attribute("data-id", i, 0)}>${each(phrase, (word) => {
      return `<div draggable="true"${add_attribute("data-id", word, 0)} role="link" tabindex="0" class="initial__tasks__drag-words__item__word" aria-grabbed="false">${escape(word)} 
							</div>`;
    })} </div>`;
  })}` : ``}</div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DfSm1hCX.js.map
