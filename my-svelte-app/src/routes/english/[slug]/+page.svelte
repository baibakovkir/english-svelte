<script>
  export let data;
</script>

<section class="english-course">
  <h1 class="english-course__title">{data.post.title}</h1>
  <div class="english-course__container">
    <div class="english-course__menu english-course__menu_left">
      <h2 class="english-course__subtitle">Необходимые знания:</h2>
      <div class="english-course__list-box">
        <ul class="english-course__list">
          {#each data.post.content as { name, slug }}
          <a class="english-course__link" href="/grammar/{slug}"><li class="english-course__item">{name}</li></a>
          {/each}
        </ul>
      </div>
    </div>
    <div class="english-course__menu english-course__menu_right">
      <p class="english-course__text">Выберите нужную тему. В каждой теме есть теория и практические задания. Также в темах будут задания на грамматику, аудирование, работа с текстом и видео.</p>
      {#if data.post.description}
        <p class="english-course__text">{data.post.description}</p>
      {/if}
    </div>
  </div>
</section>