import '@/styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "@/utils/theme";
import Script from "next/script";
import {DefaultSeo} from "next-seo";
import SEO from "@/components/seo";

export default function App({Component, pageProps}) {
    return (
        <>
            <DefaultSeo {...SEO}/>
            <Script async defer data-website-id="47a88bb8-2434-4e22-9847-6f901299dc00"
                    src="https://analytics.theteacup.dev/umami.js"></Script>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}