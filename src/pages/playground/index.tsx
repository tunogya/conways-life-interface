export default function Game() {

  return (
    <div className="h-full flex gap-8">
      <div className={'w-[360px] flex flex-col gap-8 shrink-0'}>
        <div className={'w-full flex-1 bg-white pixel-border p-2 overflow-y-auto'}>
          <div>How to play?</div>
          <div>This universe is composed of finite grids, the blue squares are normal cells, and the red squares are
            alien cells. The two sides will compete on this piece of land. At the end of the game, the player with the
            most surviving cells wins.
            <br/>
            <br/>
            1. Birth: If and only if there are exactly three living cells of the same population around, new cells will
            be born in the block. If the three surrounding cells are of different populations, no new cells are
            generated.
            <br/>
            <br/>
            2. Survival: A cell can survive if and only if it is surrounded by two or three other living cells, no more
            and no less. Cells of other populations may be contained in two or three.
            <br/>
            <br/>
            3. Death: A cell dies if it is surrounded by fewer than two (quarantined) and more than three
            (overpopulated) arbitrary living cells.
          </div>
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
                [0, 1, 2, 3, 4, 5, 6].map(item => (
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
