<script>
  import Sidebar from '../Sidebar.svelte';
  export let data;
</script>

<Sidebar>
  <ul>
    {#each data.summaries as { slug, title }}
      <li><a href="/audio/{slug}">{title}</a></li>
    {/each}
  </ul>
</Sidebar>

<section class="grammar">
  <h1>Аудирование</h1>
  <div class="initial__box">
    <p class="initial__text">Приветствуем вас на этой странице, где мы объясним вам преимущества разделения изучения грамматики на модули. Этот подход поможет вам лучше понять грамматику, ускорить процесс обучения и добиться успеха в изучении языка.</p>
    <p class="initial__text">Модули - это структурированные блоки информации, которые содержат основные аспекты грамматики языка. Каждый модуль посвящен определенной теме, такой как глаголы, прилагательные, местоимения и т. д. Разделение грамматики на модули делает обучение более организованным и доступным для понимания.</p>
    <ul class="grammar__menu">
      {#each data.summaries as { slug, title }}
        <li><a href="/audio/{slug}">{title}</a></li>
      {/each}
    </ul>
  </div>
</section>