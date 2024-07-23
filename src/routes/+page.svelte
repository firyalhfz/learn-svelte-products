<script>
  import { goto, preloadData } from '$app/navigation';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/products" data-sveltekit-reload>Products</a>

<button
  on:mouseover={async () => {
    await preloadData('/products');
  }}
  on:focus={async () => {
    await preloadData('/products');
  }}
  on:click={() => {
    goto('/products');
  }}
>
  Go to Producst</button
>

<style>
  .tall {
    height: 100vh;
  }
</style>
