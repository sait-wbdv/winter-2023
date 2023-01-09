<script>
  import { page }  from '$app/stores';
  import { courses } from '$lib/stores';
  import dayjs from 'dayjs';

  const course = $courses.find((item) => item.code === $page.params.code);
</script>
<h1>{course.title}</h1>
<h2>Lesson Schedule</h2>
<ul>
  {#each course.days as date, index}
    <li><a href="{course.code}/day-{index + 1}">Day {index + 1} - {dayjs(date).format('MMMM D')}</a></li>
  {/each}
</ul>