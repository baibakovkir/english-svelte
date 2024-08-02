import { c as create_ssr_component, e as escape, f as each } from './ssr-DuKu5otS.js';

function contentToHtml(content) {
  let res = content.replaceAll(" /n ", "<br>").replaceAll(" /im ", '<span class="initial__important">').replaceAll(" im/ ", "</span>").replaceAll(" /it ", "<i>").replaceAll(" it/ ", "</i>");
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
  const content = [data.post.section1, data.post.section2];
  content.forEach((section) => {
    section.text1 ? section.text1 = contentToHtml(section.text1) : section.text1 = "";
    section.example1 = contentToHtml(section.example1);
    section.example2 = contentToHtml(section.example2);
    section.text2 = contentToHtml(section.text2);
    section.table1 = createTable(section.table1);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-zg4c03_START -->${$$result.title = `<title>${escape(data.post.title)}</title>`, ""}<!-- HEAD_svelte-zg4c03_END -->`, ""}  <section class="initial"><h1 class="initial__title">${escape(data.post.title)}</h1> <div class="initial__about">${each(content, (content2) => {
    return `${content2.text1 ? `<p class="initial__about__text"><!-- HTML_TAG_START -->${content2.text1}<!-- HTML_TAG_END --></p>` : ``} ${content2.example1 ? `<ul class="initial__about__list"><li class="initial__about__list__item"><!-- HTML_TAG_START -->${content2.example1}<!-- HTML_TAG_END --></li> <li class="initial__about__list__item"><!-- HTML_TAG_START -->${content2.example2}<!-- HTML_TAG_END --></li> </ul>` : ``} <div class="initial__about__table"><!-- HTML_TAG_START -->${data.post.section1.table1}<!-- HTML_TAG_END --></div> <p class="initial__about__text"><!-- HTML_TAG_START -->${content2.text2}<!-- HTML_TAG_END --></p>`;
  })}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DKQuU_Hg.js.map
