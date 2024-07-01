<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    import englishOGE from '$lib/assets/english-oge.jpg';
    import englishTalking from '$lib/assets/english-talking.jpg';
    import englishA1 from '$lib/assets/english-a1.avif';
    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>

<section class="english">
    <div class="english__container">
        <h1 class="english__title">Курсы по английскому языку</h1>
        <div class="english__grid">
            <div class="english__box">
              <a href="/development" class="english__link">
              <img src="{englishOGE}" alt="ОГЭ" class="english__box__img">
              <p class="english__box__text english__box__text_yellow">ОГЭ</p>
              </a>
            </div>
            <div class="english__box">
              <a href="/development" class="english__link">
              <img src="{englishTalking}" alt="Испанский" class="english__box__img">
              <p class="english__box__text english__box__text_yellow">Для разговора</p>
              </a>
            </div>
            <div class="english__box">
              <a href="/development" class="english__link">
              <div class="english__box__center-text">
                <p class="english__box__big-text">А-1</p>
              </div>
              <p class="english__box__text english__box__text_yellow">Начальный уровень</p>
              </a>
            </div>
          </div>
    </div>
</section>
