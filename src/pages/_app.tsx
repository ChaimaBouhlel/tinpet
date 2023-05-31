import '@/styles/globals.css'
import {AppPropsWithLayout} from "@/types/global";
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                {getLayout(<Component {...pageProps} />)}
            </RecoilRoot>
        </QueryClientProvider>
    );
}