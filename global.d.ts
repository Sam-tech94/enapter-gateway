interface Window {
  dataLayer: Array<{ [key: string]: any }>;
  gtag: (...args: any[]) => void; // Allow any number of arguments of any type
}