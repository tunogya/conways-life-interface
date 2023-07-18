export default function Game() {

  return (
    <div className="h-full flex gap-6">
      <div className={'w-[400px] flex flex-col gap-6'}>
        <div className={'w-full bg-white border-black border-2 h-full'}>
          1
        </div>
        <div className={'bg-white border-black border-2 h-[400px]'}>
          2
        </div>
      </div>
      <div className={'w-full flex flex-col gap-6'}>
        <div className={'w-full bg-white border-black border-2 h-full rounded'}>
          1
        </div>
        <div className={'bg-white border-black border-2 h-[240px]'}>
          2
        </div>
      </div>
      <div className={'w-[140px] flex flex-col gap-6'}>
        <div className={'w-full bg-white border-black border-2 h-full rounded'}>
          1
        </div>
      </div>
    </div>
  )
}
