export default function Home() {

  return (
    <div className="h-full flex items-center justify-center">
      <div className={'w-[400px] p-8 bg-white flex flex-col gap-8 border-2 border-black'}>
        <div className={'font-bold p-2 text-2xl text-center'}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Conway's Game of Life
        </div>
        <div className={'flex flex-col'}>
          <button className={'bg-white px-6 py-4 border-2 border-black font-bold'}>
            Connect Wallet
          </button>
          <button className={'bg-white px-6 py-4 font-bold'}>
            Visitor Mode
          </button>
        </div>

      </div>
    </div>
  )
}
