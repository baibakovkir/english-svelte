<script>
  export let data;
</script>

<section class="english__course">
  <h1 class="english__course__title">{data.post.title}</h1>
  <div class="english__course__container">
    <ul>
      {#each data.post.content as { name, slug }}
        <li><a href="/english/{slug}">{name}</a></li>
      {/each}
    </ul>
  </div>
</section>