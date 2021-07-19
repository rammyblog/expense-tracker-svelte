<script>
  import { transactions } from "./store";
</script>

<div>
  <h4>History</h4>
  {#each $transactions.transactions as item (item.id)}
    <div class={item.amount > 0 ? " money plus" : "money minus"}>
      {item.text}
      <span>${item.amount}</span>
      <button on:click={() => transactions.remove(item)} class="delete-btn"
        >X</button
      >
    </div>
  {/each}
</div>

<style>
  .money {
    padding: 0.4rem;
    margin: 20px 0;
    box-shadow: var(--box-shadow);
    background: #fff;
    color: #333;
    font-weight: 300;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .plus {
    border-right: 5px solid #2ecc71;
  }

  .minus {
    border-right: 5px solid #c0392b;
  }

  .delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .money:hover .delete-btn {
    opacity: 1;
  }
</style>
