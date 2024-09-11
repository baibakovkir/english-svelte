<script>
  export let data;
  import Card from '../../../components/CardBackgroundShine.svelte';
</script>

<section class="menu">
  <h1 class="menu__title">{data.post.title}</h1>
  <div class="menu__box">
    <p class="menu__text">Выберите нужную тему. В каждой теме есть теория и практические задания. Также в темах будут задания на грамматику, аудирование, работа с текстом и видео.</p>
    {#if data.post.description}
      <p class="menu__text">{data.post.description}</p>
    {/if}
      <ul class="menu__menu">
      {#each data.post.content as { name, slug }}
      <a class="menu__menu__item__link" href="/grammar/{slug}">
        <Card title="{name}" description="{slug}" />
      </a>
      {/each}
    </ul>
  </div>
</section>