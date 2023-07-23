import {classNames} from "@/lib/classNames";
import Image from "next/image";

export default function Home() {

  return (
    <div className="h-full flex items-center justify-center">
      <div
        className={classNames(
          'w-[800px] py-10 bg-white flex flex-col gap-8 justify-between',
          'border-r-4 border-b-4 border-t-2 border-l-2 border-black',
        )}>
        <div className={'flex justify-center'}>
          <Image src={'/info.png'} alt={'info'} width={'600'} height={'380'} />
        </div>
        <div className={'flex flex-col items-center space-y-4 h-[64px]'}>
          <a href={'/playground'}>
            <button
              className={classNames(
                'bg-white px-6 py-4 border-r-4 font-bold w-[240px]',
                'border-b-4 border-t-2 border-l-2 border-black',
                'hover:border-2 active:border-t-4 active:border-l-4 active:border-b-2 active:border-r-2'
              )}>
              Playground
            </button>
          </a>
        </div>
        <div className={'text-center'}>
          Copyright ©2023 abandon inc. All rights reserved.
        </div>
      </div>
    </div>
  )
}
