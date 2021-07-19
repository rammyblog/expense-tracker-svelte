import { writable } from "svelte/store";

function createTransaction() {
  const { subscribe, set, update } = writable({ transactions: [] });

  return {
    subscribe,
    add: (transaction) =>
      update((store) => {
        transaction.id = store.transactions.length + 1;
        store.transactions.concat(transaction);
      }),
    remove: (transaction) =>
      update((store) => {
        return store.map((t) => (t.id !== transaction.id ? t : null));
      }),
    reset: () => set({ transactions: [] }),
  };
}
export const transaction = createTransaction();
