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
    <div className="w-screen h-screen flex flex-col p-1">
      <Tab.Group selectedIndex={selectedIndex} onChange={async (index) => {
        setSelectedIndex(index)
        await router.push(categories[index].href)
      }}>
        <Tab.List className="flex bg-white space-x-1 w-full h-[44px] top-0">
          {categories.map((category) => (
            <Tab
              key={category.name}
              className={({selected}) =>
                classNames(
                  'w-[160px] rounded-tl-lg rounded-tr-lg py-2 text-sm font-medium leading-5 text-black shrink-0',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                  selected
                    ? 'bg-black text-white'
                    : ''
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <div className={'pt-[44px] pb-8 px-12 grow w-full border-r-4 border-b-4 border-t-2 border-l-2 border-black  pixel overflow-y-auto'}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
