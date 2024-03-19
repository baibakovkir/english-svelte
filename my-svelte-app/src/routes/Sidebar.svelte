<script>
  import '../styles/sidebar.css';
  import { onMount } from 'svelte';
  import close from '$lib/assets/close-bold.svg';
  import menu from '$lib/assets/burger-menu.svg';

  let isOpen = false;

  function toggleSidebar() {
    isOpen = !isOpen;
  }

  onMount(() => {
    // Add any initialization logic here
  });
</script>

{#if isOpen}
  <div class="sidebar">
    <button class="sidebar__button sidebar__button_close" on:click={toggleSidebar}><img class="sidebar__close" src="{close}" alt="Close" /></button>
    <slot />
  </div>
{/if}

<button class="sidebar__button sidebar__button_open" on:click={toggleSidebar}><img class="sidebar__menu" src="{menu}" alt="Menu" /></button>