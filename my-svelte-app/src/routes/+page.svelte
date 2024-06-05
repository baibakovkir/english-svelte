<script>
  import englishColor from '$lib/assets/english.avif';
  import spanishColor from '$lib/assets/spanishFlag.avif';
  import codingColor from '$lib/assets/programming.avif';

    
  import { form, field } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';

  let name = field('name', '', [required()]);
  let message = field('message', '', [required()]);
  const myForm = form(name, message);
</script>
<section class="initial">
<h1 class="initial__title">
  База знаний
</h1>
<p class="initial__text">База знаний - это платформа для изучения всего на свете</p>
<p class="initial__text">На данный момент доступны курсы:</p>
<div class="initial__grid">
  <div class="initial__box">
    <img src="{englishColor}" alt="Английский" class="initial__box__img">
    <p class="initial__box__text initial__box__text_yellow">Английский язык</p>
  </div>
  <div class="initial__box">
    <img src="{spanishColor}" alt="Испанский" class="initial__box__img">
    <p class="initial__box__text initial__box__text_yellow">Испанский язык</p>
  </div>
  <div class="initial__box">
    <img src="{codingColor}" alt="Программирование" class="initial__box__img">
    <p class="initial__box__text initial__box__text_yellow">Программирование</p>
  </div>
</div>
</section>
<section class="spheres">
  <h2 class="spheres__text">Связаться с разработчиками</h2>
    <input class="spheres__input" type="text" bind:value={name} placeholder="Ваше имя">
    <input class="spheres__input" type="text" bind:value={message} placeholder="Ваше сообщение">
    <button class="spheres__button">Отправить</button>
</section>
