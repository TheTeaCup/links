import '@/styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "@/utils/theme";
import Script from "next/script";

export default function App({Component, pageProps}) {
    return (
        <>
            <Script async defer data-website-id="46f0a41b-d1b2-4762-a1e0-44b254a0d8d3"
                    src="https://analytics.theteacup.dev/umami.js"></Script>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}