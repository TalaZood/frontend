interface EitaaInitData {
  WebApp: {
    expand: VoidFunction;
    disableVerticalSwipes: VoidFunction;
  };
}

interface Window {
  Eitaa: EitaaInitData;
}
