<script>
  export let name;
  export let link;
</script>
<div class="relative right-12 w-full min-h-10 mt-5 mb-5 flex items-center justify-center">
<a href="{link}">
  <div
    class="absolute after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
  >
    <span class="text-neutral-700">{name}</span>
  </div>
</a>
</div>
