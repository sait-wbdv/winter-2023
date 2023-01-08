<script>
  import { page }  from '$app/stores';
  import { lessonsById } from "$lib/stores";
  import dayjs from 'dayjs';
  export let data;

  const lesson = $lessonsById[`${$page.params.code}/${$page.params.day}`];
</script>
<nav class="page-nav">
  <ul>
    {#if lesson.prev}
    <li><a href="/courses/{lesson.prev}">Prev</a></li>
    {:else}
    <li><span>Prev</span></li>
    {/if}
    <li>
      <time datetime={lesson.date}>{dayjs(lesson.date).format('dddd, MMM D')}</time>
    </li>
    {#if lesson.next}
    <li><a href="/courses/{lesson.next}">Next</a></li>
    {:else}
    <li><span>Next</span></li>
    {/if}  
  </ul>
</nav>


<h1>{lesson.title}</h1>


{#if lesson.status === 'draft'}
<p>This lesson has not been released.</p>
{:else}
{@html data.lessonContent}
{/if}

<style>
  nav ul {
    display: flex;
    justify-content: space-between;

    list-style: none;
    padding-left: 0;
  }
  nav a {
    display: block;
    background: lightgrey;
    padding: .5rem 1.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
  }
  nav a:hover {
    background: var(--lightAccent);
  }
  nav span {
    display: block;
    padding: 1rem 1.5rem;
  }
  nav time {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    padding: .5rem;
    color: grey;
  }
</style>