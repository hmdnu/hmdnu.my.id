<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let delay = 0;
  export let className = "";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <div class={className} in:fly={{ y: 20, duration: 500, delay }}>
    <slot />
  </div>
{/if}
