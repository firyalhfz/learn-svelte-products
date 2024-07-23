<script>
  import Product from './product.svelte';

  export let data;
  export let products = data.products;
  export let Component = data.Component;
</script>

<h1>{data.title}</h1>
{#each products as product}
  <div>
    <Component {product} />
  </div>
{/each}
