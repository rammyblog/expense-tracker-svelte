import { writable } from "svelte/store";

function createTransaction() {
  const { subscribe, set, update } = writable({ transactions: [] });

  return {
    subscribe,
    add: (transaction) =>
      update((store) => {
        console.log(store);
        transaction.id = store.transactions.length + 1;
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
