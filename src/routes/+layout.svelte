<script>
  export let data;
  const { username } = data;
</script>

<div>Welcome, {username}</div>
<slot />
