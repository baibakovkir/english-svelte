<script>
  import "../app.css";
  import '$lib/styles/index.css';
  import logo from '$lib/assets/logo-cropped.png';
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
<header class="header">
  <nav class="header__nav nav_burger">
    <a class="header__link" href="/"><img class="header__logo" src="{logo}" alt="baibakovkir" /></a>
    <ul class="header__menu">
      <li class="header__menu__item"><a class="header__link" on:click={closeMenu} href="/grammar">Грамматика</a></li>
      <li class="header__menu__item"><a class="header__link" on:click={closeMenu} href="/text">Тексты</a></li>
      <li class="header__menu__item"><a class="header__link" on:click={closeMenu} href="/audio">Аудио</a></li>
      <li class="header__menu__item"><a class="header__link" on:click={closeMenu} href="/video">Видео</a></li>
      <button type="button" class="header__button header__button__close" on:click={closeMenu}></button>
    </ul>
    <button type="button" class="header__button header__button__burger" on:click={openMenu}></button>
  </nav>
</header>
<main class="main">
  <slot />
</main>

<Footer />