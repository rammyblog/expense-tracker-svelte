<div class="dashboard">
  <div class="dashboard-income">
    <h4>Income</h4>
    <p class="money plus">+$0.00</p>
  </div>
  <div class="dashboard-expense">
    <h4>Expense</h4>
    <p class="money minus">-$0.00</p>
  </div>
</div>

<style>
  .dashboard {
    background-color: #fff;
    box-shadow: var(--box-shadow);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  .dashboard-income {
    border-right: 1px solid #dedede;
  }
  .dashboard-income,
  .dashboard-expense {
    flex: 1 1;
    text-align: center;
  }

  .money {
    font-size: 1rem;
    text-align: center;
  }
  .plus {
    color: #2ecc71;
  }

  .minus {
    color: #c0392b;
  }
</style>
