<script>
  import { invalidateAll } from '$app/navigation';
  export let data;

  function refresh() {
    // invalidate('http://localhost:4000/stocks');
    // invalidate('actively-trading');
    invalidateAll();
  }
</script>

<h1>Actively trading stocks</h1>

{#each data.stocks as stock}
  <h2>{stock.symbol} - {stock.price}</h2>
{/each}

<button on:click={refresh}>Refresh</button>
