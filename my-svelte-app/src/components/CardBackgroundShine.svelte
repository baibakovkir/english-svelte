<script>
  export let title;
  export let description;
</script>

<style>
  .shine-on-hover:hover {
    animation: shine 2s linear infinite; /* Apply the shine animation on hover */
  }
</style>

<div
  class="shine-on-hover inline-flex max-w-[350px] w-full h-[150px] items-center justify-center rounded-xl text-sm border border-black/10 bg-[linear-gradient(110deg,#e0e6eb,45%,#f8f8f8,55%,#e0e6eb)] bg-[length:200%_100%] px-4 py-5 transition-colors"
>
  <div class="flex flex-col gap-2">
    <h3 class="text-xl font-semibold text-neutral-700 text-center">{title}</h3>
    <p class="text-sm leading-[1.5] text-neutral-900 text-center">
      {description}
    </p>
  </div>
</div>