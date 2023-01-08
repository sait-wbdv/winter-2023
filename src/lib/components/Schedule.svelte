<script>
  import { schedule } from '$lib/stores.js';
  import dayjs from 'dayjs';
</script>

{#each $schedule as week, index}
<section class="week">
  <h2 id="week-{index + 1}">Week {index + 1}</h2>
  {#each week as day}
    {#if day.type === 'lesson' && day.status != 'draft'}
    <time>{dayjs(day.date).format('dddd, MMM D')}</time>
    <a href="courses/{day.code}/day-{day.day}">
      <article class="{day.code} lesson">
        <p>{day.codeLabel} - Day {day.day}</p>
        <h3>{day.title}</h3>
      </article>
    </a>
    {:else if day.status === 'draft'}
    <time>{dayjs(day.date).format('dddd, MMM D')}</time>
    <article class="{day.code} unpublished">
      <p>{day.codeLabel} - Day {day.day}</p>
      <h3 class="{day.code}">{day.codeLabel} - {day.title}</h3>
    </article>
    {:else}
    <time>{dayjs(day.date).format('dddd, MMM D')}</time>
    <article class="holiday">
      <h3 class="holiday">{day.label}</h3>
    </article>
  {/if}
  {/each}
</section>
{/each}

<style>

  time {
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
  }

  article {
    color: hsl(var(--hue), 20%, 10%);
    background: hsl(var(--hue), 25%, 93%);
    border: 3px solid hsl(var(--hue), 20%, 50%);
    margin: 1rem 2rem;
    padding: 1rem;
    border-radius: .5rem;

    box-shadow: 0px 1px 1px rgba(0,0,0,0.05),
    0px 2px 2px rgba(0,0,0,0.05),
    0px 4px 4px rgba(0,0,0,0.05),
    0px 8px 8px rgba(0,0,0,0.05);
  }

  a:hover article {
    border: 3px solid hsl(var(--hue), 50%, 50%);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
    0px 2px 2px rgba(0,0,0,0.1),
    0px 4px 4px rgba(0,0,0,0.1),
    0px 8px 8px rgba(0,0,0,0.1);
  }

  article h3 {
    margin: 1rem 0;
  }

  article.holiday, article.unpublished {
    color: black;
    background: #ddd;
    box-shadow: initial;
  }

  article.cpnt-264, article.cpln-240 {
    color: hsl(0, 0%, 10%);
    background: hsl(0, 0%, 90%);
    border: 3px solid hsl(0, 0%, 50%);
  }

  a:hover article.cpnt-264, a:hover article.cpln-240 {
    border: 3px solid hsl(0, 0%, 20%);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
    0px 2px 2px rgba(0,0,0,0.1),
    0px 4px 4px rgba(0,0,0,0.1),
    0px 8px 8px rgba(0,0,0,0.1);
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