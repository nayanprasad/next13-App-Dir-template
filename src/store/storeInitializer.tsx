import { useRef, FC } from "react";
import { useStore, Store } from "./index";

interface StoreInitializerProps {
    initialStore: Partial<Store>;
    children: React.ReactNode;
}

export const StoreInitializer: FC<StoreInitializerProps> = ({
    initialStore,
    children,
}) => {
    const initializedBefore = useRef(false);

    if (!initializedBefore.current) {
        useStore.getState().hydrateStore(initialStore);
        initializedBefore.current = true;
    }

    return <>{children}</>;
};
