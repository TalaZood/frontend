interface EitaaInitData {
  Utils: {
    urlSafeDecode: (str: string) => string;
  };
  WebApp: {
    initData: string;
    expand: VoidFunction;
    disableVerticalSwipes: VoidFunction;
  };
}

interface Window {
  Eitaa: EitaaInitData;
}
