"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { isClientSide } from "@/lib/utils/environment";
import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from "react";

type AppContext = {
  initData?: EitaaInitData;
};

const AppContext = createContext<AppContext | undefined>(undefined);

export function useMiniAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useMiniAppContext is used outside of its provider");
  }

  return context;
}

export default function MiniAppProvider({ children }: PropsWithChildren) {
  const searchParams = useSearchParams();
  const [initData, setInitData] = useState<EitaaInitData>();

  const isInMiniApp = Boolean(
    isClientSide() &&
      (searchParams.get("utm_source") === "eitaa" ||
        sessionStorage.getItem("isInMiniApp"))
  );

  if (isClientSide() && searchParams.get("utm_source") === "eitaa") {
    sessionStorage.setItem("isInMiniApp", "true");
  }

  const setMiniAppContext = useCallback(() => {
    const globalInitData = window.Eitaa;

    setInitData(globalInitData);
    globalInitData.WebApp.expand(); // Expand mini-app bottom-sheet
    globalInitData.WebApp.disableVerticalSwipes();
  }, []);

  const values = useMemo(() => ({ initData }), [initData]);

  return (
    <AppContext.Provider value={values}>
      {children}

      {isInMiniApp && (
        <Script
          async
          src="https://developer.eitaa.com/eitaa-web-app.js"
          onLoad={setMiniAppContext}
        />
      )}
    </AppContext.Provider>
  );
}
