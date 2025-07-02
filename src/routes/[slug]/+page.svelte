<script>
  export let data;
</script>

<svelte:head>
  <title>{data.city.name} — {data.city.keyword} | Heynia</title>
  <meta name="description" content={`Discover the best ${data.city.keyword} to streamline your dental practice and grow patient trust in ${data.city.name}.`} />
</svelte:head>
<h1>Heynia in {data.city.name}</h1>
<p>Heynia offers {data.city.keyword} to help dentists in {data.city.name} automate workflows, improve patient experience, and boost revenue. Discover how Heynia can transform your dental practice today.</p>

  <title>{data.city.name} Dental Management Software | Heynia</title>
  <meta name="description" content="Grow your dental clinic in {data.city.name} with Heynia — advanced AI-powered software to automate scheduling, manage patient records, and improve patient satisfaction. Start a 14-day free trial today." />
</svelte:head>

<h1>Heynia in {data.city.name}</h1>
<p>Run and grow your dental practice in {data.city.name} with Heynia’s AI dental software. Automate your operations, attract new patients, and simplify your daily tasks — all in one powerful platform.</p>

<ul>
  <li>Automated appointment scheduling</li>
  <li>Advanced patient record management</li>
  <li>AI-driven marketing tools</li>
  <li>Real-time analytics and reporting</li>
</ul>

<a href="/signup" style="margin-right: 10px;">Start a 14-day trial</a>
<a href="/signup">Get started now</a>

