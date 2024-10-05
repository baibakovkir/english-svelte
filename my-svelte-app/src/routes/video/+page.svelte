<script>
  import Sidebar from '../Sidebar.svelte';
  export let data;
  import Card from '../../components/CardBackgroundShine.svelte';
</script>

<Sidebar>
  <ul>
    {#each data.summaries as { slug, title }}
      <li><a href="/video/{slug}">{title}</a></li>
    {/each}
  </ul>
</Sidebar>

<section class="menu">
  <h1 class="menu__title">Видео</h1>
  <div class="menu__box">
    <p class="menu__text">Приветствуем вас на этой странице, где мы объясним вам преимущества разделения изучения грамматики на модули. Этот подход поможет вам лучше понять грамматику, ускорить процесс обучения и добиться успеха в изучении языка.</p>
    <p class="menu__text">Модули - это структурированные блоки информации, которые содержат основные аспекты грамматики языка. Каждый модуль посвящен определенной теме, такой как глаголы, прилагательные, местоимения и т. д. Разделение грамматики на модули делает обучение более организованным и доступным для понимания.</p>
    <ul class="menu__menu">
      {#each data.summaries as { title, slug }}
      <a class="menu__menu__item__link" href="/grammar/{slug}">
        <Card title="{title}" description="{slug}" />
      </a>
      {/each}
    </ul>
  </div>
</section>