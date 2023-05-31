import '@/styles/globals.css'
import {AppPropsWithLayout} from "@/types/global";


export default function App({ Component, pageProps }: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}