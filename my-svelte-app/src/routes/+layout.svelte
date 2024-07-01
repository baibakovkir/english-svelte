<script>
  import '$lib/styles/index.css';
  import logo from '$lib/assets/logo.png';
  import Footer from './Footer.svelte';


  function openMenu() {
    const menu = document.querySelector('.header__menu');
    menu?.classList.add('header__menu_active');
    // if opened want to disaable scroll
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    const menu = document.querySelector('.header__menu');
    menu?.classList.remove('header__menu_active');
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
  }

</script>
<div class="header">
  <nav class="header__nav nav_burger">
    <a class="header__link" href="/"><img class="header__logo" src="{logo}" alt="ENG" width="30px" height="30px" /></a>
    <ul class="header__menu">
      <li class="header__menu__item"><a class="header__link" href="/grammar">Грамматика</a></li>
      <li class="header__menu__item"><a class="header__link" href="/text">Тексты</a></li>
      <li class="header__menu__item"><a class="header__link" href="/audio">Аудио</a></li>
      <li class="header__menu__item"><a class="header__link" href="/video">Видео</a></li>
      <button type="button" class="header__button header__button__close" on:click={closeMenu}></button>
    </ul>
    <button type="button" class="header__button header__button__burger" on:click={openMenu}></button>
  </nav>
</div>

<slot />

<Footer />