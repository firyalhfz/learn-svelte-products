<script>
  export let data;
</script>

<span>Most Active stock - {data.mostActiveStock.symbol}</span>
<span>Top Gaining stock - {data.topGainingStock.symbol}</span>
<span>Top Performing stock - {data.topLosingStock.symbol}</span>

<slot />

<style>
  span {
    margin-right: 30px;
    font-size: 24px;
  }
</style>
