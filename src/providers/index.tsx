import { PropsWithChildren, Suspense } from "react";
import QueryProvider from "./QueryProvider";
import MiniAppProvider from "./MiniAppProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <Suspense>
        <MiniAppProvider>{children}</MiniAppProvider>
      </Suspense>
    </QueryProvider>
  );
}
