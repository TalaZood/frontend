import { PropsWithChildren } from "react";
import QueryProvider from "./QueryProvider";
import MiniAppProvider from "./MiniAppProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <MiniAppProvider>{children}</MiniAppProvider>
    </QueryProvider>
  );
}
