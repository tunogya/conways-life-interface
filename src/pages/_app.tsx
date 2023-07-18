import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Tab} from "@headlessui/react";
import {useState} from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function App({ Component, pageProps }: AppProps) {
  let [categories] = useState({
    Home: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="px-2 sm:px-0 w-screen h-screen relative">
      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-white absolute w-full">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-[160px] rounded-tl-lg rounded-tr-lg py-2 text-sm font-medium leading-5 text-black',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                  selected
                    ? 'bg-gray-200 font-bold'
                    : ''
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <div className={'pt-14 py-6 px-10 h-full w-full'}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
