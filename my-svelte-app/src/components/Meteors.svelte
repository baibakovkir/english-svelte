<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  export let number = 10;
  let meteorStyles: any = [];
  let changeMeteors = (num: number) => {
    meteorStyles = [];
    const styles = [...new Array(num)].map(() => ({
      top: -20,
      left: Math.floor(Math.random() * 700) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2.9) + "s",
    }));
    meteorStyles = styles;
  };
  onMount(() => {
    changeMeteors(number);
  });
  //   $: changeMeteors(number);
</script>

{#each meteorStyles as style, idx}
  <span
    id="meteor-{idx+1}"
    class={cn(
      "pointer-events-none absolute left-1/2 top-1/2 size-[2.4px] rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
    )}
    style="top: {style.top}px; left: {style.left}; animation-delay: {style.animationDelay}; animation-duration: {style.animationDuration};"
  >
  <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="5" height="5" viewBox="0 0 32 32"><path fill="#A8B0BC" d="M21.415 12H28v-2h-4.585L28 5.415L26.586 4L22 8.587V4h-2v6.587L18.587 12H17V8h-2v4h-1.587L12 10.587V4h-2v4.587L5.414 4L4 5.415L8.585 10H4v2h6.585L12 13.415V15H8v2h4v1.587L10.587 20H4v2h4.587L4 26.586l1.414 1.415L10 23.415V28h2v-6.585L13.415 20H15v4h2v-4h1.585L20 21.415V28h2v-4.585l4.585 4.586L28 26.586L23.413 22H28v-2h-6.587L20 18.587V17h4v-2h-4v-1.585ZM18 18h-4v-4h4Z"/></svg>
    <!-- Meteor Tail  -->
    <div
      class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-indigo-800 via-blue-600/30 to-transparent"
    />
  </span>
{/each}
