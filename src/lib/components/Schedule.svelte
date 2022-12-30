<script>
  import { schedule } from '$lib/stores.js';
</script>

{#each $schedule as week, index}
<section class="week">
  <h2>Week {index + 1}</h2>
  {#each week as day}
    {#if day.type === 'lesson' && day.status != 'draft'}
    <a href="courses/{day.code}/day-{day.day}">
      <article>
        <h3 class="{day.code}">{day.codeLabel} - {day.title}</h3>
        <time>{day.date}</time>
      </article>
    </a>
    {:else if day.status === 'draft'}
    <article>
      <h3 class="{day.code} unpublished">{day.codeLabel} - {day.title}</h3>
      <time>{day.date}</time>
    </article>
    {:else}
    <article>
      <h3 class="holiday">{day.label}</h3>
      <time>{day.date}</time>
    </article>
  {/if}
  {/each}
</section>
{/each}
