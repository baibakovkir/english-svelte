<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    export let data;
    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>

<section class="english">
    <div class="english__container">
        <h1 class="english__title">Курсы по английскому языку</h1>
        <div class="english__grid">
          {#each data.summaries as { slug, title, img }}
            <div class="english__box">
              <a href="/english/{slug}" class="english__link">
              <img src="{img}" alt="{title}" class="english__box__img">
              <p class="english__box__text english__box__text_yellow">{title}</p>
              </a>
            </div>
          {/each}
          </div>
          <!-- <div class="english__box">
            <a href="/development" class="english__link">
            <div class="english__box__center-text">
              <p class="english__box__big-text">А-1</p>
            </div>
            <p class="english__box__text english__box__text_yellow">Начальный уровень</p>
            </a>
          </div>
        </div> -->
    </div>
</section>
