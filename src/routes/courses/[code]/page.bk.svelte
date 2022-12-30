<script>
  import { page } from '$app/stores'
</script>

<h1>{$page.params.code.toUpperCase().replace('-', ' ')}</h1>

<h2><code>$page</code> data</h2>
<pre>
  {JSON.stringify($page, null, 2)}
</pre>
