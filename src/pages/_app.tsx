import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import store from "@/store";

export default function App({Component, pageProps}: AppProps) {

  return (
    <Provider store={store}>
      <div className="p-4 flex flex-col h-screen w-screen">
        <div
          className={'pt-[44px] pb-8 px-12 grow w-full border-r-4 border-b-4 border-t-2 border-l-2 border-black pixel overflow-y-auto'}>
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  )
}
