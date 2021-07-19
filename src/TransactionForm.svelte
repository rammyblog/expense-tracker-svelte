<div>
  <h4>Add new transaction</h4>
  <form>
    <div class="form-control">
      <label for="text">Text</label>
      <input placeholder="Enter text" name="text" type="text" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount<br />(negative - expense, positive - income)</label
      >
      <input placeholder="Enter text" name="amount" type="number" />
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
    background: rgb(9, 9, 203);
    color: #fff;
    cursor: padding
  }
</style>
