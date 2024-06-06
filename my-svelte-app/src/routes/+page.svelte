<script>
  import englishColor from '$lib/assets/english.avif';
  import spanishColor from '$lib/assets/spanishFlag.avif';
  import codingColor from '$lib/assets/programming.avif';
  import circles from '$lib/assets/circles.svg';
  import { form, field } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';
  

  let name = '';
  let message = '';
  
  function sendMessage(event) {
    event.preventDefault();
    const newMessage = {
      name,
      message
    };
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=baibakovkir@yandex.ru&su=${encodeURIComponent(newMessage.name)}&body=${encodeURIComponent(newMessage.message)}`;
    window.open(url, '_blank');

    name = '';
    message = '';
  }
</script>
<section class="initial">
<img class="initial__img" src="{circles}" alt="Круги">
<h1 class="initial__title">
  База знаний
</h1>
<p class="initial__text">База знаний - это платформа для изучения всего на свете!</p>
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
    <form class="spheres__form" on:submit|preventDefault={sendMessage}>
      <input class="spheres__input spheres__input_name" type="text" bind:value={name} placeholder="Ваше имя">
      <textarea class="spheres__input spheres__input_message" rows="5" bind:value={message} placeholder="Ваше сообщение"></textarea>
      <button class="spheres__button" type="submit">Отправить</button>
    </form>
  <p class="spheres__text">Нравится проект? Расскажи о нас!</p>
</section>
