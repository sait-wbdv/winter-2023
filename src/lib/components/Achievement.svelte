<script>
  export let status;
</script>

<section id="achievement" class='achievement'>
  <h2>Today's Achievement</h2>
  <p>Due today at 8pm in Brightspace.</p>

  {#if status === 'announced' || status === 'published'}
  <slot />
  {:else}
  <p>To be announced</p>
  {/if}
</section>

<style>
  section {
    margin: 3rem 0;
    padding: 2rem;
    
    border-radius: 1rem;
    background: #eee;
    box-shadow: inset 0 0 5px black;
  }

  h2 {
    margin-top: 0;
  }
</style>