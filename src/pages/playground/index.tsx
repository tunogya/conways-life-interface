import Image from "next/image";
import {LIFES} from "@/misc/lifes";
import React from "react";

export default function Game() {

  const array = Array(16).fill([]).map(() => Array(16).fill('*'));

  return (
    <div className="h-full flex gap-8">
      <div className={'w-[360px] flex flex-col gap-8 shrink-0'}>
        <div className={'w-full bg-white pixel-border p-2'}>
          <div className={'font-bold'}>How to play?</div>
          <div className={'text-sm'}>This universe is composed of finite grids, the blue squares are normal cells, and
            the red squares are
            alien cells. The two sides will compete on this piece of land. At the end of the game, the player with the
            most surviving cells wins.
            <br/>
            <br/>
            Birth: ( 3 )
            <br/>
            Survival: ( 2, 3 )
            <br/>
            Death: ( 0, 1, 4 ... 8 )
          </div>
        </div>
        <div className={'bg-white pixel-border grow p-2'}>
          Dashboard
        </div>
        <div className={'bg-white pixel-border p-2'}>
          Version: 0.1 beta
        </div>
      </div>
      <div className={'w-[600px] min-w-[600px] flex flex-col gap-8'}>
        <div className={'w-full bg-white pixel-border h-[640px] min-h-[600px] rounded-lg overflow-hidden'}>
          <div className={'h-[40px] shrink-0 flex justify-center border-b-2 border-black relative'}>
            <div className={'pt-2 bg-white px-8 z-10'}>Round x 0</div>
            <div className={'absolute h-[24px] w-full top-[8px] z-0 flex flex-col justify-between'}>
              {
                [0, 1, 2, 3, 4, 5, 6].map(item => (
                  <div key={item} className={'border-b-2 border-black w-full h-[2px]'}></div>
                ))
              }
            </div>
          </div>
          <div className="grid grid-cols-16 gap-1 h-full">
            {array.map((row, i) => (
              <div key={i} className="flex h-full">
                {row.map((num, j) => (
                  <div
                    key={j}
                    className="w-full h-full flex items-center justify-center text-xs"
                  >
                    {num}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={'bg-white pixel-border grow p-2 space-x-4'}>
          <button className={'pixel-border px-8 py-2'}>
            Start
          </button>
          <button className={'pixel-border px-8 py-2'}>
            Clean
          </button>
          <button className={'pixel-border px-8 py-2'}>
            Revert
          </button>
        </div>
      </div>
      <div className={'flex gap-8 min-w-[240px] grow'}>
        <div className={'w-full bg-white pixel-border flex flex-col divide-y divide-black space-y-2'}>
          <div className={'p-2 space-y-2'}>
            {/*实现网格的纵向对齐*/}
            <div className={'flex justify-between'}>
              {
                LIFES.map((item) => (
                  <div key={item.name} className={'flex flex-col'}>
                    <Image width={'44'} height={'44'} src={item.url} alt={item.name}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
