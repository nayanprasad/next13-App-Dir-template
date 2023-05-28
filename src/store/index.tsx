import { create, SetState } from "zustand";
import {createTestStore, TestStore} from "./test-store";

export interface Store extends TestStore {
    hydrateStore: (data: Partial<Store>) => void;
}

export const useStore = create<Store>((set: SetState<Store>): Store => ({
    ...createTestStore(set),
    hydrateStore: (data: Partial<Store>) => {
        set((state) => ({ ...state, ...data }));
    },
}));
