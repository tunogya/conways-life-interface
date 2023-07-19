export default function Home() {

  return (
    <div className="h-full flex items-center justify-center">
      <div className={'w-[800px] h-[600px] p-8 bg-white flex flex-col gap-8 pixel-border justify-between'}>
        <div className={'font-bold p-2 text-2xl text-center'}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Conway's Game of Life
        </div>
        <div className={'flex flex-col items-center space-y-4'}>
          <button className={'bg-white px-6 py-4 pixel-border font-bold w-[240px]'}>
            Connect Wallet
          </button>
          <a href={'/playground'}>
            <button className={'bg-white px-6 py-4 font-bold'}>
              Playground
            </button>
          </a>
        </div>
        <div className={'text-center'}>
          © 2023, abandon inc.
        </div>
      </div>
    </div>
  )
}
