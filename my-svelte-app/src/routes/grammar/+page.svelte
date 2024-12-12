<script>
  import Sidebar from '../Sidebar.svelte';
  export let data;
  import Card from '../../components/CardBackgroundShine.svelte';
</script>

<Sidebar>
  <ul>
    {#each data.summaries as { slug, title }}
      <li><a href="/grammar/{slug}">{title}</a></li>
    {/each}
  </ul>
</Sidebar>

<section class="menu">
  <h1 class="menu__title">Грамматика</h1>
  <div class="menu__box">
    <ul class="menu__menu">
      {#each data.summaries as { title, slug }}
      <a class="menu__menu__item__link" href="/grammar/{slug}">
        <Card title="{title}" description="{slug}" />
      </a>
      {/each}
    </ul>
  </div>
</section>