export default function Game() {

  return (
    <div className="h-full flex gap-8">
      <div className={'w-[360px] flex flex-col gap-8 shrink-0'}>
        <div className={'w-full flex-1 bg-white pixel-border p-2'}>
          How to play?
        </div>
        <div className={'bg-white pixel-border h-[240px] p-2'}>
          Me
        </div>
      </div>
      <div className={'w-[600px] min-w-[600px] flex flex-col gap-8'}>
        <div className={'w-full bg-white pixel-border h-[640px] min-h-[600px] rounded-lg overflow-hidden'}>
          <div className={'h-[40px] shrink-0 flex justify-center border-b-2 border-black relative'}>
            <div className={'pt-2 bg-white px-8 z-10'}>Round x 0</div>
            <div className={'absolute h-[24px] w-full top-[8px] z-0 flex flex-col justify-between'}>
              {
                [0,1,2,3,4,5,6].map(item => (
                  <div key={item} className={'border-b-2 border-black w-full h-[2px]'}></div>
                ))
              }
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className={'bg-white pixel-border flex-1 p-2'}>
          Control or Result
        </div>
      </div>
      <div className={'flex flex-col gap-8 flex-1 min-w-[200px]'}>
        <div className={'w-full bg-white pixel-border p-2 flex-1'}>
          Looking forward to...
        </div>
      </div>
    </div>
  )
}
