<script>
  import { page }  from '$app/stores';
  import { lessonsById } from "$lib/stores";
  export let data;

  const lesson = $lessonsById[`${$page.params.code}/${$page.params.day}`];
</script>
<h1>{lesson.title}</h1>

{lesson.prev}
{lesson.next}

<time datetime={lesson.date}>{lesson.date}</time>
{#if lesson.status === 'draft'}
<p>This lesson has not been released.</p>
{:else}
{@html data.lessonContent}
{/if}