<script>
  import logo from '$lib/assets/logo.png';
  import Footer from './Footer.svelte';
</script>
<nav>
	<a href="/"><img class="header__logo" src="{logo}" alt="ENG" width="30px" height="30px" /></a>
	<a href="/grammar">Грамматика</a>
  <a href="/blog">Тексты</a>
  <a href="/blog">Аудио</a>
  <a href="/blog">Видео</a>
</nav>

<slot />

<Footer />