<script>
  import Dashboard from "./Dashboard.svelte";
  import History from "./History.svelte";
  import TransactionForm from "./TransactionForm.svelte";
  import { total } from "./store";
</script>

<main>
  <h1>Expense Tracker</h1>
  <div class="balance">
    <h4>Your Balance</h4>
    <p>${$total.toFixed(2)}</p>
  </div>
  <Dashboard />
  <History />
  <TransactionForm />
</main>

<style>
  main {
    /* text-align: center; */
    padding: 1em;
    margin: 30px auto;
    width: 350px;
  }

  h1 {
    text-transform: uppercase;
  }
  .balance p {
    font-size: 1.5rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
