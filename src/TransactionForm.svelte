<script>
  import { transactions } from "./store";
  let text;
  let amount;
</script>

<div>
  <h4>Add new transaction</h4>
  <form on:submit|preventDefault={() => transactions.add({ text, amount })}>
    <div class="form-control">
      <label for="text">Text</label>
      <input
        placeholder="Enter text"
        name="text"
        bind:value={text}
        type="text"
        required
      />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount<br />(negative - expense, positive - income)</label
      >
      <input
        placeholder="Enter amount"
        bind:value={amount}
        name="amount"
        type="number"
        required
      />
    </div>
    <input type="submit" value="Add transaction" />
  </form>
</div>

<style>
  label {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  input {
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }
  input[type="submit"] {
    background: rgb(74, 74, 169);
    color: #fff;
    cursor: padding;
  }
</style>
