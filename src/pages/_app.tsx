import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Tab} from "@headlessui/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {classNames} from "@/lib/classNames";

export default function App({Component, pageProps}: AppProps) {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)
  let [categories, setCategories] = useState([
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Playground',
      href: '/playground',
    }
  ])

  useEffect(() => {
    // 根据router.pathname设置selectedIndex
    setCategories(categories => {
      let index = categories.findIndex(category => category.href === router.pathname)
      if (index === -1) {
        index = 0
      }
      setSelectedIndex(index)
      return categories
    })
  }, [categories, router.pathname])

  return (
    <div className="p-4 flex flex-col h-screen w-screen">
      <div className={'pt-[44px] pb-8 px-12 grow w-full border-r-4 border-b-4 border-t-2 border-l-2 border-black pixel overflow-y-auto'}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
