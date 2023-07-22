import Image from "next/image";
import {LIFES} from "@/misc/lifes";
import React, {useMemo} from "react";
import {classNames} from "@/lib/classNames";

export default function Game() {

  const array = Array(16).fill([]).map(() => Array(16).fill('*'));

  const GROUPED_LIFES = useMemo(() => {
  //   对 LIFES 进行分组，根据 tokens， key = tokens， value 将为他们的数组
    let result: Record<string, any> = {};
    for (let i = 0; i < LIFES.length; i++) {
      const life = LIFES[i];
      const tokens = life.tokens.toString();
      if (!result[tokens]) {
        result[tokens] = [];
      }
      result[tokens].push(life);
    }
    return result;
  }, [LIFES])

  return (
    <div className="h-full flex gap-8">
      <div className={'w-[360px] flex flex-col gap-8 shrink-0'}>
        <div className={'w-full bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black  p-2'}>
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
        <div className={'bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black  grow p-2'}>
          Dashboard
        </div>
        <div className={'bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black p-2'}>
          Login
        </div>
      </div>
      <div className={'w-[600px] min-w-[600px] flex flex-col gap-8'}>
        <div className={'w-full bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black  h-[640px] min-h-[600px] rounded-lg overflow-hidden'}>
          <div className={'h-[40px] shrink-0 flex justify-center border-b-2 border-black relative'}>
            <div className={'pt-2 bg-white px-8 z-10 font-bold'}>Round x 0</div>
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
        <div className={'bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black grow p-2 space-x-4'}>
          <div className={'flex justify-around items-center h-full space-x-4'}>
            <button className={classNames(
              'border-r-4 border-b-4 border-t-2 border-l-2 border-black rounded-full h-[80px] w-[80px]',
              'hover:border-2 active:border-t-4 active:border-l-4 active:border-b-2 active:border-r-2',
              'flex items-center justify-center'
            )}>
              Start
            </button>
            <button className={classNames(
              'border-r-4 border-b-4 border-t-2 border-l-2 border-black rounded-full h-[80px] w-[80px]',
              'hover:border-2 active:border-t-4 active:border-l-4 active:border-b-2 active:border-r-2',
              'flex items-center justify-center'
            )}>
              Clean
            </button>
            <button className={classNames(
              'border-r-4 border-b-4 border-t-2 border-l-2 border-black rounded-full h-[80px] w-[80px]',
              'hover:border-2 active:border-t-4 active:border-l-4 active:border-b-2 active:border-r-2',
              'flex items-center justify-center'
            )}>
              Revert
            </button>
            <button className={classNames(
              'border-r-4 border-b-4 border-t-2 border-l-2 border-black rounded-full h-[80px] w-[80px]',
              'hover:border-2 active:border-t-4 active:border-l-4 active:border-b-2 active:border-r-2',
              'flex items-center justify-center'
            )}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div className={'flex gap-8 min-w-[240px] grow'}>
        <div className={'w-full bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black '}>
          {
            Object.keys(GROUPED_LIFES).map((key: string, i: number) => (
              <div key={i} className={'flex flex-col border-b border-black'}>
                <div className={'flex'}>
                  <div className={'text-xs font-bold p-2'}>{key}</div>
                  {
                    GROUPED_LIFES[key].map((item: any, j: number) => (
                      <div key={item.name} className={''}>
                        <Image width={'44'} height={'44'} src={item.url} alt={item.name}/>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
