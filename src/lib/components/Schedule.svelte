<script>
  import { schedule } from '$lib/stores.js';
</script>

{#each $schedule as week, index}
<section class="week">
  <h2>Week {index + 1}</h2>
  {#each week as day}
    {#if day.type === 'lesson' && day.status != 'draft'}
    <time>{day.date}</time>
    <a href="courses/{day.code}/day-{day.day}">
      <article class="{day.code} lesson">
        <p>{day.codeLabel} - Day {day.day}</p>
        <h3>{day.title}</h3>
      </article>
    </a>
    {:else if day.status === 'draft'}
    <time>{day.date}</time>
    <article class="{day.code} unpublished">
      <p>{day.codeLabel} - Day {day.day}</p>
      <h3 class="{day.code}">{day.codeLabel} - {day.title}</h3>
    </article>
    {:else}
    <time>{day.date}</time>
    <article class="holiday">
      <h3 class="holiday">{day.label}</h3>
    </article>
  {/if}
  {/each}
</section>
{/each}

<style>
  a {
    text-decoration: none;
  }

  article {
    color: hsl(var(--hue), 20%, 10%);
    background: hsl(var(--hue), 25%, 93%);
    border: 2px solid hsl(var(--hue), 20%, 50%);
    margin: 1rem 2rem;
    padding: 1rem;
    border-radius: .5rem;
  }

  article h3 {
    margin: 1rem 0;
  }

  article.holiday {
    color: black;
    background: #ddd;
  }

  article.cpnt-264, article.cpln-240 {
    color: hsl(0, 0%, 10%);
    background: hsl(0, 0%, 90%);
    border: 2px solid hsl(0, 0%, 50%);
  }

  article.dsgn-270 {
    --hue: 270;
  }

  article.cpnt-201 {
    --hue: 30;
  }

  article.cpnt-260 {
    --hue: 90;
  }

  article.cpnt-262 {
    --hue: 180;
  }

  article.cpnt-200 {
    --hue: 230;
  }

  article.cpnt-265 {
    --hue: 360;
  }

</style>