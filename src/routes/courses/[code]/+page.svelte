<script>
  import { page }  from '$app/stores';
  import { courses } from '$lib/stores';

  const course = $courses.find((item) => item.code === $page.params.code);

</script>
<h1>{course.title}</h1>
<aside>
  <nav class="secondary">
    <ul>
      <li><a href="{course.code}/assessments">Assessments</a></li>
    </ul>
  </nav>
</aside>
