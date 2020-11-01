import create from "zustand";

export const useStore = create(set => ({
  count1: 1,
  count2: 1,
  // inc1: () => set(state => ({ count1: state.count1 + 1 }))
  inc: {
    inc1: () => set(state => ({ count1: state.count1 + 1 })),
    inc2: () => set(state => ({ count2: state.count2 + 1 }))
  }
}));
