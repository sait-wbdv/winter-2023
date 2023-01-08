<script>
  export let status;
</script>

<section class='lab-time'>
  {#if status === 'announced' || status === 'published'}
  <slot />
  {/if}
</section>