import { writable, derived } from "svelte/store";

function createTransaction() {
  const { subscribe, set, update } = writable({ transactions: [] });

  return {
    subscribe,
    add: (transaction) =>
      update((store) => {
        transaction.id = Math.random();
        store.transactions = store.transactions.concat(transaction);
        return store;
      }),
    remove: (transaction) =>
      update((store) => {
        store.transactions = store.transactions.filter(
          (t) => t.id !== transaction.id
        );
        return store;
      }),
    reset: () => set({ transactions: [] }),
  };
}
export const transactions = createTransaction();

export const income = derived(transactions, ($transactions) =>
  $transactions.transactions.reduce((acc, transaction) => {
    if (transaction.amount >= 0) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0)
);

export const expense = derived(transactions, ($transactions) =>
  Math.abs(
    $transactions.transactions.reduce((acc, transaction) => {
      if (transaction.amount <= 0) {
        return acc + transaction.amount;
      }
      return acc;
    }, 0)
  )
);

export const total = derived(transactions, ($transactions) =>
  $transactions.transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  )
);
