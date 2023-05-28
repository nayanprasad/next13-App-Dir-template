import { SetState } from "zustand";

export interface TestStore {
    events: any[];
    getEvents: () => Promise<any[]>;
}

export const createTestStore = (set: SetState<TestStore>): TestStore => ({
    events: [],
    getEvents: async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const events = await response.json();
        set({ events });
        return events;
    },
});
