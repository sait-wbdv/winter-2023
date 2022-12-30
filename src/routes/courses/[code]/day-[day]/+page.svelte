<script>
  import { page }  from '$app/stores';
  import { lessonsById } from "$lib/stores";
  export let data;

  const lesson = $lessonsById[`${$page.params.code}/${$page.params.day}`];
</script>
<h1>{lesson.title}</h1>
<!-- <time datetime={data.meta.date}>{data.meta.date}</time> -->
{#if lesson.status === 'draft'}
<p>This lesson has not been released.</p>
{:else}
{@html data.lessonContent}
{/if}