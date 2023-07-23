import Image from "next/image";
import {LIFES} from "@/misc/lifes";
import React, {useMemo} from "react";
import {classNames} from "@/lib/classNames";
import {Disclosure, Transition} from "@headlessui/react";

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
      <div className={'w-[300px] flex flex-col gap-8 shrink-0'}>
        <div className={classNames(
          'w-full bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black p-2',
        )}>
          <Disclosure defaultOpen>
            {({open}) => (
              <>
                <Disclosure.Button className={classNames(
                  'font-bold w-full text-start flex justify-between',
                )}>
                  <div>
                    How to play?
                  </div>
                  <div className={classNames(
                    'w-6 h-6 flex justify-center items-center',
                    open ? 'rotate-90 transform' : ''
                  )}>
                    {'>'}
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 pt-2">
                  This universe is composed of finite grids, the blue squares are normal cells, and
                  the red squares are
                  alien cells. The two sides will compete on this piece of land. At the end of the game, the player with
                  the
                  most surviving cells wins.
                  <br/>
                  <br/>
                  Birth: ( 3 )
                  <br/>
                  Survival: ( 2, 3 )
                  <br/>
                  Death: ( 0, 1, 4 ... 8 )
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className={'bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black p-2 grow'}>
          <div>
            Dashboard
          </div>
        </div>
        <button className={classNames(
          'bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black p-2 text-start',
          'hover:border-2 active:border-t-4 active:border-l-4 active:border-b-2 active:border-r-2',
        )}>
          Connect Wallet
        </button>
      </div>
      <div className={'flex flex-col gap-8'}>
        <div
          className={'w-full h-full bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black rounded-lg overflow-hidden'}>
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
          <div className={'flex border-b-2 border-black'}>
            <div className="grid grid-cols-16 gap-1 h-[600px] min-h-[600px] w-[600px] border-r-2 border-black">
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
            <div className={'w-[40px] justify-center'}>
              <button className={'w-[40px] h-[40px] flex justify-center items-center border-b-2 border-black'}>
                <Image src={'/images/pencil.png'} alt={''} width={'28'} height={'28'} />
              </button>
              <button className={'w-[40px] h-[40px] flex justify-center items-center border-b-2 border-black'}>
                <Image src={'/images/eraser.png'} alt={''} width={'28'} height={'28'} />
              </button>
              <button className={'w-[40px] h-[40px] flex justify-center items-center border-b-2 border-black'}>
                <Image src={'/images/hands.png'} alt={''} width={'28'} height={'28'} />
              </button>
            </div>
          </div>
          <div className={'shrink-0 p-2 text-sm grow'}>
            x= 0, y=0
          </div>
        </div>
        <div className={'bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black p-2 space-x-4 rounded-full'}>
          <div className={'flex justify-around items-center space-x-4 h-[60px]'}>
            <button className={classNames(
              'border-r-4 border-b-4 border-t-2 border-l-2 border-black rounded px-4 py-2',
              'hover:border-2 active:border-t-4 active:border-l-4 active:border-b-2 active:border-r-2',
              'flex items-center justify-center'
            )}>
              Start
            </button>
          </div>
        </div>
      </div>
      <div className={'flex flex-col gap-8 min-w-[240px] grow'}>
        <div className={'w-full bg-white border-r-4 border-b-4 border-t-2 border-l-2 border-black grow'}>
          <div className={'p-2 border-b-2 border-black flex justify-between items-center'}>
            <input className={'text-sm bg-white border-2 border-black px-4 py-2 rounded-full'}
                   placeholder={'Search...'}
            />
            <div>sort</div>
          </div>

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
